export default defineAppConfig({
  category: {
    home: 'home',
    note: 'note',
    projects: 'projects',
  },

  postNavigation: {
    previous: {
      direction: 'previous',
      text: '이전 포스트',
    },

    next: {
      direction: 'next',
      text: '다음 포스트',
    },
  },

  ui: {
    main: {
      postCard: {
        height:
          'min-h-[116px] max-h-[116px] xs:min-h-[136px] xs:max-h-[136px] sm:min-h-[136px] sm:max-h-[136px] md:min-h-[150px] md:max-h-[150px]',
      },
      introduction: {
        height: 'h-[calc(100vh-282px)] xs:h-[calc(100vh-304px)] md:h-[calc(100vh-318px)]',
      },
    },

    header: {
      icon: 'mingcute:menu-line',
    },

    prose: {
      h1: 'prose-h1:mt-1 prose-h1:text-[1.7rem] prose-h1:xs:text-[2.2rem] prose-h1:break-keep',
      p: 'prose-p:text-[0.9rem] prose-p:xs:text-[1rem]',
      li: 'prose-li:text-[0.9rem] prose-li:xs:text-[1rem]',
      pre: 'prose-pre:text-[0.75rem] prose-pre:xs:text-[0.875rem] prose-pre:bg-slate-800',
      h2: 'prose-h2:scroll-mt-[6.3rem] prose-h2:text-[1.2rem] prose-h2:md:text-[1.5rem]',
      h3: 'prose-h3:scroll-mt-[6.4rem] prose-h3:text-[1.1rem] prose-h3:md:text-[1.25rem]',
      code: 'prose-code:break-words',
    },

    nav: {
      link: {
        default: 'text-slate-600 hover:text-emerald-500',
        active: 'text-emerald-600',
      },
    },
  },
});
