<template>
  <div class="relative grid grid-cols-10 gap-6 md:gap-8">
    <div
      class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
    >
      <NoteSideBar />
    </div>
    <div class="col-span-10 md:col-span-8">
      <div v-for="programmers in programmersPosts" :key="programmers">
        <div>
          <ContentCard
            :page-link="programmers._path"
            :description="programmers.description"
            :title="programmers.title"
            :date="programmers.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '~/store/postStore';

const postStore = usePostStore();
const programmersPosts = postStore.pickPosts('programmers');

useHead({
  title: '프로그래머스',
  meta: [{ name: 'description', content: '프로그래머스 풀이' }],
});
</script>
