<script setup>
const props = defineProps({
  links: {
    type: Array,
    default() {
      return [
        {
          id: 'id',
          depth: 2,
          text: 'intro',
          children: [],
        },
      ];
    },
  },
});

const { activeSections } = useSectionsObserve();

function isActive(id) {
  return activeSections.value.includes(id);
}
</script>

<template>
  <div class="px-px flex flex-col gap-y-2">
    <div class="font-semibold text-slate-800/90">목차</div>
    <nav class="text-slate-500/90">
      <ul class="space-y-2.5 px-px">
        <li v-for="{ id, text, children } in props.links" :key="id">
          <NuxtLink
            :to="`#${id}`"
            class="font-medium text-sm block truncate"
            :class="{ 'text-emerald-500': isActive(id) }"
          >
            {{ text }}
          </NuxtLink>
          <ul v-if="children" class="pt-2 pl-2.5 space-y-2">
            <li v-for="{ id: childId, text: childText } in children" :key="childId">
              <NuxtLink
                :to="`#${childId}`"
                class="font-medium text-sm block truncate"
                :class="{ 'text-emerald-500': isActive(childId) }"
              >
                {{ childText }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
