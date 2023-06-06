import { prisma } from ".";

export const createTweet = async (tweetData: any) => {
  return await prisma.tweet.create({
    data: tweetData,
  });
};

export const getTweets = async (params: any = {}) => {
  return await prisma.tweet.findMany({
    ...params,
  });
};

export const getTweet = async (id: string, params: any = {}) => {
  return await prisma.tweet.findUnique({
    ...params,
    where: {
      ...params.where,
      id,
    },
  });
};
