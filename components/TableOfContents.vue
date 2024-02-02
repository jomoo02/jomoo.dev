<script setup>
const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
});

const { sectionGroups, activeSection, activeSectionGroup, start } = useTableOfContents(
  props.sections,
);

onMounted(() => {
  const { hash } = useRoute();
  start(hash.slice(1));
});
</script>

<template>
  <div class="px-px">
    <div class="font-semibold text-slate-800/90">목차</div>
    <nav class="text-slate-500/90">
      <ul class="flex flex-col gap-y-2">
        <li v-for="subHeading in sectionGroups" :key="subHeading" class="truncate">
          <NuxtLink
            :to="`#${subHeading.id}`"
            class="font-medium text-sm"
            :class="{ 'text-emerald-500': subHeading.active }"
            @click="activeSectionGroup(subHeading.id)"
          >
            {{ subHeading.text }}
          </NuxtLink>
          <ul v-if="subHeading.sub.length > 0" class="pt-2 pl-2.5 flex flex-col gap-y-1.5">
            <li v-for="sub in subHeading.sub" :key="sub" class="truncate">
              <NuxtLink
                :to="`#${sub.id}`"
                class="text-sm font-medium"
                :class="{ 'text-emerald-500': sub.active }"
                @click="activeSection(subHeading.id, sub.id)"
              >
                {{ sub.text }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
