<template>
  <div class="relative grid grid-cols-10 gap-6 md:gap-8">
    <div
      class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)]"
    >
      <ProjectsSideBar />
    </div>
    <div class="min-w-full col-span-10 md:col-span-8 pb-8">
      <div class="prose min-w-full"><ContentDoc /></div>
      <div
        class="flex flex-col gap-2.5 md:flex-row w-full"
        :class="pageNumber < jomoodevPosts.length - 1 ? 'justify-between' : 'justify-end'"
      >
        <div v-if="pageNumber < jomoodevPosts.length - 1" class="md:w-1/3">
          <PostMoveCard
            :post-direction="BEFORE"
            :page-number="pageNumber + 1"
            data-kind="jomoodev"
          />
        </div>
        <div v-if="pageNumber > 0" class="md:w-1/3">
          <PostMoveCard
            :post-direction="AFTER"
            :page-number="pageNumber - 1"
            data-kind="jomoodev"
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
// const pageNumber = postStore.jomoodevPostsIdx[post.title];
console.log(route.fullPath);
const jomoodevPosts = postStore.pickPosts('jomoodev');
const pageNumber = jomoodevPosts.findIndex((postInfo) => postInfo.title === post.title);
</script>
