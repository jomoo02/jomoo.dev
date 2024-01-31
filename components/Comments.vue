<script setup>
const utterancMap = [
  { attribute: 'type', value: 'text/javascript' },
  { attribute: 'src', value: 'https://utteranc.es/client.js' },
  { attribute: 'async', value: true },
  { attribute: 'crossorigin', value: 'anonymous' },
  { attribute: 'issue-term', value: 'pathname' },
  { attribute: 'repo', value: 'jomoo02/jomoo.dev-comments' },
  { attribute: 'theme', value: 'github-light' },
];

const comments = ref();

onMounted(() => {
  const utterances = document.createElement('script');
  utterancMap.forEach(({ attribute, value }) => utterances.setAttribute(attribute, value));

  comments.value.appendChild(utterances);
});
</script>

<template>
  <div ref="comments" class="mt-20 md:mt-28">
    <h2 class="font-medium text-slate-900 text-lg">댓글</h2>
  </div>
</template>
