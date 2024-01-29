<script setup>
import { storeToRefs } from 'pinia';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { useCategoriesStore } from '~~/store/categoriesStore';

const TARGET_SIZE = 768;

const appConfig = useAppConfig();
const { header, nav } = appConfig.ui;
const { link } = nav;

const categoriesStore = useCategoriesStore();
const { activeCategories } = storeToRefs(categoriesStore);
const { isCategoriesMenuOpenOnTargetSize, toggleCategoriesMenu, closeCategoriesMenu } =
  useCategoriesMenuControls(TARGET_SIZE);

provide('closeCategoriesMenu', closeCategoriesMenu);
</script>

<template>
  <div>
    <SpeedInsights />
    <header>
      <div
        class="grid grid-cols-6 items-center justify-center mx-auto h-[var(--header-height)] max-w-7xl px-6 sm:px-4 lg:px-8"
      >
        <div class="col-span-1 flex justify-start md:hidden">
          <button class="xs:hidden" @click="toggleCategoriesMenu">
            <Icon :name="header.icon" size="26" />
          </button>
          <button class="hidden xs:block" @click="toggleCategoriesMenu">
            <Icon :name="header.icon" size="32" />
          </button>
        </div>
        <div class="col-span-4 md:col-span-1 flex justify-center md:justify-start">
          <NuxtLink
            to="/"
            class="text-lg xs:text-xl sm:text-2xl font-extrabold text-slate-800 select-none"
            @click="closeCategoriesMenu"
          >
            JOMOO.DEV
          </NuxtLink>
        </div>
        <nav class="col-span-4 hidden md:flex justify-center">
          <ul class="flex px-4 gap-x-10 col-span-4 font-semibold">
            <li v-for="{ path, active, category } in activeCategories" :key="category" class="p-1">
              <NuxtLink
                :to="path"
                class="flex p-1.5 select-none"
                :class="
                  active ? [link.active, 'border-b-2 pb-1 border-b-emerald-600'] : link.default
                "
              >
                {{ category }}
              </NuxtLink>
            </li>
            <li class="p-1">
              <span class="flex p-1.5 cursor-not-allowed text-slate-600 select-none">etc</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <div></div>
    </footer>
    <Teleport to="body">
      <CategoriesMenu v-if="isCategoriesMenuOpenOnTargetSize" />
    </Teleport>
  </div>
</template>
