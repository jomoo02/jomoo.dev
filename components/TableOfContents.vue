<script setup>
const { sectionGroups } = useTableOfContentsV3();
</script>

<template>
  <div class="px-px">
    <div class="font-semibold text-slate-800/90">목차</div>
    <nav class="text-slate-500/90">
      <ul class="flex flex-col gap-y-2">
        <li v-for="{ id, active, text, sub } in sectionGroups" :key="id" class="truncate">
          <NuxtLink
            :to="`#${id}`"
            class="font-medium text-sm"
            :class="{ 'text-emerald-500': active }"
          >
            {{ text }}
          </NuxtLink>
          <ul v-if="sub.length > 0" class="pt-2 pl-2.5 flex flex-col gap-y-1.5">
            <li v-for="subTitle in sub" :key="subTitle.id" class="truncate">
              <NuxtLink
                :to="`#${subTitle.id}`"
                class="text-sm font-medium"
                :class="{ 'text-emerald-500': subTitle.active }"
              >
                {{ subTitle.text }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
