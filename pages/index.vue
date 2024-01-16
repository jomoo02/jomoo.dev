<script setup>
import { usePostStore } from '~/store/postStore';
import { POST_CARD_SIZE } from '~/constants/postCardSize';

const postStore = usePostStore();
const details = ['programmers', 'algorithms', 'vocabularynote'];
const totalPosts = ref();

totalPosts.value = details.reduce((acc, detail) => {
  acc.push({ detail, posts: postStore.pickPosts(detail) });
  return acc;
}, []);

useHead({
  title: 'jomoo.dev',
  meta: [
    {
      name: 'description',
      content: 'Nuxt3로 만들어진 블로그. 프로그래머스, 알고리즘, 토이 프로젝트 등을 다룹니다',
    },
  ],
});
</script>

<template>
  <div>
    <div
      v-for="{ detail, posts } in totalPosts"
      :key="detail"
      class="mt-14 first:mt-8 md:first:mt-4"
    >
      <div class="text-4xl text-zinc-900 font-extrabold mb-5">{{ detail }}</div>
      <div class="flex gap-x-2.5 md:gap-x-4 w-full py-1 overflow-x-auto">
        <div
          v-for="post in posts.slice(0, 4)"
          :key="post"
          class="min-w-full xs:min-w-[187px] md:min-w-[288px] xs:max-w-[187px] md:max-w-[288px]"
        >
          <PostCard
            :path="post._path"
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :size="POST_CARD_SIZE.small"
          />
        </div>
      </div>
    </div>
  </div>
</template>
