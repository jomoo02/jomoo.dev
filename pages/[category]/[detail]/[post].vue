<script setup>
const route = useRoute();
const { detail, post } = route.params;

const appConfig = useAppConfig();
const directions = Object.values(appConfig.postNavigation).map(({ direction }) => direction);

const { data: postData } = await useAsyncData(`post-${post}`, () => {
  return queryContent(route.path).findOne();
});

if (!postData.value) {
  throw createError({ statusCode: 404 });
}

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

const title = ref(post);
const description = ref(postData.value.description);

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
});
</script>

<template>
  <NuxtLayout name="side-bar">
    <div class="grid grid-cols-12 lg:gap-x-10">
      <div class="col-span-12 lg:col-span-10 md:mt-10">
        <section>
          <div
            class="prose min-w-full md:px-2 min-h-screen"
            :class="Object.values(appConfig.ui.prose).join(' ')"
          >
            <ContentRenderer v-if="postData" :value="postData" />
          </div>
        </section>
        <div class="grid grid-cols-12 lg:mt-14">
          <div
            v-if="surrounds?.length"
            class="flex flex-col md:flex-row gap-2.5 justify-between col-span-12"
          >
            <div v-for="(surround, index) in surrounds" :key="surround" class="md:w-1/3 relative">
              <PostNavigationCard
                v-if="surround"
                :direction="directions[index]"
                :title="surround.title"
                :path="surround._path"
              />
            </div>
          </div>
        </div>
        <div class="min-h-80">
          <Comments />
        </div>
      </div>
      <div class="hidden lg:block lg:col-span-2">
        <aside class="py-10 sticky overflow-y-auto max-h-[calc(100vh-4rem)] top-[4rem]">
          <ContentToc :links="postData.body?.toc?.links" />
          <!-- <TableOfContents /> -->
        </aside>
      </div>
    </div>
  </NuxtLayout>
</template>
