<template>
  <div>
    <MainSection class="max-w-xl" title="Home" :loading="loading">
      <TweetForm :user="user"></TweetForm>
    </MainSection>
  </div>
</template>

<script setup>

const loading = ref(false)
const { useAuthUser } = useAuth()
const user = useAuthUser()

</script>