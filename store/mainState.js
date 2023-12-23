import { defineStore } from 'pinia';

export const useMainStateStore = defineStore('mainState', {
  state: () => ({
    defaultLayoutIdx: 0,
    modalCheck: false,
  }),
});
