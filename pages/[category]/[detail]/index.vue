<script setup>
const route = useRoute();
const { category, detail } = route.params;

// const isShowCodeLink = computed(() => detail === 'vocabularynote');
// const codeLink = computed(() => {
//   if (isShowCodeLink) {
//     return 'https://github.com/jomoo02/VocabularyNote';
//   }
//   return null;
// });

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
    <!-- <template #codeLink>
      <NuxtLink v-if="isShowCodeLink" :to="codeLink" target="_blank">
        <span
          class="hidden md:block bg-slate-300 py-0.5 xs:px-2 xs:text-sm text-base px-4 rounded-lg font-semibold text-zinc-700 opacity-80"
          >프로젝트 GitHub 링크
        </span>
      </NuxtLink>
    </template>
    <template #codeLinkMd>
      <div v-if="isShowCodeLink" class="md:hidden flex items-center">
        <NuxtLink :to="codeLink">
          <Icon name="ri:github-fill" size="32" />
        </NuxtLink>
      </div>
    </template> -->
    <ContentCard
      v-for="{ _path, description, title, date } in posts"
      :key="title"
      :page-link="_path"
      :description="description"
      :title="title"
      :date="date"
    />
  </NuxtLayout>
</template>
