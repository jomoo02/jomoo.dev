<script setup>
const projects = [
  {
    detail: 'vocabulary',
    description: 'vue3로 만든 토이 프로젝트 단어장',
    path: '/projects/vocabularynote',
    iconName: 'healthicons:i-note-action-outline',
  },
  {
    detail: 'jomoo.dev',
    description: `nuxt3와 nuxt-content로 만든 블로그`,
    path: '/projects/jomoodev',
    iconName: 'material-symbols-light:logo-dev-rounded',
  },
];

const note = [
  {
    detail: '프로그래머스',
    description: '프로그래머스 코딩 테스트 연습',
    path: '/note/programmers',
    iconName: 'ProgrammersIcon',
  },
  {
    detail: '알고리즘',
    description: '학습한 알고리즘 정리',
    path: '/note/algorithms',
    iconName: 'mynaui:math-square',
  },
  {
    detail: '우테코',
    description: '우테코 프리코스',
    path: '/note/wootecos',
    iconName: 'devicon-plain:woocommerce',
  },
  {
    detail: '자바스크립트',
    description: '학습한 자바스크립트 정리',
    path: '/note/js',
    iconName: 'fa6-brands:square-js',
  },
];

const categoryItems = { note, projects };

const route = useRoute();
const { category } = route.params;
const categoryItem = categoryItems[category];
</script>

<template>
  <NuxtLayout name="side-bar">
    <div class="flex flex-col gap-y-5 py-3">
      <h1 class="text-xl font-bold capitalize">{{ category }}</h1>
      <div class="grid sm:grid-cols-2 gap-x-2 gap-y-8 xl:grid-cols-3">
        <div
          v-for="{ detail, path, description, iconName } in categoryItem"
          :key="detail"
          class="sm:max-w-72 md:w-80 h-44 lg:min-w-80 xl:w-72 xl:min-w-72"
        >
          <CategoryCard
            :detail="detail"
            :path="path"
            :description="description"
            :icon-name="iconName"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
