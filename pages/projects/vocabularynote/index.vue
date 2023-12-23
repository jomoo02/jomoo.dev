<template>
  <div>
    <div class="relative grid grid-cols-10 gap-6 md:gap-8">
      <div
        class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
      >
        <ProjectsSideBar />
      </div>
      <div class="col-span-10 md:col-span-8">
        <div class="flex justify-end">
          <NuxtLink
            to="https://github.com/jomoo02/VocabularyNote"
            target="_blank"
          >
            <span
              class="bg-slate-300 py-1 xs:px-2 xs:text-sm text-base px-4 rounded-lg font-semibold text-zinc-700 opacity-80"
              >프로젝트 GitHub 링크</span
            >
          </NuxtLink>
        </div>
        <div v-for="voca in postStore.vocaPosts" :key="voca">
          <ContentCard
            :page-link="voca._path"
            :description="voca.description"
            :title="voca.title"
            :date="voca.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';

const postStore = usePostDataStore();

useHead({
  title: 'vocabulary note',
  meta: [{ name: 'description', content: '토이 프로젝트 vocabulary note' }],
});
</script>
