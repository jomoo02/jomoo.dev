function useCategories() {
  const categoriesOpenState = ref(false);

  function openCategories() {
    categoriesOpenState.value = true;
  }

  function closeCategories() {
    categoriesOpenState.value = false;
  }

  function toggleCategories() {
    categoriesOpenState.value = !categoriesOpenState.value;
  }

  return {
    categoriesOpenState,
    openCategories,
    closeCategories,
    toggleCategories,
  };
}

export default useCategories;
