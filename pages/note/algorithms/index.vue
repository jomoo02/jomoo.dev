<template>
  <div class="relative grid grid-cols-10 gap-6 md:gap-8">
    <div
      class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
    >
      <NoteSideBar />
    </div>
    <div class="col-span-10 md:col-span-8">
      <div v-for="algorithm in algorithmsPosts" :key="algorithm">
        <ContentCard
          :page-link="algorithm._path"
          :description="algorithm.description"
          :title="algorithm.title"
          :date="algorithm.date"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '~/store/postStore';

const postStore = usePostStore();
const algorithmsPosts = postStore.pickPosts('algorithms');

useHead({
  title: '알고리즘',
  meta: [{ name: 'description', content: '알고리즘 노트' }],
});
</script>
