<script setup lang="ts">
defineOptions({
  name: 'LayoutWrapper'
})
const menus = [
  {
    name: '数据源'
  }
]
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <el-menu>
        <el-menu-item index="1">数据源</el-menu-item>
        <el-menu-item index="2">数据视图</el-menu-item>
        <el-menu-item index="3">可视化</el-menu-item>
        <el-menu-item index="4">定时任务</el-menu-item>
        <el-menu-item index="5">成员与角色</el-menu-item>
        <el-menu-item index="6">权限</el-menu-item>
        <el-menu-item index="7">设置</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
