<template>
  <div>
    <label for="" v-if="props.label" class="block pl-3 ml-px text-sm font-medium text-gray-700">
      {{ props.label }}
    </label>

    <input :type="props.type" :value="props.modelValue" :placeholder="props.placeholder ? props.placeholder : props.label"
      @input="event => emits('update:modelValue', event.target.value)"
      class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 bocus:border-blue-500 sm:text-sm" />
  </div>
</template>

<script setup>

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: null
  },
  placeholder: {
    type: String,
    required: false,
    default: null
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  }
})


</script>