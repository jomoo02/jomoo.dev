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
  if (!copied.value) {
    window.navigator.clipboard.writeText(props.code);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 1500);
  }
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
      <div class="flex justify-center items-center gap-x-1">
        <!-- <span v-if="copied" class="text-sm hidden sm:inline text-slate-700">copied</span> -->
        <button class="flex" @click="copyCode">
          <Transition mode="out-in">
            <Icon
              v-if="!copied"
              name="icon-park-outline:copy"
              size="1.1rem"
              style="color: #334155"
            />
            <Icon v-else-if="copied" name="icon-park:check" size="1.1rem" style="color: #334155" />
          </Transition>
        </button>
      </div>
    </div>
    <pre
      class="my-0 py-4 rounded-t-none whitespace-pre-wrap break-words"
      :class="props.class"
    ><slot /></pre>
  </div>
</template>

<style scoped>
pre code .line {
  @apply block;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
