import { defineStore } from 'pinia'
import { getOrgs } from '@/api/org'

interface Org {
  id: string
  name: string
}

export const useOrgStore = defineStore('org', {
  state: () => ({
    list: [] as Org[],
    currentOrgId: ''
  }),
  getters: {
    currentOrg: (state) => {
      return state.list.find((org) => org.id === state.currentOrgId)
    }
  },
  actions: {
    async getOrgs() {
      const { data } = await getOrgs()
      this.setOrgs(data)
    },
    setOrgs(orgs: Org[]) {
      this.list = orgs
    },
    setCurrentOrgId(id: string) {
      this.currentOrgId = id
    }
  }
})
