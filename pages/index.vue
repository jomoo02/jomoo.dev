<script setup>
const h1Text1 = '안녕하세요! 이곳은 개발자의 성장 이야기와 코드의 흔적을 기록하는 곳입니다.';
const h1Text2 = '모듈을 활용하여 만들어진 이 블로그는 지식의 나눔을 추구합니다.';
const pText = `주요 주제로 코딩 테스트, 알고리즘, 자바스크립트 학습 내용과 진행했던 토이 프로젝트 관련 내용을 다룹니다!`;

const appConfig = useAppConfig();

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
  <div class="flex flex-col gap-y-10">
    <section
      class="text-center flex flex-col justify-center items-center gap-y-1 break-keep capitalize"
      :class="appConfig.ui.main.introduction.height"
    >
      <h1 class="text-base xs:text-lg sm:text-xl font-semibold text-slate-700">
        {{ h1Text1 }}
        <br />
        <NuxtLink to="https://nuxt.com/" target="_blank" class="text-emerald-500">nuxt</NuxtLink>와
        <NuxtLink to="https://content.nuxt.com/" target="_blank" class="text-emerald-500">
          nuxt-content
        </NuxtLink>
        {{ h1Text2 }}
      </h1>
      <p class="text-xs xs:text-base text-slate-500/95 font-medium">
        {{ pText }}
      </p>
    </section>
    <section class="lg:mx-24">
      <div class="flex flex-col gap-y-5">
        <h2 class="text-xl xs:text-2xl text-slate-800/90 font-extrabold">최신 글</h2>
        <div class="flex flex-col gap-y-7">
          <PostCard
            v-for="{ _path, title, description, date, tags } in recentWritePosts"
            :key="title"
            :date="date"
            :title="title"
            :path="_path"
            :description="description"
            :class="appConfig.ui.main.postCard.height"
          >
            <template #tags>
              <div class="flex pt-1 pb-2 md:pb-3.5 gap-x-2">
                <NuxtLink v-for="{ path, text } in tags" :key="text" :to="path">
                  <div
                    class="py-[2.5px] md:py-[3px] px-[9px] text-xs xs:text-sm font-semibold bg-slate-200/60 rounded-xl hover:bg-slate-200 text-emerald-600/90 hover:text-emerald-700/90"
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
