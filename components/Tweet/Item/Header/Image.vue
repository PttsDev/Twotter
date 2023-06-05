<template>
  <nuxt-link :to="author.username">
    <img class="w-12 h-12 rounded-full" :src="props.author.profileImage" :alt="props.author.username" />
  </nuxt-link>
</template>

<script setup>

const props = defineProps({
  author: {
    type: Object,
    required: true
  }
})

</script>