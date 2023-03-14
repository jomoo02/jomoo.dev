<script lang="ts">
import { defineComponent } from '#imports'
import { client } from 'process';

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
    copy_click() {
        window.navigator.clipboard.writeText(this.$props.code).then(() => {
            console.log(this.$props.code);
        });
    }
  }
})
</script>


<template>
    <div class="relative tett">
        <button class="absolute top-2 right-2 text-sm  hover:text-white rounded-md px-1.5 py-0.5 hover:bg-gray-500" @click="copy_click">copy</button>
        <slot />
    </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>