<script setup lang="ts">
defineOptions({
  name: 'WelcomePage'
})
import { DocumentAdd, SetUp, DataLine } from '@element-plus/icons-vue'
</script>

<template>
  <el-steps :space="200" :active="4" simple>
    <el-step title="数据源" :icon="DocumentAdd" />
    <el-step title="数据视图" :icon="SetUp" />
    <el-step title="可视化" :icon="DataLine" />
  </el-steps>
</template>
