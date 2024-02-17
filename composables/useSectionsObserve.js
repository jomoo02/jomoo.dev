function useSectionsObserve() {
  const visibleSections = ref([]);
  const activeSections = ref([]);

  const observer = ref(null);

  const callback = (entries) => {
    entries.forEach((entry) => {
      const { id } = entry.target;

      if (entry.isIntersecting) {
        visibleSections.value = [...visibleSections.value, id];
      } else {
        visibleSections.value = visibleSections.value.filter((target) => target !== id);
      }
    });
  };

  onMounted(() => {
    observer.value = new IntersectionObserver(callback);

    document.querySelectorAll('.prose h2, .prose h3').forEach((section) => {
      observer.value.observe(section);
    });
  });

  onUnmounted(() => {
    observer.value.disconnect();
  });

  watch(visibleSections, (newValue, oldValue) => {
    if (newValue.length === 0) {
      activeSections.value = oldValue;
    } else {
      activeSections.value = newValue;
    }
  });

  return {
    activeSections,
  };
}

export default useSectionsObserve;
