import { useCategoriesStore } from '~~/store/categoriesStore';

export default defineNuxtRouteMiddleware((to) => {
  const appConfig = useAppConfig();
  const { home } = appConfig.category;

  const categoriesStore = useCategoriesStore();
  const { selectCategory } = categoriesStore;
  const routeCategory = to.path.split('/')[1];

  if (routeCategory) {
    selectCategory(routeCategory);
  } else {
    selectCategory(home);
  }
});
