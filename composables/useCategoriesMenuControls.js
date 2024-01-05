function useCategoriesMenuControls(targetSize) {
  const categoriesMenuOpenState = ref(false);
  const { isSreenUnderTargetSize } = useCheckScreenSize(targetSize);

  const isCategoriesMenuOpenOnTargetSize = computed(
    () => categoriesMenuOpenState.value && isSreenUnderTargetSize.value,
  );

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
    isCategoriesMenuOpenOnTargetSize,
    openCategoriesMenu,
    closeCategoriesMenu,
    toggleCategoriesMenu,
  };
}

export default useCategoriesMenuControls;
