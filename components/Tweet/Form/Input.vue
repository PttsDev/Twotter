<template>
  <div>
    <div class="flex items-center flex-shrink-0 p-4 pb-0 ">
      <div class="flex w-12 items-top self-start mt-2">
        <img :src="props.user?.profileImage" alt="" class="inline-block w-10 h-10 rounded-full" />
      </div>

      <div class="w-full p-2">
        <textarea ref="tweetInput"
          class="w-full h-14 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0 overflow-hidden resize-none"
          :placeholder="props.placeholder" @input="handleTextAreaResize()" v-model="tweetText">
                                                                                </textarea>
      </div>
    </div>

    <div class="p-4 pl-16 self-center">
      <div v-if="inputMedia" class="max-w-xl">
        <IconsXCircle @click="handleRemoveMedia"
          class="absolute m-2 w-8 h-8 cursor-pointer opacity-80 hover:opacity-60 bg-gray-100 dark:fill-white dark:bg-dim-700 rounded-full p-1.5">
        </IconsXCircle>
        <img :src="inputMedia" v-if="inputMedia" alt="uploaded image" class="rounded-2xl border max-w-full"
          :class="twitterBorderColor" />
      </div>

      <input ref="mediaUploader" type="file" hidden accept="image/png, image/jpeg, image/gif" @change="handleMediaUpload">
    </div>


    <!-- Icons -->
    <div class="pb-2 flex justify-between mt-4 border-b border-white-200 dark:border-dim-200">
      <div class="flex p-2 pl-14 text-blue-400 fill-blue-400">
        <div @click="handleMediaUploadClick"
          class="rounded-full p-2 hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
          <IconsImage></IconsImage>
        </div>
        <div class="rounded-full p-2 hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
          <IconsGif></IconsGif>
        </div>
        <div class="rounded-full p-2 hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
          <IconsPool></IconsPool>
        </div>
        <div class="rounded-full p-2 hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
          <IconsEmoji></IconsEmoji>
        </div>
        <div class="rounded-full p-2 hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
          <IconsCalendar></IconsCalendar>
        </div>
        <div class="rounded-full p-2 opacity-30">
          <IconsLocation></IconsLocation>
        </div>
      </div>
      <UIButton class="mr-8" type="secondary" :disabled="isDisabled" @click="handleFormSubmit">Tweet
      </UIButton>
    </div>
  </div>
</template>

<script setup>

const { twitterBorderColor } = useTailwindConfig()

const mediaUploader = ref()
const selectedFile = ref(null)
const tweetText = ref('')
const inputMedia = ref('')


const emits = defineEmits(['onSubmit'])

const isDisabled = computed(() => {
  return !tweetText.value && !selectedFile.value
})

const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  placeholder: {
    type: String,
    required: false,
  }
})

function handleFormSubmit() {
  emits('onSubmit', {
    text: tweetText.value,
    mediaFiles: [selectedFile.value]
  })
}

function handleMediaUploadClick() {
  mediaUploader.value.click()
}

function handleMediaUpload(event) {

  const file = event.target.files[0]
  selectedFile.value = file

  const reader = new FileReader()

  reader.onload = (event) => {
    inputMedia.value = event.target.result
  }
  reader.readAsDataURL(file)

}

function handleRemoveMedia() {
  inputMedia.value = ''
  selectedFile.value = null
  mediaUploader.value.value = ''
}

const tweetInput = ref(null)
function handleTextAreaResize() {
  let textArea = tweetInput.value
  textArea.style.height = textArea.scrollHeight + 'px'
}
</script>