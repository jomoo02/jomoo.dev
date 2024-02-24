<script setup>
const route = useRoute();
const { category, detail } = route.params;
const params = [category, detail].filter((param) => param);

const constructBreadcrumb = (params) => {
  const breadcrumbs = [];

  params.forEach((param, index) => {
    const link = index !== 0 ? `${breadcrumbs[index - 1].link}/${param}` : `/${param}`;
    breadcrumbs.push({ param, link });
  });

  return [...breadcrumbs];
};

const breadcrumbs = constructBreadcrumb(params);
</script>

<template>
  <div class="flex gap-x-1.5 pt-3.5 sm:pt-4 md:pt-0 pb-0.5">
    <div
      v-for="({ param, link }, index) in breadcrumbs"
      :key="param"
      class="flex font-semibold text-xs xs:text-sm gap-x-1.5"
      :class="[index === params.length - 1 ? 'text-emerald-600' : 'text-slate-600/90']"
    >
      <NuxtLink :to="link">{{ param }}</NuxtLink>
      <span>></span>
    </div>
  </div>
</template>
