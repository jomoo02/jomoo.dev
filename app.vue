<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 min-h-full mb-16">
      </NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';
const postStore = usePostDataStore();
const posts =  await queryContent('note','programmers').only(['title','_path','description','date']).find();
postStore.programmersPostUpdate(posts);
</script>