<script setup>
const { category, categoryItems } = useCategory();
</script>

<template>
  <NuxtLayout name="side-bar">
    <div class="flex flex-col gap-y-5 py-3">
      <h1 class="text-xl font-bold capitalize">{{ category }}</h1>
      <div class="grid sm:grid-cols-2 gap-x-2 gap-y-8 xl:grid-cols-3">
        <div
          v-for="{ detail, path, description, iconName } in categoryItems"
          :key="detail"
          class="sm:max-w-72 md:w-80 h-44 lg:min-w-80 xl:w-72 xl:min-w-72"
        >
          <CategoryCard
            :detail="detail"
            :path="path"
            :description="description"
            :icon-name="iconName"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
