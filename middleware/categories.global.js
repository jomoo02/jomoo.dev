import { useCategoriesStore } from '~~/store/categoriesStore';
import { NOTE, PROJECTS } from '../constants/categories';

export default defineNuxtRouteMiddleware((to) => {
  const categoriesStore = useCategoriesStore();
  const { selectHome, selectNote, selectProject } = categoriesStore;
  const category = to.path.split('/')[1];

  if (category === '') {
    selectHome();
  } else if (category === NOTE) {
    selectNote();
  } else if (category === PROJECTS) {
    selectProject();
  }
});
