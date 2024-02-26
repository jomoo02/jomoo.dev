<script setup>
defineProps({
  path: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-1">
      <NuxtLink :to="path" class="size-fit w-full">
        <h3
          class="xs:text-lg sm:text-xl md:text-2xl pb-1 xs:pb-1.5 md:pb-2.5 font-bold text-slate-700 text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {{ title }}
        </h3>
        <p class="text-xs xs:text-[1rem] xs:leading-[18px] sm:leading-5 text-slate-500 break-keep">
          {{ description }}
        </p>
      </NuxtLink>
    </div>
    <slot name="tags" />
    <div class="text-xs xs:text-sm text-slate-400">
      {{ formatDate(date) }}
    </div>
  </div>
</template>

<style scoped>
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
