import { defineStore } from 'pinia'

export const useGlobalState = defineStore('state', {
  state: () => {
    return { isSidebarOpen: false }
  },
  actions: {
    changeSidebarState() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
  },
})