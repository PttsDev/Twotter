import { sendError } from "h3";
import { getTweets } from "~~/server/db/tweets";
import { tweetTransformer } from "~~/server/transformers/tweetTransformer";

export default defineEventHandler(async (event) => {
  const tweets = await getTweets({
    include: {
      author: true,
      mediaFiles: true,
      replies: {
        include: {
          author: true,
        },
      },
      replyTo: {
        include: {
          author: true,
        },
      },
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return {
    tweets: tweets.map(tweetTransformer),
  };
});
