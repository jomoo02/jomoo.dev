<script setup>
import { CATEGORIES_DETAILS } from '~/constants/categoriesDetail';

const route = useRoute();
const { category, detail } = route.params;

const categoryDetailItems = CATEGORIES_DETAILS[category].map((categoryDetail) => {
  const active = categoryDetail.detail === detail;
  return { ...categoryDetail, active };
});
</script>

<template>
  <div>
    <div class="flex justify-end md:h-6">
      <slot name="codeLink" />
    </div>
    <div class="grid grid-cols-10 gap-7 md:gap-7 md:min-h-screen">
      <div
        class="col-span-10 md:col-span-2 flex md:sticky top-[7rem] lg:top-[8.6rem] overflow-y-auto max-h-[calc(100vh-220px)] justify-between"
      >
        <nav>
          <ul class="font-bold flex gap-x-4 md:block">
            <li v-for="{ path, text, active } in categoryDetailItems" :key="path">
              <NuxtLink :to="path">
                <div
                  class="hover:text-emerald-500 py-1.5"
                  :class="active ? 'text-emerald-600' : 'text-black'"
                >
                  {{ text }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-span-10 md:col-span-8">
        <slot />
      </div>
    </div>
  </div>
</template>
