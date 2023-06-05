
<template>
  <div v-for="image in props.mediaFiles" :key="image.id" class="flex my-3 mr-4">
    <img :src="image.url" class="border-2 rounded-2xl w-full " :class="twitterBorderColor" />
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()

const props = defineProps({
  mediaFiles: {
    type: Array,
    required: true
  }
})

</script>