<template>
  <nuxt-link :to="tweetUrl">
    <article class="hover:backdrop-brightness-95 dark:hover:backdrop-brightness-110 hover:cursor-pointer w-full border-b"
      :class="[twitterBorderColor, defaultTransition]">
      <div class="flex flex-col pb-1 pt-1">

        <div class="flex flex-row ml-4 mt-4 items-start gap-4">
          <TweetItemHeaderImage :author="props.tweet.author" />

          <div>
            <TweetItemHeaderUser :tweet="props.tweet" />
            <TweetItemContent :tweet="props.tweet" />

            <TweetItemActions :tweet="tweet" />
          </div>

        </div>

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
  }
})

const tweetUrl = computed(() => `/${props.tweet.author.username}/status/${props.tweet.id}`)

</script>