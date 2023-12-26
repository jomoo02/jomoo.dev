<template>
  <div
    class="w-full border-b mb-4 flex flex-col h-[150px] max-h-[150px] min-h-[150px] cursor-pointer"
    @click="contentCardDetail"
  >
    <div class="font-bold text-3xl py-1.5 truncate">
      {{ props.title }}
    </div>
    <div class="pt-4">
      <div class="text-lg truncate text-zinc-600">
        {{ props.description }}
      </div>
      <div class="text-sm pt-4 text-zinc-400">
        {{ props.date }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pageLink: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'title',
  },
  description: {
    type: String,
    default: 'description',
  },
  date: {
    type: String,
    default: '2023/12/12',
  },
});

const router = useRouter();

function contentCardDetail() {
  router.push({ path: props.pageLink });
}
</script>
