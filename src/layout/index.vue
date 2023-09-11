<script setup lang="ts">
defineOptions({
  name: 'LayoutIndex'
})
import { useRoute } from 'vue-router'
import { useOrgStore } from '@/stores/org'
import { onMounted } from 'vue'

const route = useRoute()
const orgId = route.params.orgId as string

const orgStore = useOrgStore()

onMounted(() => {
  orgStore.getOrgs()
  if (orgId) {
    orgStore.setCurrentOrgId(orgId)
  }
})

const menus = [
  {
    name: '数据源',
    index: `/org/${orgStore.currentOrgId}/sources`
  }
]
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <el-menu router>
        <el-menu-item v-for="menu in menus" :key="menu.name" :index="menu.index">
          {{ menu.name }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
