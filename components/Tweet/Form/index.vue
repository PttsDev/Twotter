<template>
  <div class="flex items-center justify-center p-6" v-if="loading">
    <UISpinner />
  </div>

  <div v-else>
    <TweetFormInput class="max-w-sm" :user="props.user" @onSubmit="handleFormSubmit" />
  </div>
</template>

<script setup>

const { postTweet } = useTweets()

const loading = ref(false)

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})



async function handleFormSubmit(tweetData) {
  loading.value = true
  try {
    const res = await postTweet({
      text: tweetData.text,
      mediaFiles: tweetData.mediaFiles
    })

    // console.log(res)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false

  }

}
</script>