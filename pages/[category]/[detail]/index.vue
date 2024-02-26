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
    <Breadcrumbs />
    <div class="flex flex-col gap-y-2">
      <PostCard
        v-for="{ _path, description: postDescription, title: postTitle, date } in posts"
        :key="postTitle"
        :path="_path"
        :description="postDescription"
        :title="postTitle"
        :date="date"
        class="min-h-[118px] max-h-[118px] md:min-h-[128px] md:max-h-[128px] px-0.5 border-b pb-3"
      />
    </div>
  </NuxtLayout>
</template>
