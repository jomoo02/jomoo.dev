import { defineStore } from 'pinia';
import { HOME, NOTE, PROJECTS } from '../constants/categories';

export const useCategoriesStore = defineStore('categories', () => {
  const categoriesState = ref(HOME);
  const isSelectedNote = computed(() => categoriesState.value === NOTE);
  const isSelectedProjects = computed(() => categoriesState.value === PROJECTS);

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
    selectHome,
    selectNote,
    selectProject,
  };
});
