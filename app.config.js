export default defineAppConfig({
  ui: {
    main: {
      postCard: {
        height:
          'min-h-[140px] max-h-[140px] xs:min-h-[160px] xs:max-h-[160px] sm:min-h-[160px] sm:max-h-[160px] md:min-h-[174px] md:max-h-[174px]',
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
      pre: 'prose-pre:text-[0.75rem] prose-pre:xs:text-[0.875rem]',
    },

    nav: {
      link: {
        default: 'text-slate-600 hover:text-emerald-500',
        active: 'text-emerald-600',
      },
    },
  },
});
