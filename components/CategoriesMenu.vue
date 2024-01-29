<script setup>
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/store/categoriesStore';

const appConfig = useAppConfig();
const { link } = appConfig.ui.nav;

const categoriesStore = useCategoriesStore();
const { activeCategories } = storeToRefs(categoriesStore);

onMounted(() => document.documentElement.classList.add('overflow-y-hidden'));
onUnmounted(() => document.documentElement.classList.remove('overflow-y-hidden'));
</script>

<template>
  <div class="fixed inset-0 z-[999] top-[var(--header-height)] bg-white my-px">
    <nav class="px-4 py-2">
      <ul class="text-sm xs:text-base flex flex-col gap-y-px font-semibold">
        <li v-for="{ path, active, category } in activeCategories" :key="category" class="flex">
          <NuxtLink
            class="p-1.5 select-none"
            :to="path"
            :class="active ? link.active : link.default"
          >
            {{ category }}
          </NuxtLink>
        </li>
        <li class="p-1.5 cursor-not-allowed text-zinc-600 select-none">etc</li>
      </ul>
    </nav>
  </div>
</template>
