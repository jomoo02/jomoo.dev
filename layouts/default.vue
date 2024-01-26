<script setup>
import { storeToRefs } from 'pinia';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { useCategoriesStore } from '~~/store/categoriesStore';

const TARGET_SIZE = 768;

const appConfig = useAppConfig();
const { main, header, footer } = appConfig.ui;

const categoriesStore = useCategoriesStore();
const { activeCategories } = storeToRefs(categoriesStore);
const { isCategoriesMenuOpenOnTargetSize, toggleCategoriesMenu, closeCategoriesMenu } =
  useCategoriesMenuControls(TARGET_SIZE);

provide('closeCategoriesMenu', closeCategoriesMenu);
</script>

<template>
  <div>
    <SpeedInsights />
    <header class="border-b-[1px] border-b-gray-300 sticky top-0 z-20 bg-white">
      <div
        class="grid grid-cols-6 items-center justify-center mx-auto"
        :class="Object.values(header.container)"
      >
        <div class="col-span-1 flex justify-start md:hidden">
          <button @click="toggleCategoriesMenu">
            <Icon :name="header.icon" size="32" />
          </button>
        </div>
        <div class="col-span-4 md:col-span-1 flex justify-center md:justify-start">
          <NuxtLink
            to="/"
            class="select-none text-xl sm:text-2xl font-extrabold text-stone-800"
            @click="closeCategoriesMenu"
          >
            JOMOO.DEV
          </NuxtLink>
        </div>
        <nav class="col-span-4 hidden md:flex justify-center">
          <ul class="flex px-4 gap-x-10 col-span-4 font-semibold">
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
      </div>
    </header>
    <main :class="main.container">
      <slot />
    </main>
    <footer :class="footer.container">
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
