<script setup>
const route = useRoute();
const { detail, post } = route.params;

const appConfig = useAppConfig();
const directions = Object.values(appConfig.postNavigation).map(({ direction }) => direction);

const { data: postData } = await useAsyncData(`post-${post}`, () => {
  return queryContent(route.path).findOne();
});

const { data: surrounds } = await useAsyncData(
  `post-${post}-surrounds`,
  () => {
    return queryContent().only(['_path', 'title', '_dir']).findSurround(route.path);
  },
  {
    transform: (surrounds) => {
      return surrounds.map((surround) => (surround && surround._dir === detail ? surround : null));
    },
  },
);
</script>

<template>
  <NuxtLayout name="side-bar">
    <div class="grid grid-cols-12 gap-x-9">
      <section class="col-span-12 lg:col-span-10 md:py-10">
        <div
          class="prose min-w-full md:px-2 min-h-screen"
          :class="Object.values(appConfig.ui.prose).join(' ')"
        >
          <ContentRenderer :value="postData" />
        </div>
      </section>
      <aside
        class="hidden lg:block lg:col-span-2 py-10 md:sticky overflow-y-auto max-h-[calc(100vh-4rem)] top-[4rem]"
      >
        <TableOfContents />
      </aside>
    </div>

    <div class="grid grid-cols-12 lg:mt-14">
      <div
        v-if="surrounds?.length"
        class="flex flex-col md:flex-row gap-2.5 justify-between col-span-12 lg:col-span-10"
      >
        <div v-for="(surround, index) in surrounds" :key="surround" class="md:w-1/3">
          <PostNavigationCard
            v-if="surround"
            :direction="directions[index]"
            :title="surround.title"
            :path="surround._path"
          />
        </div>
      </div>
    </div>
    <Comments />
  </NuxtLayout>
</template>
