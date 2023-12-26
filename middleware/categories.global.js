import { useCategoriesStore } from '~~/store/categoriesStore';
import { NOTE, PROJECTS } from '../constants/categories';

export default defineNuxtRouteMiddleware((to, from) => {
  // if (from.path === to.path) return;

  const categoriesStore = useCategoriesStore();
  const { selectHome, selectNote, selectProject } = categoriesStore;
  const toPath = to.path.split('/')[1];

  if (toPath === '') {
    selectHome();
  } else if (toPath === NOTE) {
    selectNote();
  } else if (toPath === PROJECTS) {
    selectProject();
  }
});
