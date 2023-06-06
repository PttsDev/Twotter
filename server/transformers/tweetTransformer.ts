import { Tweet } from "@prisma/client";
import { mediaFileTransformer } from "./mediaFiles";
import { userTransformer } from "./user";
//@ts-ignore
import human from "human-time";
import moment from "moment";

export const tweetTransformer: any = (tweet: Tweet & any) => {
  return {
    id: tweet.id,
    text: tweet.text,
    mediaFiles: tweet.mediaFiles
      ? tweet.mediaFiles.map(mediaFileTransformer)
      : [],
    author: tweet.author ? userTransformer(tweet.author) : null,
    replies: tweet.replies ? tweet.replies.map(tweetTransformer) : [],
    replyTo: tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
    repliesCount: tweet.replies ? tweet.replies.length : 0,
    /* TODO likes and retweets */
    likesCount: tweet.likes ? tweet.likes.length : 0,
    retweetsCount: tweet.retweets ? tweet.retweets.length : 0,
    postedAt: moment(tweet.createdAt).format("h:mm a · DD MMM. YYYY"),
    postedAtHuman: human(tweet.createdAt),
  };
};
