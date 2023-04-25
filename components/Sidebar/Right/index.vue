<template>
  <div class="flex flex-col">

    <!-- Search bar -->

    <!-- What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItemSlot v-for="(value, key) in (WHItems)">
        <SidebarRightPreviewCardItemWhatsHappening :value="value" />
      </SidebarRightPreviewCardItemSlot>
    </SidebarRightPreviewCard>

    <!-- Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItemSlot v-for="(value, key) in (WTFItems)" :value="value">
        <SidebarRightPreviewCardItemWhoToFollow :value="value" />
      </SidebarRightPreviewCardItemSlot>
    </SidebarRightPreviewCard>

  </div>
</template>

<script setup lang="ts">

import { IWHItems, IWTFItems } from '~/types'
interface WHItemsType {
  [key: number]: IWHItems;
}

interface WTFItemsType {
  [key: number]: IWTFItems;
}

let WHItems = ref<WHItemsType>({
  1: {
    id: 1,
    description: 'Genshit Impact',
    tweet_num: '18.8k',
  },
  2: {
    id: 2,
    description: 'Albert Chicote',
    tweet_num: '1.6k',
  },
  3: {
    id: 3,
    description: 'Riot games',
    tweet_num: '103',
  },
  4: {
    id: 4,
    description: '#americandad',
    tweet_num: '7',
  },
})

let WTFItems = ref<WTFItemsType>({

  1: {
    id: 1,
    name: 'Obunga',
    handle: '@Obunga6',
    img: 'https://i.pinimg.com/originals/61/a5/a1/61a5a1eec1183ed481e9212a9ff506b0.jpg',
  },
  2: {
    id: 2,
    name: 'Albert Chicote',
    handle: '@albertchicote',
    img: 'https://pbs.twimg.com/profile_images/1603401210064781312/ftrvO_-r_200x200.jpg',
  },
  3: {
    id: 3,
    name: 'Sussy Baka',
    handle: '@Amogus',
    img: 'https://pbs.twimg.com/profile_images/1612500859681898497/dBWSN1vL_200x200.jpg',
  }
})

</script>