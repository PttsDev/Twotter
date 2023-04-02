import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

interface JWT {
  accessToken: string;
  refreshToken: string;
}

const generateAccessToken = (user: User): string => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "10m",
  });
};

const generateRefreshToken = (user: User): string => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "4h",
  });
};

export const generateTokens = (user: User): JWT => {
  return {
    accessToken: generateRefreshToken(user),
    refreshToken: generateAccessToken(user),
  };
};

export const sendRefreshToken = (event: any, token: string) => {
  setCookie(event, "refreshToken", token, {
    httpOnly: true,
    sameSite: true,
  });
};
