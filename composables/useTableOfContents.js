function useTableOfContents() {
  const visibleLink = ref([]);
  const activeLink = ref([]);

  const observer = ref(null);

  const callback = (entries) => {
    entries.forEach((entry) => {
      const { id } = entry.target;

      if (entry.isIntersecting) {
        visibleLink.value = [...visibleLink.value, id];
      } else {
        visibleLink.value = visibleLink.value.filter((target) => target !== id);
      }
    });
  };


  onMounted(() => {
    observer.value = new IntersectionObserver(callback, { rootMargin: '-64px 0px'});

    document.querySelectorAll('.prose h2, .prose h3').forEach((section) => {
      observer.value.observe(section);
    });
  });

  onUnmounted(() => {
    observer.value.disconnect();
  });

  watch(visibleLink, (newValue, oldValue) => {
    if (newValue.length === 0) {
      activeLink.value = oldValue;
    } else {
      activeLink.value = newValue;
    }
  });

  return {
    activeLink,
  };
}

export default useTableOfContents;
