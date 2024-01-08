<template>
  <div class="relative grid grid-cols-10 gap-6 md:gap-8">
    <div
      class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
    >
      <NoteSideBar />
    </div>
    <div class="col-span-10 md:col-span-8">
      <div v-for="wootecos in wootecoPosts" :key="wootecos">
        <div>
          <ContentCard
            :page-link="wootecos._path"
            :description="wootecos.description"
            :title="wootecos.title"
            :date="wootecos.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '~/store/postStore';

const postStore = usePostStore();
const wootecoPosts = postStore.pickPosts('wootecos');

useHead({
  title: '우아한테크코스',
  meta: [{ name: 'description', content: '우아한테크코스' }],
});
</script>
