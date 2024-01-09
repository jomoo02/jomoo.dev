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

onMounted(() => console.log(detail, posts));

useHead({
  title: detail,
  meta: [{ name: 'description', content: `${category} ${detail}` }],
});
</script>

<template>
  <NuxtLayout name="side-bar">
    <div>
      <ContentCard
        v-for="{ _path, description, title, date } in posts"
        :key="title"
        :page-link="_path"
        :description="description"
        :title="title"
        :date="date"
      />
    </div>
  </NuxtLayout>
</template>
