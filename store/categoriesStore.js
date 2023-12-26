import { defineStore } from 'pinia';
import { HOME, NOTE, PROJECTS } from '../constants/categories';

export const useCategoriesStore = defineStore('categories', () => {
  const categoriesState = ref(HOME);

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
    selectHome,
    selectNote,
    selectProject,
  };
});
