<template>
  <div>
    <div class="flex justify-end h-6">
      <!-- <NuxtLink to="https://github.com/jomoo02/VocabularyNote" target="_blank">
        <span
          class="bg-slate-300 py-1 xs:px-2 xs:text-sm text-base px-4 rounded-lg font-semibold text-zinc-700 opacity-80"
          >프로젝트 GitHub 링크</span
        >
      </NuxtLink> -->
      22
    </div>
    <div class="grid grid-cols-10 gap-4 md:gap-8 md:h-screen">
      <div
        class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
      >
        <ProjectsSideBar />
      </div>
      <div class="col-span-10 md:col-span-8">
        <ContentCard
          v-for="jomoodev in postStore.jomoodevPosts"
          :key="jomoodev"
          :page-link="jomoodev._path"
          :description="jomoodev.description"
          :title="jomoodev.title"
          :date="jomoodev.date"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';

const postStore = usePostDataStore();

useHead({
  title: 'jomoo.dev',
  meta: [{ name: 'description', content: 'jomoo.dev project' }],
});
</script>
