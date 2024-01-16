<script setup>
import { POST_CARD_SIZE } from '~/constants/postCardSize';

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

  size: {
    type: String,
    required: true,
  },
});

const isPostCardSizeWide = computed(() => props.size === POST_CARD_SIZE.wide);

const containerClass = computed(() => {
  if (isPostCardSizeWide.value) {
    return 'border-b mb-2 max-h-[150px] min-h-[150px] px-1';
  }
  return 'border-2 border-stone-500 hover:border-4 hover:px-[18px] hover:py-[10px] min-h-[16rem] h-64 max-h-64 rounded-xl px-5';
});

const titleClass = computed(() => (isPostCardSizeWide.value ? 'md:text-3xl' : 'py-2.5'));

const descriptionClass = computed(() => {
  if (isPostCardSizeWide.value) {
    return 'text-lg truncate py-2.5';
  }
  return 'text-sm md:text-base';
});
</script>

<template>
  <div
    class="cursor-pointer flex flex-col py-3"
    :class="containerClass"
    @click="navigateTo(props.path)"
  >
    <div class="text-2xl font-bold truncate" :class="titleClass">
      {{ props.title }}
    </div>
    <div class="text-zinc-600 flex-1" :class="descriptionClass">
      {{ props.description }}
    </div>
    <div class="flex text-sm text-zinc-400" :class="{ 'justify-end': !isPostCardSizeWide }">
      {{ props.date }}
    </div>
  </div>
</template>
