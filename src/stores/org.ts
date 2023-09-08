import { defineStore } from 'pinia'
import { getOrgs } from '@/api/org'

interface Org {
  id: string
  name: string
}

export const useOrgStore = defineStore('org', {
  state: () => ({
    list: [] as Org[],
    currentIndex: 0
  }),
  getters: {
    currentOrg: (state) => {
      return state.list[state.currentIndex]
    },
    currentOrgId: (state) => {
      return state.list[state.currentIndex]?.id
    }
  },
  actions: {
    async getOrgs() {
      const { data } = await getOrgs()
      this.setOrgs(data)
      this.setCurrentIndex(0)
    },
    setOrgs(orgs: Org[]) {
      this.list = orgs
    },
    setCurrentIndex(index: number) {
      this.currentIndex = index
    }
  }
})
