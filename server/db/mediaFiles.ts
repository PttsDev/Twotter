import { prisma } from ".";

interface IMediaFile {
  url: string;
  providerPublicId: string;
  type: string;
  userId: string;
  tweetId: string;
}

export const createMediaFile = async (mediaFile: IMediaFile) => {
  return await prisma.mediaFile.create({
    data: { ...mediaFile },
  });
};
