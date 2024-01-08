<template>
  <div class="relative grid grid-cols-10 gap-6 md:gap-8 h-full">
    <div
      class="col-span-10 md:col-span-2 flex md:sticky md:top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
    >
      <NoteSideBar />
    </div>
    <div class="min-w-full col-span-10 md:col-span-8 pb-8">
      <div class="prose min-w-full prose-a: no-underline"><ContentDoc /></div>
      <div
        class="flex flex-col gap-2.5 md:flex-row w-full"
        :class="pageNumber < wootecoPosts.length - 1 ? 'justify-between' : 'justify-end'"
      >
        <div v-if="pageNumber < wootecoPosts.length - 1" class="md:w-1/3">
          <PostMoveCard
            :post-direction="BEFORE"
            :page-number="pageNumber + 1"
            data-kind="wootecos"
          />
        </div>
        <div v-if="pageNumber > 0" class="md:w-1/3">
          <PostMoveCard
            :post-direction="AFTER"
            :page-number="pageNumber - 1"
            data-kind="wootecos"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '~/store/postStore';

const postStore = usePostStore();
const route = useRoute();

const BEFORE = -1;
const AFTER = 1;
const post = await queryContent(route.fullPath).findOne();
const wootecoPosts = postStore.pickPosts('wootecos');
const pageNumber = wootecoPosts.findIndex(({ title }) => post.title === title);
</script>

<style scoped>
.prose :where(a):not(:where([class~='not-prose'] *)) {
  text-decoration: none;
}
</style>
