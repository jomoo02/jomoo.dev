const defaultSection = {
  absoluteTop: 0,
  tag: 'h3',
  id: 'default',
  text: 'default',
  sub: [],
  active: false,
};

const groupSections = (sections) => {
  return sections.reduce((group, section) => {
    if (section.tag === 'h3') {
      group.push(section);
    } else if (section.tag === 'h4') {
      group.at(-1).sub.push(section);
    }
    return group;
  }, []);
};

const pickSections = () => {
  const targetTgas = [
    { targetTag: 'h3', margin: 150 },
    { targetTag: 'h4', margin: 160 },
  ];

  return targetTgas
    .reduce((array, { targetTag, margin }) => {
      const absoluteTops = Array.from(document.getElementsByTagName(targetTag)).map((tag) => {
        const absoluteTop = window.screenY + tag.getBoundingClientRect().top - margin;
        return {
          absoluteTop,
          tag: targetTag,
          text: tag.innerText,
          id: tag.id,
          sub: [],
          active: false,
        };
      });
      return [...array, ...absoluteTops];
    }, [])
    .sort((a, b) => a.absoluteTop - b.absoluteTop);
};

const findLocation = (y, sectionGroups) => {
  for (let location = 0; location < sectionGroups.length - 1; location += 1) {
    const curAbsoluteTop = sectionGroups[location].absoluteTop;
    const nextAbsoluteTop = sectionGroups[location + 1].absoluteTop;

    if (y >= curAbsoluteTop && y < nextAbsoluteTop) {
      return location;
    }
  }

  if (y < sectionGroups[0].absoluteTop) {
    return -1;
  }

  return sectionGroups.length - 1;
};

const activeSection = (y, sectionGroups) => {
  const location = findLocation(y, sectionGroups);

  if (location !== -1) {
    const targetSection = sectionGroups[location];
    targetSection.active = true;

    return targetSection;
  }

  return defaultSection;
};

function useTableOfContentsV3() {
  const sectionGroups = ref([]);
  const mainSection = ref({ ...defaultSection });
  const subSection = ref({ ...defaultSection });

  const ticking = ref(false);

  const y = ref(0);

  const update = () => {
    y.value = window.scrollY;

    if (!ticking.value) {
      requestAnimationFrame(() => {
        mainSection.value.active = false;
        subSection.value.active = false;

        mainSection.value = activeSection(y.value, sectionGroups.value);
        if (mainSection.value.sub.length > 0) {
          subSection.value = activeSection(y.value, mainSection.value.sub);
        }
        ticking.value = false;
      });
      ticking.value = true;
    }
  };

  onMounted(() => {
    sectionGroups.value = groupSections(pickSections());
    window.addEventListener('scroll', update, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', update);
  });

  return {
    sectionGroups,
  };
}

export default useTableOfContentsV3;
