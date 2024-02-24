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

if (posts.value.length === 0) {
  throw createError({ statusCode: 404 });
}

useHead({
  title: detail,
  meta: [{ name: 'description', content: `${category} ${detail}` }],
});

const title = ref(detail);
const description = ref(`${category} ${detail} posts`);

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
});
</script>

<template>
  <NuxtLayout name="side-bar">
    <div class="flex flex-col gap-y-1 md:py-10">
      <Breadcrumbs class="mb-1" />
      <PostCard
        v-for="{ _path, description: postDescription, title: postTitle, date } in posts"
        :key="postTitle"
        :path="_path"
        :description="postDescription"
        :title="postTitle"
        :date="date"
        class="min-h-[130px] max-h-[130px] md:min-h-[140px] md:max-h-[140px] px-0.5 border-b"
      />
    </div>
  </NuxtLayout>
</template>
