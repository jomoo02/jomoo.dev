<script setup>
const ProjectsSideBar = resolveComponent('ProjectsSideBar');
const NoteSideBar = resolveComponent('NoteSideBar');

const route = useRoute();
const { category } = route.params;
const sideBar = { projects: ProjectsSideBar, note: NoteSideBar };
</script>

<template>
  <div>
    <div class="flex justify-end md:h-6">
      <slot name="codeLink" />
    </div>
    <div class="grid grid-cols-10 gap-7 md:gap-7 md:min-h-screen">
      <div
        class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)] justify-between"
      >
        <component :is="sideBar[category]" />
        <!-- <slot name="codeLinkMd" /> -->
      </div>
      <div class="col-span-10 md:col-span-8">
        <slot />
      </div>
    </div>
  </div>
</template>
