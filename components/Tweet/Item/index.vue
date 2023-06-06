<template>
  <nuxt-link :to="tweetUrl">
    <article class="hover:backdrop-brightness-95 dark:hover:backdrop-brightness-110 hover:cursor-pointer w-full border-b"
      :class="[twitterBorderColor, defaultTransition]">
      <div class="flex flex-col pb-1 pt-1">

        <div v-if="!compact" class="flex flex-row ml-4 mt-4 items-start gap-4">
          <TweetItemHeaderImage :author="props.tweet.author" />

          <div>
            <TweetItemHeaderUser :tweet="props.tweet" />
            <TweetItemContent :tweet="props.tweet" />

            <TweetItemActions :tweet="tweet" />
          </div>

        </div>

        <div v-else class="flex flex-col ml-4 mt-4 items-start gap-4">
          <div class="flex flex-row items-center gap-3">
            <TweetItemHeaderImage :author="props.tweet.author" />
            <TweetItemHeaderUser compact :tweet="props.tweet" />
          </div>
          <div>
            <TweetItemContent :tweet="props.tweet" />
          </div>


        </div>

      </div>

      <div v-if="compact" class="flex flex-col">
        <div class="text-gray-400 font-light border-b pb-3" :class="twitterBorderColor">
          <span class="ml-4">{{ tweet.postedAt }}</span>
        </div>
        <TweetItemActions class="pt-1 pb-1 ml-2 justify-stretch" :tweet="tweet" />
      </div>


    </article>
  </nuxt-link>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig()

const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const tweetUrl = computed(() => `/${props.tweet.author.username}/status/${props.tweet.id}`)



</script>