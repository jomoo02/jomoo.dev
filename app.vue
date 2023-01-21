<template>
  <div :class="mainStore.modalCheck === true ? 'max-h-screen':'' ">
    <NuxtLayout>
      <NuxtPage class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 min-h-full mb-16">
      </NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';
import { useMainStateStore } from './store/mainState';
const mainStore = useMainStateStore();
const postStore = usePostDataStore();
const postsProgrammers =  await queryContent('note','programmers').only(['title','_path','description','date']).sort({ date: -1 }).find();
const postsAlgorithms = await queryContent('note','algorithms').only(['title','_path','description','date']).sort({ date: -1 }).find();
const postsLottr = await queryContent('projects','loltr').only(['title','_path','description','date']).sort({ date: -1 }).find();
const postsVoca = await queryContent('projects', 'vocabularynote').only(['title','_path','description','date']).sort({ date: -1 }).find();
postStore.programmersPostUpdate(postsProgrammers);
postStore.algorithmsPostsUpdate(postsAlgorithms);
postStore.loltrPostsUpdate(postsLottr);
postStore.vocaPostsUpdate(postsVoca);


</script>