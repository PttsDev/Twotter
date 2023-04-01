<template>
  <div class="border-x" :class="twitterBorderColor">
    <div class="border-b sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80 "
      :class="twitterBorderColor">
      <h2 class="font-bold text-xl text-gray-900 dark:text-gray-100">
        {{ props.title ? props.title : "Could not load" }}
      </h2>
    </div>

    <div v-if="props.loading" class="flex items-center justify-center py-4 border-b" :class="twitterBorderColor">
      <UISpinner />
    </div>

    <div v-else>
      <slot></slot>
    </div>

  </div>
</template>

<script setup>

const { twitterBorderColor } = useTailwindConfig()

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
})

</script>