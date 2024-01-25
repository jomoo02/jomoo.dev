const categoriesMap = {
  note: {
    description: '학습한 내용들을 기록하는 장소입니다.',
    itmes: [
      {
        detail: 'programmers',
        text: '프로그래머스',
        description: '프로그래머스 코딩 테스트 연습',
        path: '/note/programmers',
        iconName: 'ProgrammersIcon',
      },
      {
        detail: 'algorithms',
        text: '알고리즘',
        description: '학습한 알고리즘 정리',
        path: '/note/algorithms',
        iconName: 'mynaui:math-square',
      },
      {
        detail: 'wootecos',
        text: '우테코',
        description: '우테코 프리코스',
        path: '/note/wootecos',
        iconName: 'devicon-plain:woocommerce',
      },
      {
        detail: 'js',
        text: '자바스크립트',
        description: '학습한 자바스크립트 정리',
        path: '/note/js',
        iconName: 'fa6-brands:square-js',
      },
    ],
  },

  projects: {
    description: '진행한 토이 프로젝트를 기술하는 장소입니다.',
    itmes: [
      {
        detail: 'vocabularynote',
        text: 'vocabulary',
        description: 'vue3로 만든 토이 프로젝트 영어 단어장',
        path: '/projects/vocabularynote',
        iconName: 'healthicons:i-note-action-outline',
      },
      {
        detail: 'jomoodev',
        text: 'jomoo.dev',
        description: `nuxt3와 nuxt-content로 만든 블로그`,
        path: '/projects/jomoodev',
        iconName: 'material-symbols-light:logo-dev-rounded',
      },
    ],
  },
};

export function useCategory() {
  const category = ref('');
  const categoryDescription = ref('');
  const categoryItems = ref([]);
  const route = useRoute();

  category.value = route.params.category;
  categoryDescription.value = categoriesMap[category.value].description;
  categoryItems.value = categoriesMap[category.value].itmes;

  return { category, categoryDescription, categoryItems };
}
