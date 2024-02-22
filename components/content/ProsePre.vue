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

const copied = ref(false);

function selectIcon() {
  return languageIconType[props.language];
}

function copyCode() {
  window.navigator.clipboard.writeText(props.code);

  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 1000);
}
</script>

<template>
  <div class="my-5">
    <div
      class="border-x border-t border-slate-600 rounded-t-md px-3 xs:px-4 py-1.5 xs:py-2 flex justify-between items-center"
    >
      <div class="flex items-center gap-x-2 xs:gap-x-2.5">
        <div class="flex"><Icon :name="selectIcon()" size="1.1rem" /></div>
        <span class="text-xs xs:text-sm font-medium text-slate-700 text-wrap break-all">
          {{ props.filename }}
        </span>
      </div>
      <div v-if="copied" class="flex justify-center items-center gap-x-1">
        <span class="text-sm hidden sm:inline text-slate-700">copied</span>
        <div class="flex">
          <Icon name="material-symbols:check-box-outline" size="1.1rem" style="color: #334155" />
        </div>
      </div>
      <button v-else class="flex" @click="copyCode">
        <Icon name="icon-park-outline:copy" size="1.1rem" style="color: #334155" />
      </button>
    </div>
    <pre
      class="my-0 py-4 rounded-t-none whitespace-pre-wrap break-words"
      :class="props.class"
    ><slot /></pre>
  </div>
</template>

<style>
pre code .line {
  @apply block;
}
</style>
