import { sendError } from "h3";
import { getUserByUsername } from "~~/server/db/users";
import { User } from "~~/server/types/User";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt";
import { userTransformer } from "~~/server/transformers/user";
import { createRefreshToken } from "~~/server/db/refreshTokens";
import { RefreshToken } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const body: User = await readBody(event);

  const { username, password }: User = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid parameters" })
    );
  }

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid account" })
    );
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid account" })
    );
  }

  // JWT token generation

  const { accessToken, refreshToken } = generateTokens(user);

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  } as RefreshToken);

  // As http only cookie

  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
