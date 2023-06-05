<template>
  <div  class="flex flex-col flex-shrink">
    <p v-if="props.tweet.replyTo" class="text-gray-400 font-normal">Replying to
      <nuxt-link class="hover:cursor-pointer hover:underline text-blue-500" :to="replyToTweetAuthor.username">{{
        replyToTweetAuthor.handle
      }}</nuxt-link>
    </p>
    <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-white">
      {{ props.tweet.text }}
    </p>
    <TweetItemMediaFiles v-if="tweet.mediaFiles" :mediaFiles="props.tweet.mediaFiles" />
  </div>
</template>

<script setup>

const props = defineProps({
  tweet: {
    type: Object,
    required: true
  }
})
console.log(props.tweet)
const replyToTweetAuthor = props.tweet.replyTo?.author
const replyToTweetUrl = computed(() => `${props.replyToTweetAuthor.author.username}/status/${props.tweet?.replyTo?.id}`)

</script>