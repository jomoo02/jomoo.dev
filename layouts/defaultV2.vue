<script setup>
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/store/categoriesStore';

const categoriesStore = useCategoriesStore();
const { isSelectedNote, isSelectedProjects } = storeToRefs(categoriesStore);
const { categoriesOpenState, toggleCategories, closeCategories } = useCategories();

provide('categoriesMenu', closeCategories);

function clickCategoriesMenu() {
  if (process.client) {
    if (categoriesOpenState.value) {
      document.documentElement.classList.remove('overflow-y-hidden');
    } else {
      document.documentElement.classList.add('overflow-y-hidden');
    }
    toggleCategories();
  }
}

function clickHome() {
  closeCategories();
}
</script>

<template>
  <div>
    <div class="sticky top-0 z-20 w-full bg-white">
      <header class="border-b-[1px] border-b-gray-300">
        <nav
          class="grid grid-cols-6 min-h-16 max-h-20 items-center h-16 lg:h-20 justify-center mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 relative w-full"
        >
          <div
            class="col-span-1 flex justify-start cursor-pointer md:hidden"
            @click="clickCategoriesMenu"
          >
            <ListIcon />
          </div>
          <div
            class="flex justify-center md:justify-start col-span-4 md:col-span-1 text-2xl font-extrabold text-stone-800"
          >
            <NuxtLink to="/" @click="clickHome">JOMOO.DEV</NuxtLink>
          </div>
          <ul class="hidden md:flex px-4 justify-center gap-x-10 col-span-4 font-semibold">
            <li class="p-1">
              <NuxtLink to="/note/programmers">
                <span class="link" :class="{ link_active: isSelectedNote }">Note</span>
              </NuxtLink>
            </li>
            <li class="p-1">
              <NuxtLink to="/projects/vocabularynote">
                <span class="link" :class="{ link_active: isSelectedProjects }">Projects</span>
              </NuxtLink>
            </li>
            <li class="p-1">
              <span class="flex p-1.5 cursor-not-allowed text-zinc-600">etc</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <main class="pt-5 md:pt-8 min-h-[calc(100vh-65px)]">
      <slot />
    </main>
    <Teleport to="body"><CategoriesMenu v-if="categoriesOpenState" /></Teleport>
  </div>
</template>

<style scoped>
.link {
  @apply flex p-1.5 text-zinc-600 hover:text-emerald-500;
}
.link_active {
  border-bottom-width: 2px;
  padding-bottom: 4px;
  --tw-border-opacity: 1;
  border-bottom-color: rgb(5 150 105 / var(--tw-border-opacity));
  color: #047857;
}

.testcl {
  @apply overflow-y-hidden max-h-screen;
}
</style>
