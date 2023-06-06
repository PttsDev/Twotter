<template>
  <div>
    <TweetItem compact :tweet="props.tweet" />

    <TweetForm placeholder="Tweet your reply!" :user="props.user" :replyTo="props.tweet" />

    <TweetListFeed :tweets="replies" emptyText="No replies 😢" />
  </div>
</template>

<script setup>


const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  }
})

const replies = computed(() => {
  return props.tweet?.replies || []
})

</script>