<script setup>
const route = useRoute();
const { detail, post } = route.params;

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
    <div class="prose min-w-full md:px-2">
      <ContentDoc />
    </div>
    <div v-if="surrounds?.length" class="flex flex-col md:flex-row w-full gap-2.5 justify-between">
      <div class="md:w-1/3">
        <PostMoveCard
          v-if="surrounds[0]"
          direction="previous"
          :title="surrounds[0].title"
          :path="surrounds[0]._path"
        />
      </div>
      <div class="md:w-1/3">
        <PostMoveCard
          v-if="surrounds[1]"
          direction="next"
          :title="surrounds[1].title"
          :path="surrounds[1]._path"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
