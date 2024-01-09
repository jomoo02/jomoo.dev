<template>
  <NuxtLayout>
    <NuxtPage class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8" />
  </NuxtLayout>
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';

const postStore = usePostStore();
await callOnce(postStore.setPost);

// console.log(await queryContent('note').find());
</script>
