export default defineAppConfig({
  ui: {
    main: {
      container: 'mx-auto max-w-7xl px-6 sm:px-4 lg:px-8',
      postCard: {
        height:
          'min-h-[140px] max-h-[140px] xs:min-h-[160px] xs:max-h-[160px] sm:min-h-[160px] sm:max-h-[160px] md:min-h-[174px] md:max-h-[174px]',
      },
      introduction: {
        height:
          'h-[calc(100vh-282px)] xs:h-[calc(100vh-304px)] md:h-[calc(100vh-318px)] lg:h-[calc(100vh-334px)]',
      },
    },

    header: {
      container: {
        height: 'xs:h-16 lg:h-20 min-h-14 max-h-20',
        width: 'w-full max-w-7xl',
        padding: 'px-6 sm:px-4 lg:px-8',
      },
      icon: 'mingcute:menu-line',
    },

    footer: {
      container: 'mt-8 h-10 border-t-[1px] border-t-gray-300',
    },
  },
});
