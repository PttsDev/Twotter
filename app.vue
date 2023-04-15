<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900 dark:text-white">

      <LoadingPage v-if="isAuthLoading" />
      <!-- App -->
      <div v-else-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

          <!-- Left  -->
          <section class=" md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </section>

          <!-- Center -->
          <main class="ml-3 col-span-11 xs:ml-0 md:col-span-7 xl:col-span-6">
            <router-view />
          </main>

          <!-- Right -->
          <section class="hidden md:block md:col-span-4 xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </section>
        </div>
      </div>

      <!-- Auth -->
      <AuthPage v-else />
    </div>
  </div>
</template>


<script setup>

const darkMode = ref(true)
const { useAuthUser, initAuth, useAuthLoading } = useAuth()
const user = useAuthUser()
const isAuthLoading = useAuthLoading()

onBeforeMount(async () => {
  await initAuth()
})

</script>