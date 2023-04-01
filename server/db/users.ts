import { prisma } from ".";
import { User } from "../types/User";
import bcrypt from "bcrypt";

export const createUser = async (userData: User) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return await prisma.user.create({
    data: finalUserData,
  });
};
