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
    if (section.tag === 'h2') {
      group.push(section);
    } else if (section.tag === 'h3') {
      group.at(-1).sub.push(section);
    }
    return group;
  }, []);
};

const pickSections = () => {
  const targetTags = [
    { targetTag: 'h2', margin: 150 },
    { targetTag: 'h3', margin: 160 },
  ];

  return targetTags
    .reduce((array, { targetTag, margin }) => {
      const absoluteTops = Array.from(document.getElementsByTagName(targetTag)).map((tag) => {
        const absoluteTop = window.scrollY + tag.getBoundingClientRect().top - margin;
        // console.log(tag.getBoundingClientRect().top, window.scrollY, absoluteTop);
        return {
          absoluteTop: Math.round(absoluteTop),
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

const pickPostEndLine = () => {
  return Array.from(document.getElementsByTagName('hr')).map((tag) => {
    return window.scrollY + tag.getBoundingClientRect().top - 120;
  })[0];
};

const findLocation = (y, sectionGroups, postEndLine) => {
  if (y > postEndLine) {
    return -1;
  }

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

const activeSection = (y, sectionGroups, postEndLine) => {
  const location = findLocation(y, sectionGroups, postEndLine);

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
  const postEndLine = ref();

  const ticking = ref(false);

  const y = ref(0);

  const update = () => {
    y.value = window.scrollY;

    if (!ticking.value) {
      requestAnimationFrame(() => {
        mainSection.value.active = false;
        subSection.value.active = false;
        mainSection.value = activeSection(y.value, sectionGroups.value, postEndLine.value);

        if (mainSection.value.sub.length > 0) {
          subSection.value = activeSection(y.value, mainSection.value.sub, postEndLine.value);
        }

        ticking.value = false;
      });
      ticking.value = true;
    }
  };
  
  onMounted(() => {
    setTimeout(() => {
      sectionGroups.value = groupSections(pickSections());
      postEndLine.value = pickPostEndLine();
      window.addEventListener('scroll', update, { passive: true });
    }, 1000)

    console.log('onMounted');
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', update);
  });

  return {
    sectionGroups,
  };
}

export default useTableOfContentsV3;
