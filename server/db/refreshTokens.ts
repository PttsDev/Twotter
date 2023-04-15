import { RefreshToken } from "@prisma/client";
import { prisma } from ".";

export const createRefreshToken = async (refreshToken: RefreshToken) => {
  return await prisma.refreshToken.create({
    data: refreshToken,
  });
};

export const getRefreshTokenByToken = async (token: string) => {
  return await prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
};
