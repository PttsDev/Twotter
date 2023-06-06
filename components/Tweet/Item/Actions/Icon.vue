<template>
  <div class="flex flex-row items-center text-gray-500 cursor-pointer group">


    <div
      :class="`p-2 group-hover:bg-${props.color}-100 group-hover:text-${props.color}-400 rounded-full dark:group-hover:bg-opacity-20 ${defaultTransition}`">

      <slot name="icon" :classes="`group-hover:fill-${props.color}-400`" />
    </div>

    <span :class="` ml-1 group-hover:text-${props.color}-400`">
      <slot name="default" />
    </span>

  </div>
</template>

<script setup>

const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  color: {
    type: String,
    required: true
  },
})


</script>