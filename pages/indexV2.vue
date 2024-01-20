<script setup>
// const mainDescription = `nuxt3 프레임워크와 nuxt-content 모듈을 이용해 만든 블로그입니다.\n
// 주로 토이 프로젝트에 관한 글과 공부했던 내용을 복습하기 위한 글을 작성합니다.`;

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
      content: 'Nuxt3로 만들어진 블로그. 프로그래머스, 알고리즘, 토이 프로젝트 등을 다룹니다',
    },
  ],
});
</script>

<template>
  <div class="flex flex-col gap-y-20">
    <!-- <section class="bg-blue-200 h-60">
      <div>
        {{ mainDescription }}
      </div>
    </section> -->
    <section>
      <div class="flex flex-col gap-y-3 md:gap-y-4 py-4">
        <h2 class="text-2xl md:text-3xl text-zinc-700 font-extrabold">최신 글</h2>
        <div class="flex flex-col gap-y-2">
          <PostCardV2
            v-for="{ _path, title, description, date, tags } in recentWritePosts"
            :key="title"
            :date="date"
            :title="title"
            :path="_path"
            :description="description"
            class="min-h-[174px] max-h-[174px]"
          >
            <template #tags>
              <div class="flex py-3.5 gap-x-2">
                <NuxtLink v-for="{ path, text } in tags" :key="text" :to="path">
                  <div
                    class="flex bg-slate-200/60 rounded-xl px-[9px] py-[3px] hover:bg-gray-100 text-emerald-600/90 hover:text-emerald-700/90"
                  >
                    {{ text }}
                  </div>
                </NuxtLink>
              </div>
            </template>
          </PostCardV2>
        </div>
      </div>
    </section>
  </div>
</template>
