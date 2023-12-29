function useCategoriesMenuControls() {
  const categoriesMenuOpenState = ref(false);

  function openCategoriesMenu() {
    categoriesMenuOpenState.value = true;
  }

  function closeCategoriesMenu() {
    categoriesMenuOpenState.value = false;
  }

  function toggleCategoriesMenu() {
    categoriesMenuOpenState.value = !categoriesMenuOpenState.value;
  }

  return {
    categoriesMenuOpenState,
    openCategoriesMenu,
    closeCategoriesMenu,
    toggleCategoriesMenu,
  };
}

export default useCategoriesMenuControls;
