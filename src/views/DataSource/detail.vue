<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getSourceDetail } from '@/api/sources'

defineOptions({
  name: 'SourceDetail'
}) // 定义组件名称

const route = useRoute() // 获取路由信息
const sourceId = route.params.sourceId as string // 获取路由参数

const detailData = ref({}) // 详情数据
const getDetailData = async () => {
  try {
    const res = await getSourceDetail(sourceId)
    detailData.value = res.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getDetailData()
})
</script>

<template>
  <div>detail</div>
</template>
