<script setup>
const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
});

const { sectionGroups, activeSectionGroup, unActiveSectionGroup } = useTableOfContents(
  props.sections,
);

const test = ref();
const nav = ref();

onMounted(() => {
  const option = {
    rootMargin: '-88px 0px 0px 0px',
    threshold: 1.0,
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSectionGroup(entry.target.id);
      } else {
        unActiveSectionGroup(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(callback, option);

  Array.from(document.getElementsByTagName('h3')).forEach((tag) => {
    observer.observe(tag);
  });
});
</script>

<template>
  <div class="px-px">
    <div class="font-semibold text-slate-800/90">목차</div>
    <nav ref="nav" class="text-slate-500/90">
      <ul ref="test" class="flex flex-col gap-y-2">
        <li v-for="subHeading in sectionGroups" :key="subHeading" class="truncate">
          <NuxtLink
            :to="`#${subHeading.id}`"
            class="font-medium text-sm"
            :class="{ 'text-emerald-500': subHeading.active }"
          >
            {{ subHeading.text }}
          </NuxtLink>
          <ul v-if="subHeading.sub.length > 0" class="pt-2 pl-2.5 flex flex-col gap-y-1.5">
            <li v-for="sub in subHeading.sub" :key="sub" class="truncate">
              <NuxtLink
                :to="`#${sub.id}`"
                class="text-sm font-medium"
                :class="{ 'text-emerald-500': sub.active }"
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
