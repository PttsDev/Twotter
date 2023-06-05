<template>
  <div>
    <MainSection class="max-w-xl" title="Home" :loading="loading">

      <Head>
        <Title>Home / Twotter</Title>
      </Head>
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user"></TweetForm>
      </div>

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup>

const { twitterBorderColor } = useTailwindConfig()
const { useAuthUser } = useAuth()
const { getHomeTweets } = useTweets()
const user = useAuthUser()

const loading = ref(false)
const homeTweets = ref([])

onBeforeMount(async () => {
  loading.value = true

  try {
    const { tweets } = await getHomeTweets()
    homeTweets.value = tweets

  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
})

</script>