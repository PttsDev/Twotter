<template>
  <div class="p-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 dark:text-white"
    :class="wrappedClasses">
    <div class="font-bold text-md">{{ props.value ? props.value.description : 'Could notload' }}</div>
    <div class="text-xs text-gray-400">{{ props.value ? props.value.tweet_num : 'Could not load' }} Tweets</div>
  </div>
</template>

<script setup lang="ts">

interface ItemProps {
  value: {
    id: number
    description: string
    tweet_num: string
  }
}

const { defaultTransition, twitterBorderColor } = useTailwindConfig()
const wrappedClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)


const props = defineProps<ItemProps>()

</script>