const pickAllText = (children) => {
  return children
    .map((child) => {
      if (child.type === 'text') {
        return child.value;
      }
      return pickAllText(child.children);
    })
    .join('');
};

const mapSections = (sections) => {
  return sections.map(({ props, children, tag }, index) => {
    return { index, tag, id: props.id, text: pickAllText(children), sub: [], active: false };
  });
};

const groupSections = (sections) => {
  return sections.reduce((group, section) => {
    if (section.tag === 'h3') {
      group.push(section);
    } else if (section.tag === 'h4') {
      const lastGroup = group.pop();
      lastGroup.sub.push(section);
      group.push(lastGroup);
    }
    return group;
  }, []);
};

function useTableOfContents(sections) {
  const sectionGroups = ref([]);
  const currentSection = ref(0);

  sectionGroups.value = groupSections(mapSections(sections));

  const activeSectionGroup = (group) => {
    const target = sectionGroups.value.find((sectionGroup) => sectionGroup.id === group);
    currentSection.value = target;
    target.active = true;
  };

  const activeSection = (group, id) => {
    currentSection.value.active = false;
    currentSection.value = sectionGroups.value
      .find((sectionGroup) => sectionGroup.id === group)
      .sub.find((section) => section.id === id);
    currentSection.value.active = true;
  };

  const unActiveSectionGroup = (group) => {
    const target = sectionGroups.value.find((sectionGroup) => sectionGroup.id === group);
    currentSection.value.active = false;
    target.active = false;
  };

  const isTarget = () => {
    return currentSection.value !== 0;
  };

  const start = (id) => {
    if (!id) return;

    const check = sectionGroups.value.filter((group) => group.id === id);
    if (check.length > 0) {
      activeSectionGroup(id);
    } else {
      const group = sectionGroups.value
        .filter((group) => group.sub.length > 0)
        .find((group) => group.sub.find((section) => section.id === id));
      activeSection(group.id, id);
    }
  };

  const activeTest2 = (group) => {
    const target = sectionGroups.value.find((sectionGroup) => sectionGroup.id === group);
    // console.log(target);
    // console.log(group, target.active);

    target.active = true;
    if (currentSection.value !== 0) {
      currentSection.value.active = false;
    }
    currentSection.value = target;
  };

  return {
    sectionGroups,
    activeSectionGroup,
    activeSection,
    start,
    unActiveSectionGroup,
    isTarget,
    activeTest2,
  };
}

export default useTableOfContents;
