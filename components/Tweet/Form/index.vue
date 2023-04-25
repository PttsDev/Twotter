<template>
  <TweetFormInput class="max-w-sm" :user="props.user" @onSubmit="handleFormSubmit" />
</template>

<script setup>

const { postTweet } = useTweets()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})



async function handleFormSubmit(tweetData) {
  const { postTweet } = useTweets()
  try {
    const res = await postTweet({

      text: tweetData.text,
      mediaFiles: tweetData.mediaFiles

    })

    console.log(res)
  } catch (error) {
    console.log(error)
  } finally {
    //tweetText.value = ''
  }

}
</script>