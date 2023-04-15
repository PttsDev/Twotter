<template>
  <div class="pt-5 space-y-6">
    <UIInput label="Username" placeholder="@username" v-model="data.username" @keyup.enter.native="handleLogin" />
    <UIInput label="Password" placeholder="*********" type="password" v-model="data.password"
      @keyup.enter.native="handleLogin" />
    <div>
      <UIButton @click="handleLogin">Login</UIButton>
    </div>
  </div>
</template>

<script setup>
const { login } = useAuth()

const data = reactive({
  username: '',
  password: '',
  loading: false,
})


async function handleLogin() {
  data.loading = true
  try {
    await login(data.username, data.password)
  } catch (e) {
    console.log(e)
  } finally {
    data.loading = false
  }

}

</script>