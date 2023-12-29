<script setup>
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/store/categoriesStore';

const categoriesStore = useCategoriesStore();
const { activeCategories } = storeToRefs(categoriesStore);
const closeCategoriesMenu = inject('closeCategoriesMenu');

onMounted(() => document.documentElement.classList.add('overflow-y-hidden'));
onUnmounted(() => document.documentElement.classList.remove('overflow-y-hidden'));
</script>

<template>
  <div class="fixed inset-0 z-[999] top-[65px] pt-3 w-full bg-white">
    <nav class="flex flex-col px-4 gap-y-px col-span-4 font-semibold">
      <div v-for="{ path, active, category } in activeCategories" :key="category">
        <NuxtLink
          class="link"
          :to="path"
          :class="{ link: path, link_active: active }"
          @click="closeCategoriesMenu"
        >
          {{ category }}
        </NuxtLink>
      </div>
      <div class="flex p-1.5 cursor-not-allowed text-zinc-600 select-none">etc</div>
    </nav>
  </div>
</template>

<style scoped>
.link {
  @apply flex p-1.5 text-zinc-600 hover:text-emerald-500 select-none;
}
.link_active {
  color: #047857;
}
</style>
