export default () => {

  const postTweet = async (tweet) => {

    const form = new FormData();
    form.append('text', tweet.text);

    tweet.mediaFiles.forEach((mediaFile, index) => {
      form.append(`media_file_${index}`, mediaFile);
    })

    return await useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form
    })
  }

  return {
    postTweet
  }
}