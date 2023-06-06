<template>
  <div class="h-screen flex flex-col">


    <div class="p-2 my-2 rounded-full hover:bg-blue-100 w-min
          dark:hover:bg-white/20" :class="defaultTransition">

      <nuxt-link to=" /">
        <div class="w-8 h-8 ">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <!-- Sidebar items -->
    <div class="mt-2 space-y-3">
      <SidebarLeftTab to="/" active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name>
          Home
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name>
          Explore
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name>
          Notifications
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <EnvelopeIcon />
        </template>
        <template v-slot:name>
          Messages
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name>
          Lists
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name>
          Bookmarks
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name>
          Profile
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon />
        </template>
        <template v-slot:name>
          More
        </template>
      </SidebarLeftTab>

      <div class="hidden xl:block">
        <UIButton liquid size="lg" type="secondary">
          <span class="font-bold">Tweet</span>
        </UIButton>
      </div>

      <div class="ml-2 block xl:hidden">
        <UIButton type="secondary" size="sm">
          <div class="w-6 h-6 font-bold flex">
            <IconsPlume class="fill-white self-center" />
          </div>
        </UIButton>
      </div>

    </div>
  </div>
</template>

<script setup>

import { HomeIcon } from '@heroicons/vue/24/solid'
import { BellIcon, BookmarkIcon, DocumentTextIcon, EllipsisHorizontalCircleIcon, HashtagIcon, EnvelopeIcon, UserIcon } from '@heroicons/vue/24/outline'

const { defaultTransition } = useTailwindConfig()


</script>