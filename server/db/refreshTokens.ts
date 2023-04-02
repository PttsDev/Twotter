import { RefreshToken } from "@prisma/client";
import { prisma } from ".";

export const createRefreshToken = async (refreshToken: RefreshToken) => {
  const { token, userId } = refreshToken;
  return await prisma.refreshToken.create({
    data: refreshToken,
  });
};
