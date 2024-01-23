<script setup>
const route = useRoute();
const { category, detail } = route.params;

const closeCategoriesMenu = inject('closeCategoriesMenu');

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

onMounted(() => closeCategoriesMenu());

useHead({
  title: detail,
  meta: [{ name: 'description', content: `${category} ${detail}` }],
});
</script>

<template>
  <NuxtLayout name="side-bar">
    <div class="flex flex-col gap-y-1">
      <PostCard
        v-for="{ _path, description, title, date } in posts"
        :key="title"
        :path="_path"
        :description="description"
        :title="title"
        :date="date"
        class="border-b min-h-[130px] max-h-[130px] md:max-h-[140px] md:min-h-[140px] px-1"
      />
    </div>
  </NuxtLayout>
</template>
