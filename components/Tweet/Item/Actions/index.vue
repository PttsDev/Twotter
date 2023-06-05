<template>
  <div class="flex flex-row sm:gap-28 gap-16">


    <TweetItemActionsIcon color="blue">
      <template v-slot:icon="{ classes }">
        <IconsReply :class="classes" />
      </template>

      <template v-slot:default>
        9
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="red">
      <template v-slot:icon="{ classes }">
        <IconsRetweet :class="classes" />
      </template>

      <template v-slot:default>
        9
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green">
      <template v-slot:icon="{ classes }">
        <IconsLike :class="classes" />
      </template>

      <template v-slot:default>
        9
      </template>
    </TweetItemActionsIcon>

  </div>
</template>

<script setup>


const props = defineProps({
  tweet: {
    type: Object,
    required: true
  }
})


</script>