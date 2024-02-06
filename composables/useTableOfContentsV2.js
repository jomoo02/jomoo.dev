function useTableOfContentsV2(test) {
  const y = ref(0);
  const tempt = ref();
  const ticking = ref(false);

  function update() {
    y.value = window.scrollY;

    if (!ticking.value) {
      requestAnimationFrame(() => {
        tempt.value.forEach((v, index) => {
          if (index === 0) {
            if (y.value >= v.absoluteTop && y.value < tempt.value[index + 1].absoluteTop) {
              test.value[index].active = true;
            } else {
              test.value[index].active = false;
            }
          } else if (index === tempt.value.length - 1) {
            if (y.value >= v.absoluteTop) {
              test.value[index].active = true;
            } else {
              test.value[index].active = false;
            }
          } else if (
            y.value >= tempt.value[index].absoluteTop &&
            y.value < tempt.value[index + 1].absoluteTop
          ) {
            test.value[index].active = true;
          } else {
            test.value[index].active = false;
          }
        });
        ticking.value = false;
      });
      ticking.value = true;
    }
  }

  onMounted(() => {
    const temp = Array.from(document.getElementsByTagName('h3')).map((tag) => {
      const absoluteTop = window.scrollY + tag.getBoundingClientRect().top - 192;
      return { tag, absoluteTop, id: tag.id };
    });
    tempt.value = temp;

    window.addEventListener('scroll', update, { passive: true });
  });

  onUnmounted(() => window.removeEventListener('scroll', update));
}

export default useTableOfContentsV2;
