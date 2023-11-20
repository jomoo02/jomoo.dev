<template>
    <div class="relative grid grid-cols-10 gap-6 md:gap-8">
        <div class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)] ">
            <NoteSideBar />
        </div>
        <div class="col-span-10 md:col-span-8">
            <div v-for="jsPost in postStore.jsPosts" :key="jsPost">
                <ContentCard :page-link="jsPost._path" :description="jsPost.description" :title="jsPost.title" :date="jsPost.date" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';

const postStore = usePostDataStore();

useHead({
  title: '자바스크립트 노트',
  meta:[
      { name: 'description', content: '자바스크립트 노트' }
  ],
})
</script>

