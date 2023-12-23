<template>
  <div class="relative grid grid-cols-10 gap-6 md:gap-8">
    <div
      class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
    >
      <ProjectsSideBar />
    </div>
    <div class="prose min-w-full col-span-10 md:col-span-8 pb-8">
      <ContentDoc />
    </div>
  </div>
</template>

<script setup>
import { useMainStateStore } from '~~/store/mainState';

const mainStore = useMainStateStore();
mainStore.defaultLayoutIdx = 2;
</script>
