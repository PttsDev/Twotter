<template>
  <nuxt-link :to="props.to" class="flex items-center p-3 w-min gap-2 hover:bg-gray-200 rounded-full text-black
            dark:hover:bg-dim-200 dark:text-white" :class="defaultTransition">

    <div class="w-7 h-7 text-dark">
      <slot name="icon"></slot>
    </div>

    <div class="hidden text-xl xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>

  </nuxt-link>
</template>

<script setup>

const { defaultTransition } = useTailwindConfig()


const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: '#'
  }
})

const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')


</script>