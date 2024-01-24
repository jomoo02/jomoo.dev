<script setup>
defineProps({
  detail: {
    type: String,
    default: 'category detail',
  },

  description: {
    type: String,
    default: 'category detail에 대한 설명',
  },

  iconName: {
    type: String,
    default: 'ion:accessibility',
  },

  path: {
    type: String,
    default: '/',
  },
});
</script>

<template>
  <NuxtLink :to="path">
    <div
      class="ring-1 ring-slate-300 hover:ring-emerald-500 hover:ring-2 rounded-xl w-full h-full py-3 px-4"
    >
      <div class="w-full h-20 flex items-center">
        <Icon :name="iconName" size="55" />
      </div>
      <div class="flex flex-col">
        <h3 class="text-lg py-1 font-medium truncate text-slate-800">{{ detail }}</h3>
        <div
          class="text-[14px] leading-4 text-slate-700/80 text-ellipsis overflow-hidden capitalize"
        >
          {{ description }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
