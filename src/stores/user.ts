import { defineStore } from 'pinia'

interface Org {
  id: string
  name: string
}

interface State {
  orgList: Org[]
  currentIndex: number
}

export const useOrgStore = defineStore('org', {
  state: () => ({
    list: [],
    currentIndex: 0
  }),
  getters: {
    currentOrg: (state) => {
      return state.list[state.currentIndex]
    },
    currentOrgId: (state) => {
      return state.list[state.currentIndex].id
    }
  }
})
