import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', () => {
  const appConfig = useAppConfig();
  const { home, note, projects } = appConfig.category;

  const categoriesState = ref(home);

  const isSelectedNote = computed(() => categoriesState.value === note);

  const isSelectedProjects = computed(() => categoriesState.value === projects);

  const activeCategories = computed(() => {
    return [
      { active: isSelectedNote.value, category: note, path: `/${note}` },
      { active: isSelectedProjects.value, category: projects, path: `/${projects}` },
    ];
  });

  function selectCategory(category = home) {
    categoriesState.value = category;
  }

  return {
    categoriesState,
    isSelectedNote,
    isSelectedProjects,
    activeCategories,
    selectCategory,
  };
});
