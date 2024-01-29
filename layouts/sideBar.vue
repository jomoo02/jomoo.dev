<script setup>
const route = useRoute();
const currentDetail = route.params.detail;

const appConfig = useAppConfig();
const { link } = appConfig.ui.nav;

const { categoryItems } = useCategory();
</script>

<template>
  <div class="grid grid-cols-10 gap-2 sm:gap-4 md:gap-7">
    <div class="col-span-10 md:col-span-2">
      <aside
        class="flex md:sticky md:top-[4rem] overflow-y-auto max-h-[calc(100vh-4rem)] py-3.5 sm:py-4 md:py-10"
      >
        <nav>
          <ul
            class="font-bold flex gap-x-1.5 xs:gap-x-2 sm:gap-x-4 md:gap-y-1 md:flex-col text-xs xs:text-[0.9rem] sm:text-base overflow-x-auto whitespace-nowrap"
          >
            <li v-for="{ path, text, detail } in categoryItems" :key="path" class="p-1">
              <NuxtLink :to="path" :class="detail === currentDetail ? link.active : link.default">
                {{ text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
    <div class="col-span-10 md:col-span-8 min-h-[calc(100vh-4rem)] md:py-10">
      <slot />
    </div>
  </div>
</template>
