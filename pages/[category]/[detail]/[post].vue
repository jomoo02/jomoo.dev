<script setup>
import { PREVIOUS, NEXT } from '~/constants/postDirection';

const route = useRoute();
const { detail, post } = route.params;
const directions = [PREVIOUS, NEXT];
const appConfig = useAppConfig();

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
    <div
      class="prose min-w-full md:px-2 min-h-screen"
      :class="Object.values(appConfig.ui.prose).join(' ')"
    >
      <ContentDoc />
    </div>
    <div v-if="surrounds?.length" class="flex flex-col md:flex-row gap-2.5 justify-between">
      <div v-for="(surround, index) in surrounds" :key="surround" class="md:w-1/3">
        <PostNavigationCard
          v-if="surround"
          :direction="directions[index]"
          :title="surround.title"
          :path="surround._path"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
