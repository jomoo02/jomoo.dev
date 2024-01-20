<script setup>
defineProps({
  detail: {
    type: String,
    default: 'category detail',
  },

  description: {
    type: String,
    default: '해당 category detail에 대한 설명',
  },

  imgPath: {
    type: String,
    default: '/projects/jomoodev/refactor-1/tt.png',
  },

  path: {
    type: String,
    default: '/',
  },
});
</script>

<template>
  <NuxtLink :to="path">
    <div class="ring-1 ring-slate-200 hover:ring-emerald-500 hover:ring-2 rounded-xl w-full h-full">
      <div class="flex">
        <div class="border-b h-40">
          <img :src="imgPath" alt="1" class="object-cover w-full h-full" />
        </div>
      </div>
      <div class="flex flex-col px-4 py-2">
        <h3 class="text-xl py-[5px] font-medium truncate">{{ detail }}</h3>
        <div class="text-sm text-slate-700 text-ellipsis overflow-hidden">
          {{ description }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
