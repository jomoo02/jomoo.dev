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

  isWide: {
    type: Boolean,
    default: false,
  },
});

const containerClass = computed(() => {
  if (props.isWide) {
    return 'border-b mb-4 flex flex-col max-h-[150px] min-h-[150px]';
  }
  return 'border-2 border-stone-500 hover:border-4 hover:p-[14px] min-h-[16rem] h-64 max-h-64 rounded-xl p-4';
});

const titleClass = computed(() => {
  if (props.isWide) {
    return 'text-3xl py-1.5';
  }
  return 'text-2xl h-1/4 py-1';
});

const descriptionClass = computed(() => {
  if (props.isWide) {
    return 'text-lg truncate pt-4';
  }
  return 'h-[70%] m-0 min-h-[70%] max-h-[70%] text-sm md:text-base overflow-hidden text-ellipsis break-words';
});

const dateClass = computed(() => {
  if (props.isWide) {
    return 'pt-5';
  }
  return 'justify-end overflow-hidden text-ellipsis';
});
</script>

<template>
  <div class="w-full cursor-pointer" :class="containerClass" @click="navigateTo(props.path)">
    <div class="font-bold truncate" :class="titleClass">
      {{ props.title }}
    </div>
    <div class="text-zinc-600" :class="descriptionClass">
      {{ props.description }}
    </div>
    <div class="text-sm text-zinc-400 flex" :class="dateClass">
      {{ props.date }}
    </div>
  </div>
</template>
