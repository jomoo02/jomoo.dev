<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
});

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const formatDate = computed(() => {
  const date = new Date(props.date);
  return date.toLocaleDateString('ko-KR', options);
});
</script>

<template>
  <div class="flex justify-end text-sm px-2">{{ formatDate }}</div>
</template>
