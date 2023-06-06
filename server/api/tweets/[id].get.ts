import { getTweet } from "~~/server/db/tweets";
import { tweetTransformer } from "~~/server/transformers/tweetTransformer";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };

  const tweet = tweetTransformer(
    await getTweet(id, {
      include: {
        author: true,
        mediaFiles: true,
        replies: {
          include: {
            author: true,
            replyTo: {
              include: {
                author: true,
              },
            },
          },
        },
        replyTo: {
          include: {
            author: true,
          },
        },
      },
    })
  );

  return {
    tweet,
  };
});
