<script setup>
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/store/categoriesStore';
import { NOTE, PROJECTS } from '../constants/categories';

const categoriesStore = useCategoriesStore();
const { categoriesState } = storeToRefs(categoriesStore);
const isSelectedNote = computed(() => categoriesState.value === NOTE);
const isSelectedProjects = computed(() => categoriesState.value === PROJECTS);

const { categoriesOpenState, toggleCategories, closeCategories } = useCategories();

provide('categoriesMenu', closeCategories);

function clickCategoriesMenu() {
  toggleCategories();
}
</script>

<template>
  <div class="max-h-full">
    <div class="fixed top-0 z-20 w-full bg-white">
      <header class="border-b-[1px] border-b-gray-300">
        <div class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 relative w-full">
          <nav class="grid grid-cols-6 min-h-16 max-h-20 items-center h-16 lg:h-20 justify-center">
            <div
              class="col-span-1 flex justify-start cursor-pointer md:hidden"
              @click="clickCategoriesMenu"
            >
              <ListIcon />
            </div>
            <div
              class="flex justify-center md:justify-start col-span-4 md:col-span-1 text-2xl font-extrabold text-stone-800"
            >
              <NuxtLink to="/">JOMOO.DEV</NuxtLink>
            </div>
            <ul class="hidden md:flex justify-center gap-x-10 col-span-4 font-semibold">
              <li>
                <div class="link" :class="{ link_active: isSelectedNote }">
                  <NuxtLink to="/note/programmers">Note</NuxtLink>
                </div>
              </li>
              <li>
                <div class="link" :class="{ link_active: isSelectedProjects }">
                  <NuxtLink to="/projects/vocabularynote">Project</NuxtLink>
                </div>
              </li>
              <li class="p-1.5 cursor-not-allowed text-zinc-600">etc</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    <div class="mt-16 pt-2.5 md:mt-32">
      <slot />
    </div>
    <Teleport to="body">
      <CategoriesMenu v-if="categoriesOpenState" />
    </Teleport>
  </div>
</template>

<style scoped>
.link {
  @apply flex p-1.5 text-zinc-600 hover:text-emerald-500;
}
.link_active {
  border-bottom-width: 2px;
  --tw-border-opacity: 1;
  border-bottom-color: rgb(5 150 105 / var(--tw-border-opacity));
  color: #047857;
}
</style>
