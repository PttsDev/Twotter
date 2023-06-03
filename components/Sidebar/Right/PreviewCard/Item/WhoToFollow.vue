<template>
  <div class="flex flex-row items-center justify-between">
    <div class="flex flex-row items-center">

      <img class="hover:opacity-80 w-10 h-10 rounded-full" :class="defaultTransition"
        :src="props.value ? props.value.img : ''" :alt="props.value.handle">
      <div class="flex flex-col ml-3">
        <p class="hover:underline font-bold text-gray-900 dark:text-white" :class="defaultTransition">{{ props.value ?
          props.value.name :
          'Could not load'
        }}</p>
        <p class="text-md text-gray-400">{{ props.value ? props.value.handle : 'Could not load' }}</p>
      </div>

    </div>

    <div class="flex flex-row h-full">
      <UIButton>Follow</UIButton>
    </div>

  </div>
</template>

<script setup lang="ts">

import { IWTFItems } from '~/types'

const { defaultTransition, twitterBorderColor } = useTailwindConfig()
const wrappedClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)


const props = defineProps({
  value: {
    type: Object as PropType<IWTFItems>,
    required: false,
    default: null
  }
})

</script>