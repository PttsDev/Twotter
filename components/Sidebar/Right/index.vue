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
    name: 'frangamer11',
    handle: '@Rindouxd',
    img: 'https://pbs.twimg.com/profile_images/1639950956803571712/vTQlzGzG_200x200.jpg',
  },
  2: {
    id: 2,
    name: 'Albert Chicote',
    handle: '@albertchicote',
    img: 'https://picsum.photos/200/200',
  },
  3: {
    id: 3,
    name: 'Carles Tamayo',
    handle: '@TamayoStuff',
    img: 'https://pbs.twimg.com/profile_images/1381364300292489222/FRc6o_TR_200x200.jpg',
  }
})

</script>