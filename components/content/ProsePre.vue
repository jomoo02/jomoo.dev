<template>
  <div>
    <div
      class="border-x border-t border-slate-600 rounded-t-md px-4 py-2 flex justify-between items-center"
    >
      <div class="flex items-center gap-x-2 xs:gap-x-2.5">
        <div class="flex"><Icon :name="selectIcon()" size="1.1rem" /></div>
        <span class="text-xs xs:text-sm font-medium text-slate-700 text-wrap break-all">
          {{ props.filename }}
        </span>
      </div>
      <button class="flex" @click="copyCode">
        <Icon name="icon-park-outline:copy" size="1.1rem" />
      </button>
    </div>
    <pre class="mt-0 flex break-all text-wrap rounded-t-none" :class="props.class">
      <slot />
    </pre>
  </div>
</template>

<script setup>
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'js',
  },
  filename: {
    type: String,
    default: '',
  },
  highlights: {
    type: Array,
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const languageIconType = {
  vue: 'vscode-icons:file-type-vue',
  js: 'vscode-icons:file-type-js-official',
  py: 'vscode-icons:file-type-python',
  ts: 'vscode-icons:file-type-typescript-official',
  md: 'vscode-icons:file-type-markdown',
  shell: 'ic:round-terminal',
  css: 'vscode-icons:file-type-css',
};

function selectIcon() {
  return languageIconType[props.language];
}

function copyCode() {
  window.navigator.clipboard.writeText(props.code);
}
</script>

<style>
pre code .line {
  display: block;
}
</style>