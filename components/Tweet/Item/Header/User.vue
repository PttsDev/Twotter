<template>
  <header class="flex gap-1" :class="compactClass">
    <nuxt-link :to="author.username" class="font-bold hover:underline"> {{ author.name }} </nuxt-link>
    <nuxt-link :to="author.username" class="opacity-70 dark:opacity-50 font-thin">{{ author.handle }}</nuxt-link>
    <p v-if="!compact" class="opacity-50">·</p>
    <p v-if="!compact" class="opacity-70 dark:opacity-50 text-md font-extralight hover:underline">{{ formatedTime }}</p>
  </header>
</template>


<script setup>

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

const author = props.tweet.author
// Convert 1 hour ago to 1h, 1 day ago to 1d...
const formatedTime = props.tweet.postedAtHuman.replace(' ago', '').replace(' hours', 'h').replace(' hour', 'h').replace(' days', 'd').replace(' day', 'd').replace(' minutes', 'min').replace(' minute', 'min').replace(' seconds', 's').replace(' second', 's').replace(' months', 'mo').replace(' month', 'mo').replace(' years', 'y').replace(' year', 'y')

const compactClass = computed(() => {
  return props.compact ? 'flex-col' : 'flex-row'
})

</script>

