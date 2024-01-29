<script setup>
import { PREVIOUS, PREVIOUS_POST_TEXT, NEXT_POST_TEXT } from '~/constants/postDirection';

const props = defineProps({
  direction: {
    type: String,
    required: true,
  },

  path: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
});

const iconName = computed(() =>
  props.direction === PREVIOUS ? 'icon-park:arrow-left' : 'icon-park:arrow-right',
);

const justifyContentClass = computed(() =>
  props.direction === PREVIOUS ? 'justify-start' : 'justify-end',
);

const flexRowDirectionClass = computed(() =>
  props.direction === PREVIOUS ? 'flex-row' : 'flex-row-reverse',
);
</script>

<template>
  <NuxtLink :to="props.path">
    <div
      class="ring-1 hover:ring-2 ring-slate-400/50 hover:ring-emerald-400 rounded-xl py-2.5 px-3.5"
    >
      <div class="flex items-center gap-x-5 md:gap-x-1.5" :class="flexRowDirectionClass">
        <div class="md:w-2/12 flex" :class="justifyContentClass">
          <Icon :name="iconName" size="32" />
        </div>
        <div class="w-10/12">
          <div
            class="flex text-xs xs:text-sm font-semibold text-zinc-500"
            :class="justifyContentClass"
          >
            {{ props.direction === PREVIOUS ? PREVIOUS_POST_TEXT : NEXT_POST_TEXT }}
          </div>
          <div
            class="flex items-center text-base xs:text-lg font-bold text-zinc-700 truncate"
            :class="justifyContentClass"
          >
            {{ props.title }}
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
