<script setup>
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

const appConfig = useAppConfig();
const { previous, next } = appConfig.postNavigation;

const isPreviousDirection = computed(() => props.direction === previous.direction);

const iconName = computed(() =>
  isPreviousDirection.value ? 'icon-park:arrow-left' : 'icon-park:arrow-right',
);

const justifyContentClass = computed(() =>
  isPreviousDirection.value ? 'justify-start' : 'justify-end',
);

const flexRowDirectionClass = computed(() =>
  isPreviousDirection.value ? 'flex-row' : 'flex-row-reverse',
);
</script>

<template>
  <NuxtLink :to="props.path">
    <div
      class="ring-1 hover:ring-2 ring-slate-400/50 hover:ring-emerald-400 rounded-xl py-2.5 px-3.5"
    >
      <div class="flex items-center gap-x-2 xs:gap-x-5 md:gap-x-3" :class="flexRowDirectionClass">
        <div class="xs:hidden" :class="justifyContentClass">
          <Icon :name="iconName" size="28" />
        </div>
        <div class="hidden xs:block w-auto" :class="justifyContentClass">
          <Icon :name="iconName" size="32" />
        </div>
        <div class="flex flex-col w-3/4">
          <div
            class="flex text-xs xs:text-sm font-semibold text-zinc-500"
            :class="justifyContentClass"
          >
            {{ isPreviousDirection ? previous.text : next.text }}
          </div>
          <div
            class="flex items-center text-base xs:text-lg font-bold text-zinc-700"
            :class="justifyContentClass"
          >
            <span class="truncate">{{ props.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
