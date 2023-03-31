<template>
  <div>
    <div class="flex flex-row justify-between">
      <div class="font-bold text-md text-gray-900 dark:text-white">
        {{ props.value ? props.value.description : 'Could not load' }}
      </div>
      <EllipsisHorizontalIcon class="w-6 h-6 rounded-full hover:bg-gray-200 dark:hover:bg-dim-200" />
    </div>
    <div class="text-xs text-gray-400">{{ props.value ? props.value.tweet_num : 'Could not load' }} Tweets</div>
  </div>
</template>

<script setup lang="ts">

import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid';
import { IWHItems } from '~/types'

const { defaultTransition, twitterBorderColor } = useTailwindConfig()
const wrappedClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)
const props = defineProps({
  value: {
    type: Object as PropType<IWHItems>,
    required: false,
    default: null
  }
})

</script>