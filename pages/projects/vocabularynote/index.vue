<template>
  <div>
    <div class="flex justify-end h-6">
      <NuxtLink to="https://github.com/jomoo02/VocabularyNote" target="_blank">
        <span
          class="bg-slate-300 py-1 xs:px-2 xs:text-sm text-base px-4 rounded-lg font-semibold text-zinc-700 opacity-80"
          >프로젝트 GitHub 링크</span
        >
      </NuxtLink>
    </div>
    <div class="grid grid-cols-10 gap-4 md:gap-8">
      <div
        class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
      >
        <ProjectsSideBar />
      </div>
      <div class="col-span-10 md:col-span-8">
        <ContentCard
          v-for="voca in vocabularyNotePosts"
          :key="voca"
          :page-link="voca._path"
          :description="voca.description"
          :title="voca.title"
          :date="voca.date"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '~/store/postStore';

const postStore = usePostStore();
const vocabularyNotePosts = postStore.pickPosts('vocabularynote');

useHead({
  title: 'vocabulary note',
  meta: [{ name: 'description', content: '토이 프로젝트 vocabulary note' }],
});
</script>
