<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { usePostStore } from '~~/store/postStore';

const postStore = usePostStore();
await callOnce(postStore.setPost);
</script>

<style>
html {
  scroll-padding-top: 7.5rem;
}
</style>
