<script setup>
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/store/categoriesStore';

const TARGET_SIZE = 768;
const categoriesStore = useCategoriesStore();
const { activeCategories } = storeToRefs(categoriesStore);
const { isCategoriesMenuOpenOnTargetSize, toggleCategoriesMenu, closeCategoriesMenu } =
  useCategoriesMenuControls(TARGET_SIZE);

provide('closeCategoriesMenu', closeCategoriesMenu);
</script>

<template>
  <div>
    <div class="sticky top-0 z-20 w-full bg-white">
      <header class="border-b-[1px] border-b-gray-300">
        <nav
          class="grid grid-cols-6 min-h-16 max-h-20 items-center h-16 lg:h-20 justify-center mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 relative w-full"
        >
          <div class="col-span-1 flex justify-start md:hidden">
            <div class="cursor-pointer" @click="toggleCategoriesMenu">
              <ListIcon />
            </div>
          </div>
          <div class="flex justify-center md:justify-start col-span-4 md:col-span-1">
            <NuxtLink
              to="/"
              class="select-none text-2xl font-extrabold text-stone-800"
              @click="closeCategoriesMenu"
            >
              JOMOO.DEV
            </NuxtLink>
          </div>
          <ul class="hidden md:flex px-4 justify-center gap-x-10 col-span-4 font-semibold">
            <li v-for="{ path, active, category } in activeCategories" :key="category" class="p-1">
              <NuxtLink :to="path" class="link" :class="{ link_active: active }">
                {{ category }}
              </NuxtLink>
            </li>
            <li class="p-1">
              <span class="flex p-1.5 cursor-not-allowed text-zinc-600 select-none">etc</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <main class="pt-5 md:pt-8 min-h-[calc(100vh-65px)]">
      <slot />
    </main>
    <footer class="mt-8 h-10 border-t-[1px] border-t-gray-300">
      <div></div>
    </footer>
    <Teleport to="body">
      <CategoriesMenu v-if="isCategoriesMenuOpenOnTargetSize" />
    </Teleport>
  </div>
</template>

<style scoped>
.link {
  @apply flex p-1.5 text-zinc-600 hover:text-emerald-500 select-none;
}
.link_active {
  border-bottom-width: 2px;
  padding-bottom: 4px;
  --tw-border-opacity: 1;
  border-bottom-color: rgb(5 150 105 / var(--tw-border-opacity));
  color: #047857;
}
</style>
