import formidable from "formidable";
import { createMediaFile } from "~~/server/db/mediaFiles";
import { createTweet } from "~~/server/db/tweets";
import { tweetTransformer } from "~~/server/transformers/tweetTransformer";
import { uploadToCloudinary } from "~~/server/utils/cloudinary";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  interface IRes {
    fields: formidable.Fields;
    files: formidable.Files;
  }
  const response: IRes = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  const { fields, files } = response;
  const userId: string = event.context?.auth?.user?.id;

  const tweetData = {
    text: fields.text,
    authorId: userId,
  };

  const tweet = await createTweet(tweetData);
  const filePromises = Object.keys(files).map(async (key) => {
    const file: any = files[key];

    const cloudinaryResource = await uploadToCloudinary(file.filepath);
    if (!cloudinaryResource) throw new Error("Cloudinary upload failed");

    return createMediaFile({
      url: cloudinaryResource.secure_url,
      providerPublicId: cloudinaryResource.public_id,
      type: cloudinaryResource.resource_type,
      userId,
      tweetId: tweet.id,
    });
  });

  await Promise.all(filePromises);
  return {
    tweet: tweetTransformer(tweet),
  };
});
