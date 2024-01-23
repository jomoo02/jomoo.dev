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
      <NuxtLink :to="props.path">
        <div class="text-2xl font-bold truncate pb-3">
          {{ props.title }}
        </div>
        <div class="text-zinc-500 text-base leading-5">
          {{ props.description }}
        </div>
      </NuxtLink>
    </div>
    <div class="font-semibold text-sm">
      <slot name="tags" />
    </div>
    <div class="flex text-sm text-zinc-400">
      {{ props.date }}
    </div>
  </div>
</template>
