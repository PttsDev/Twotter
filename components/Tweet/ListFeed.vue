<template>
  <div>
    <div class="p-4 border-0" v-if="isEmpty">
      <p class="text-center text-gray-400"> {{ props.emptyText }}</p>
    </div>

    <div v-else>
      <ul>
        <TweetItem v-for="tweet in props.tweets" :tweet="tweet" :key="tweet.id" />
      </ul>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  tweets: {
    type: Array,
    required: true
  },
  emptyText: {
    type: String,
    default: 'No tweets 😢'
  },
})

const isEmpty = computed(() => props.tweets.length === 0)

</script>