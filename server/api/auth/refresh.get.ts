import { sendError } from "h3";
import { getRefreshTokenByToken } from "~~/server/db/refreshTokens";
import { getUserById } from "~~/server/db/users";
import { decodeRefreshToken } from "~~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);

  const refreshToken = cookies.refreshToken;

  if (!refreshToken) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Invalid refresh token." })
    );
  }

  const rToken = await getRefreshTokenByToken(refreshToken);

  if (!rToken) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Invalid refresh token." })
    );
  }

  const token = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token.userId);
    if (!user) throw new Error("User not found");

    const { accessToken } = generateTokens(user);
    return { access_token: accessToken };
  } catch (e) {
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Something went wrong." })
    );
  }
});
