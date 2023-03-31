<template>
  <div class="flex flex-col">

    <!-- Search bar -->

    <!-- What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem v-for="(value, key) in (WHItems)" :value="value" />
    </SidebarRightPreviewCard>

    <!-- Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <div>
      </div>

    </SidebarRightPreviewCard>

  </div>
</template>

<script setup lang="ts">

let WHItems = {
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
}

</script>