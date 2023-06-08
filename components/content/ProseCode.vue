<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  },
  methods: {
    clickCopyBtn() {
        window.navigator.clipboard.writeText(this.$props.code);
    }
  }
})
</script>


<template>
    <div class="relative">
        <button class="absolute top-2 right-2 text-gray-100 font-bold text-sm hover:text-white rounded-md px-1.5 py-0.5 hover:bg-gray-500" @click="clickCopyBtn">copy</button>
        <slot />
    </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>