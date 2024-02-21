<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
</script>

<template>
  <NuxtLayout>
    <div class="min-h-[calc(100vh-64px)] flex justify-center items-center flex-col gap-y-10">
      <div class="flex justify-center items-center flex-col gap-y-3">
        <div class="flex justify-center items-center flex-col">
          <div class="text-xs xs:text-sm font-medium text-slate-500">
            {{ props.error?.statusCode }}
          </div>
          <h1 class="text-xl xs:text-3xl sm:text-4xl text-slate-800 font-semibold capitalize">
            page not found
          </h1>
        </div>
        <div
          class="flex flex-col md:flex-row gap-x-2 text-sm xs:text-lg justify-center items-center text-slate-500"
        >
          <span class="font-medium underline underline-offset-4">{{ route.fullPath }}</span>
          <span>page doesn't exist</span>
        </div>
      </div>
      <NuxtLink
        to="/"
        class="text-sm xs:text-base px-3 py-1 xs:py-1.5 bg-emerald-400 rounded-lg text-white hover:bg-emerald-500/90"
      >
        Home
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
