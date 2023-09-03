<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getSources } from '@/api/sources'

defineOptions({
  name: 'SourceList'
}) // 定义组件名称

const route = useRoute() // 获取路由信息
const orgId = route.params.orgId // 获取路由参数

const tableData = ref([]) // 表格数据
const getTableData = async () => {
  try {
    const res = await getSources({ orgId })
    tableData.value = res.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getTableData()
})
</script>

<template>
  <div>
    <el-table :data="tableData" border stripe>
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="id" label="详情">
        <template #default="{ row }">
          <router-link :to="`/org/${orgId}/source/${row.id}`">详情</router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
