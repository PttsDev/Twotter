import { sendError } from "h3";
import { createUser } from "~~/server/db/users";
import { userTransformer } from "~~/server/transformers/user";
import { User } from "~~/server/types/User";

export default defineEventHandler(async (event) => {
  const body: User = await readBody(event);

  if (!body)
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid parameters" })
    );

  const { name, username, password, repeatPassword, email } = body;

  if (!name || !username || !password || !repeatPassword || !email)
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid parameters" })
    );

  if (password !== repeatPassword)
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Passwords do not match" })
    );

  const user = await createUser({
    name,
    username,
    password,
    email,
    profileImage: "https://picsum.photos/200/200",
  });

  return {
    body: userTransformer(user),
  };
});
