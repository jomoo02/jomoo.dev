<script setup>
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/store/categoriesStore';
import { NOTE, PROJECTS } from '../constants/categories';

const categoriesStore = useCategoriesStore();

const { categoriesState } = storeToRefs(categoriesStore);
const isSelectedNote = computed(() => categoriesState.value === NOTE);
const isSelectedProjects = computed(() => categoriesState.value === PROJECTS);

const closeCategories = inject('categoriesMenu');
</script>

<template>
  <div class="fixed inset-0 z-[999] mt-16 w-full bg-white">
    <nav class="flex-col px-4 justify-center gap-x-10 col-span-4 font-semibold">
      <div class="link" :class="{ link_active: isSelectedNote }">
        <NuxtLink to="/note/programmers" @click="closeCategories">Note</NuxtLink>
      </div>
      <div class="link" :class="{ link_active: isSelectedProjects }">
        <NuxtLink to="/projects/vocabularynote" @click="closeCategories">Projects</NuxtLink>
      </div>
      <div class="p-1.5 cursor-not-allowed text-zinc-600">etc</div>
    </nav>
  </div>
</template>

<style scoped>
.link {
  @apply flex p-1.5 text-zinc-600 hover:text-emerald-500;
}
.link_active {
  color: #047857;
}
</style>
