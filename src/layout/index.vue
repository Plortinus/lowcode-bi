<script setup lang="ts">
defineOptions({
  name: 'LayoutIndex'
})
import { useOrgStore } from '@/stores/org'
const orgStore = useOrgStore()

orgStore.getOrgs()

const orgId = orgStore.currentOrgId

const menus = [
  {
    name: '数据源',
    index: `/org/${orgId}/sources`
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
