function useCheckScreenSize(targetSize) {
  const isSreenUnderTargetSize = ref(null);

  function checkScreenSize() {
    isSreenUnderTargetSize.value = window.innerWidth < targetSize;
  }

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onUnmounted(() => window.removeEventListener('resize', checkScreenSize));

  return { isSreenUnderTargetSize };
}

export default useCheckScreenSize;
