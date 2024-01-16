<script setup>
import { POST_CARD_SIZE } from '~/constants/postCardSize';

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
    <PostCard
      v-for="{ _path, description, title, date } in posts"
      :key="title"
      :path="_path"
      :description="description"
      :title="title"
      :date="date"
      :size="POST_CARD_SIZE.wide"
    />
  </NuxtLayout>
</template>
