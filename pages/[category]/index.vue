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
    <div class="flex flex-col gap-y-5 md:py-10">
      <div class="flex flex-col gap-y-1.5">
        <h2 class="text-lg xs:text-xl font-bold capitalize">{{ category }}</h2>
        <p class="text-sm md:text-base font-medium text-slate-500/80">
          {{ categoryDescription }}
        </p>
      </div>
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-8">
        <CategoryDetailCard
          v-for="{ text, path, description, iconName } in categoryItems"
          :key="text"
          class="sm:max-w-72 md:w-80 h-[7.8rem] xs:h-[10.5rem] sm:h-44 md:h-[10.5rem] lg:min-w-80 xl:w-72 xl:min-w-72"
          :detail-text="text"
          :path="path"
          :description="description"
          :icon-name="iconName"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
