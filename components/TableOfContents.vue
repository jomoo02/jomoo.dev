<script setup>
const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
});

const { sectionGroups, activeSectionGroup, unActiveSectionGroup, activeTest2 } = useTableOfContents(
  props.sections,
);



const test = ref();
const nav = ref();

useTableOfContentsV2(sectionGroups);

  // const option = {
  //   // rootMargin: '-104px 0px -50% 0px',
  //   threshold: 1.0,
  // };

  // const callback = (entries) => {
  //   const temp = [];
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       // console.log('root', entry.rootBounds.y);
  //       console.log('clientRect', window.mouseMoveY + entry.boundingClientRect.top, entry.target.id);
  //       // console.log(entry.target);
  //       temp.push(entry.target);
  //     }
  //   });

  //   if (temp.length > 0) {
  //     const target = temp.sort((a, b) => a.index - b.index)[0];
  //     // console.log(target);
  //     activeTest2(target.id);
  //   }
  // };

  // const observer = new IntersectionObserver(callback, option);
// });

// onUnmounted(() => window.removeEventListener('scroll', update));
</script>

<template>
  <div class="px-px">
    <div class="font-semibold text-slate-800/90">목차</div>
    <nav ref="nav" class="text-slate-500/90">
      <ul ref="test" class="flex flex-col gap-y-2">
        <li v-for="subHeading in sectionGroups" :key="subHeading" class="truncate">
          <NuxtLink
            :id="`${subHeading.id}`"
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
