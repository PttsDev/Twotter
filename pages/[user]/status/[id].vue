<template>
  <div>
    <MainSection class="max-w-xl" title="Tweet" :loading="loading">

      <Head>
        <Title> in Twotter: / Twotter</Title>
      </Head>


      <TweetDetails :user="user" :tweet="tweet" />
    </MainSection>
  </div>
</template>

<script setup>

const loading = ref(false)
const tweet = ref(null)
const { getTweetById } = useTweets()

const { useAuthUser } = useAuth()
const user = useAuthUser()

const route = useRoute()

async function getTweet() {
  loading.value = true
  try {

    const res = await getTweetById(route.params.id)
    tweet.value = res.tweet

  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

onBeforeMount(async () => {

  await getTweet()
})

</script>
