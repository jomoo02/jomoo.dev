<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
});

const formattedDate = computed(() => formatDate(props.date));
</script>

<template>
  <div class="flex justify-end text-sm px-2">{{ formattedDate }}</div>
</template>
