<script setup>
const route = useRoute();
const { category, detail } = route.params;

const { data: posts } = await useAsyncData(
  `${detail}-posts`,
  () => {
    return queryContent(category, detail).only(['_path', 'description', 'title', 'date']).find();
  },
  {
    transform(posts) {
      return posts.reverse();
    },
  },
);

useHead({
  title: detail,
  meta: [{ name: 'description', content: `${category} ${detail}` }],
});
</script>

<template>
  <NuxtLayout name="side-bar">
    <div class="flex flex-col gap-y-1 md:py-10">
      <PostCard
        v-for="{ _path, description, title, date } in posts"
        :key="title"
        :path="`${_path}/`"
        :description="description"
        :title="title"
        :date="date"
        class="min-h-[130px] max-h-[130px] md:min-h-[140px] md:max-h-[140px] px-1 border-b"
      />
    </div>
  </NuxtLayout>
</template>
