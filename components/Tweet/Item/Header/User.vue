<template>
  <header class="flex flex-row gap-1">
    <nuxt-link :to="author.username" class="font-bold hover:underline"> {{ author.name }} </nuxt-link>
    <nuxt-link :to="author.username" class="opacity-70 dark:opacity-50 font-thin">{{ author.handle }}</nuxt-link>
    <p class="opacity-50">·</p>
    <p class="opacity-70 dark:opacity-50 text-md font-extralight hover:underline">{{ formatedTime }}</p>
  </header>
</template>


<script setup>

const props = defineProps({
  tweet: {
    type: Object,
    required: true
  }
})

const author = props.tweet.author
// Convert 1 hour ago to 1h, 1 day ago to 1d...
const formatedTime = props.tweet.postedAtHuman.replace(' ago', '').replace(' hours', 'h').replace(' hour', 'h').replace(' days', 'd').replace(' day', 'd').replace(' minutes', 'min').replace(' minute', 'min').replace(' seconds', 's').replace(' second', 's').replace(' months', 'mo').replace(' month', 'mo').replace(' years', 'y').replace(' year', 'y')
</script>

