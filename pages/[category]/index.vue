<script setup>
const { category, categoryDescription, categoryItems } = useCategory();
const closeCategoriesMenu = inject('closeCategoriesMenu');

onMounted(() => closeCategoriesMenu());

useHead({
  title: category,
  meta: [{ name: 'description', content: `${category}의 detail 항목들` }],
});
</script>

<template>
  <NuxtLayout name="side-bar">
    <div class="flex flex-col gap-y-5 py-3">
      <div class="flex flex-col gap-y-1.5">
        <h1 class="text-xl font-bold capitalize">{{ category }}</h1>
        <p class="text-slate-500/80 text-sm md:text-base font-medium">
          {{ categoryDescription }}
        </p>
      </div>
      <div class="grid sm:grid-cols-2 gap-x-2 gap-y-8 xl:grid-cols-3">
        <div
          v-for="{ text, path, description, iconName } in categoryItems"
          :key="text"
          class="sm:max-w-72 md:w-80 h-44 lg:min-w-80 xl:w-72 xl:min-w-72"
        >
          <CategoryDetailCard
            :detail-text="text"
            :path="path"
            :description="description"
            :icon-name="iconName"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
