import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { sendError } from "h3";
import { getUserById } from "../db/users";

export default defineEventHandler(async (event) => {
  const endpoints = ["/api/auth/user", "/api/user/tweets", "/api/tweets"];

  const isValidEndpoint = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    let url = event.node.req.url;
    /* Remove trailing / if it exists */
    const accessingEndpoint = url?.replace(/\/+$/, "");
    /* in case the accessingEndpoint is undefined */
    return accessingEndpoint && pattern.match(accessingEndpoint);
  });

  if (!isValidEndpoint) return;

  const token = event.node.req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }

  const decodedToken = decodeAccessToken(token);

  if (!decodedToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }

  try {
    const userId = decodedToken.userId;
    const user = await getUserById(userId);

    event.context.auth = { user };
  } catch (e) {
    return;
  }
});
