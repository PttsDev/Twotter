<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">


      <div class="min-h-full">

        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

          <!-- Left  -->
          <!-- <section class=" md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </section> -->

          <!-- Center -->
          <!-- <main class="bg-red-500 ml-3 col-span-11 xs:ml-0 md:col-span-8 xl:col-span-7">
            <h1 class="flex justify-center">TIMELINE</h1>

          </main> -->

          <!-- Right -->
          <section class="col-span-12 bg-blue-500  md:block md:col-span-3 xl:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </section>

        </div>



      </div>
    </div>
  </div>
</template>


<script setup>

const darkMode = ref(true)


</script>