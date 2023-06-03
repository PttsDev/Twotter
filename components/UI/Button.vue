<template>
  <button class="self-center rounded-full font-bold  hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="computedClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>

const { defaultTransition } = useTailwindConfig()

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },

  size: {
    type: String,
    default: 'md'
  },

  disabled: {
    type: Boolean,
    default: false
  },

  liquid: {
    type: Boolean,
    default: false
  }
})

const buttonTypes = {
  primary: 'bg-black dark:bg-white text-white dark:text-dim-900',
  secondary: 'bg-blue-400 dark:bg-blue-400 text-gray-100 dark:text-gray-100'
}

const sizes = {
  sm: 'px-2 py-2',
  md: 'px-4 py-2',
  lg: 'px-14 py-3'
}

const textSizes = {
  sm: 'text-sm',
  lg: 'text-lg'
}

const typeClasses = computed(() => {
  return buttonTypes[props.type] || buttonTypes['primary']
})

const sizeClasses = computed(() => {
  return sizes[props.size] || sizes['md']
})

const textSizeClasses = computed(() => {
  return textSizes[props.size] || textSizes['sm']
})


const computedWidth = computed(() => {
  return props.liquid ? 'w-full' : 'w-min'
})

const computedClasses = computed(() => {
  return `${typeClasses.value} ${sizeClasses.value} ${textSizeClasses.value} ${computedWidth.value} ${defaultTransition}`
})

</script>