<script setup>
const h1Text1 = '안녕하세요! 이곳은 개발자의 성장 이야기와 코드의 흔적을 기록하는 곳입니다.';
const h1Text2 = '모듈을 활용하여 만들어진 이 블로그는 지식의 나눔을 추구합니다.';
const pText = `주요 주제로 코딩 테스트, 알고리즘, 자바스크립트 학습 내용과 진행했던 토이 프로젝트 관련 내용을 다룹니다!`;

const { data: recentWritePosts } = await useAsyncData(
  'recentWritePosts',
  () => {
    return queryContent('/')
      .sort({ date: -1 })
      .limit(5)
      .only(['_path', 'title', 'description', 'date', 'category', 'detail'])
      .find();
  },
  {
    transform(recentWritePosts) {
      return recentWritePosts.map((post) => {
        const tags = [
          { text: post.category, path: post.category },
          { text: post.detail, path: `${post.category}/${post.detail}` },
        ];
        return { ...post, tags };
      });
    },
  },
);

useHead({
  title: 'jomoo.dev',
  meta: [
    {
      name: 'description',
      content: pText,
    },
  ],
});
</script>

<template>
  <div class="flex flex-col gap-y-20">
    <section
      class="h-[calc(100vh-430px)] flex justify-center items-center flex-col gap-y-1 break-keep capitalize"
    >
      <h1 class="text-xl font-semibold text-center text-slate-700">
        {{ h1Text1 }}
        <br />
        <NuxtLink to="https://nuxt.com/" target="_blank">
          <span class="text-emerald-500">nuxt</span></NuxtLink
        >와
        <NuxtLink to="https://content.nuxt.com/" target="_blank"
          ><span class="text-emerald-500">nuxt-content</span></NuxtLink
        >
        {{ h1Text2 }}
      </h1>
      <p class="text-base text-gray-500 font-medium">
        {{ pText }}
      </p>
    </section>
    <section class="lg:mx-24">
      <div class="flex flex-col gap-y-3 md:gap-y-4 py-4">
        <h2 class="text-2xl md:text-3xl text-zinc-700 font-extrabold">최신 글</h2>
        <div class="flex flex-col gap-y-2">
          <PostCard
            v-for="{ _path, title, description, date, tags } in recentWritePosts"
            :key="title"
            :date="date"
            :title="title"
            :path="_path"
            :description="description"
            class="min-h-[174px] max-h-[174px]"
          >
            <template #tags>
              <div class="flex gap-x-2 pt-1 pb-3.5">
                <NuxtLink v-for="{ path, text } in tags" :key="text" :to="path">
                  <div
                    class="flex bg-slate-200/60 rounded-xl px-[9px] py-[3px] hover:bg-gray-100 text-emerald-600/90 hover:text-emerald-700/90"
                  >
                    {{ text }}
                  </div>
                </NuxtLink>
              </div>
            </template>
          </PostCard>
        </div>
      </div>
    </section>
  </div>
</template>
