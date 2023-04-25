<template>
  <button class="py-2 px-4 self-center rounded-full font-bold text-sm hover:opacity-80" :class="textColor, bgColor">
    <slot />
  </button>
</template>

<script setup>

const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-black dark:bg-white'
  },

  textColor: {
    type: String,
    default: 'text-white dark:text-dim-900'
  }
})

</script>