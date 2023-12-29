import { defineStore } from 'pinia';
import { HOME, PROJECTS, NOTE } from '../constants/categories';

export const useCategoriesStore = defineStore('categories', () => {
  const categoriesState = ref(HOME);

  const isSelectedNote = computed(() => categoriesState.value === NOTE);
  const isSelectedProjects = computed(() => categoriesState.value === PROJECTS);
  const activeCategories = computed(() => {
    return [
      { active: isSelectedNote.value, category: NOTE, path: '/note/programmers' },
      { active: isSelectedProjects.value, category: PROJECTS, path: '/projects/vocabularynote' },
    ];
  });

  function selectHome() {
    categoriesState.value = HOME;
  }

  function selectNote() {
    categoriesState.value = NOTE;
  }

  function selectProject() {
    categoriesState.value = PROJECTS;
  }

  return {
    categoriesState,
    isSelectedNote,
    isSelectedProjects,
    activeCategories,
    selectHome,
    selectNote,
    selectProject,
  };
});
