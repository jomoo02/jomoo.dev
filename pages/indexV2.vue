<script setup>
const mainDescription = `nuxt3 프레임워크와 nuxt-content 모듈을 이용해 만든 블로그입니다.\n
주로 토이 프로젝트에 관한 글과 공부했던 내용을 복습하기 위한 글을 작성합니다.`;

const { data: recentWritePosts } = await useAsyncData('recentWritePosts', () => {
  return queryContent('/').sort({ date: -1 }).limit(5).find();
});
</script>

<template>
  <div class="flex flex-col gap-y-20">
    <section class="bg-blue-200 h-60">
      <div>
        {{ mainDescription }}
      </div>
    </section>
    <section>
      <div class="flex flex-col gap-y-1">
        <h2 class="text-3xl text-zinc-700 font-extrabold">최신 포스트</h2>
        <PostCard
          v-for="{ _path, title, description, date } in recentWritePosts"
          :key="title"
          :date="date"
          :title="title"
          :path="_path"
          :description="description"
          size="wide"
        />
      </div>
    </section>
  </div>
</template>
