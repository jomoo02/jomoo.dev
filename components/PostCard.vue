<script setup>
const props = defineProps({
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
  <div class="flex flex-col py-3">
    <div class="flex flex-1">
      <NuxtLink :to="props.path" class="size-fit w-full h-full">
        <h3
          class="xs:text-lg sm:text-xl md:text-2xl pb-1 xs:pb-1.5 md:pb-2.5 font-bold text-slate-700 text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {{ props.title }}
        </h3>
        <p class="text-xs xs:text-[1rem] xs:leading-[18px] sm:leading-5 text-slate-500">
          {{ props.description }}
        </p>
      </NuxtLink>
    </div>
    <slot name="tags" />
    <div class="text-xs xs:text-sm text-slate-400">
      {{ props.date }}
    </div>
  </div>
</template>
