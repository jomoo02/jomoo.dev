<template>
  <div class="relative grid grid-cols-10 gap-6 md:gap-8">
    <div
      class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
    >
      <ProjectsSideBar />
    </div>
    <div class="col-span-10 md:col-span-8">
      <div v-for="loltr in postStore.loltrPosts" :key="loltr">
        <div>
          <ContentCard
            :page-link="loltr._path"
            :description="loltr.description"
            :title="loltr.title"
            :date="loltr.date"
          ></ContentCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';

const postStore = usePostDataStore();

useHead({
  title: '프로젝트 lot.tr 노트',
  meta: [{ name: 'description', content: '프로젝트 lol.tr 노트' }],
});
</script>
