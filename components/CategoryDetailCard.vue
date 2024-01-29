<script setup>
defineProps({
  detailText: {
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
      class="ring-1 hover:ring-2 ring-slate-400/50 hover:ring-emerald-500 rounded-xl h-full py-2 px-4"
    >
      <div class="xs:hidden flex items-center h-12">
        <Icon :name="iconName" size="45" />
      </div>
      <div class="hidden xs:flex items-center h-20">
        <Icon :name="iconName" size="55" />
      </div>
      <div class="flex flex-col">
        <h3 class="text-lg py-1 font-medium truncate text-slate-800">{{ detailText }}</h3>
        <p
          class="text-xs leading-3 xs:text-[14px] xs:leading-4 text-slate-700/80 break-keep capitalize"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
