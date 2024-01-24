const categoriesMap = {
  note: [
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
  ],

  projects: [
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
  ],
};

export function useCategory() {
  const category = ref('');
  const categoryItems = ref([]);
  const route = useRoute();

  category.value = route.params.category;
  categoryItems.value = categoriesMap[category.value];

  return { category, categoryItems };
}
