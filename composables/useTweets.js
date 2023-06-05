export default () => {

  const postTweet = async (tweet) => {

    const form = new FormData();
    form.append('text', tweet.text);

    tweet.mediaFiles.forEach((mediaFile, index) => {
      form.append(`media_file_${index}`, mediaFile);
    })

    try {
      return await useFetchApi('/api/user/tweets', {
        method: 'POST',
        body: form
      })
    } catch (err) {
      console.log(err);
    }
  }


  const getHomeTweets = async () => {
    try {
      return await useFetchApi('/api/tweets', {
        method: 'GET'

      })
    } catch (err) {
      console.log(err);
    }

  }

  return {
    postTweet,
    getHomeTweets
  }
}