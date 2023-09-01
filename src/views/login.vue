<script setup lang="ts">
defineOptions({
  name: 'LoginPage'
})

import { useRouter } from 'vue-router'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import { FormItem, Submit, Input } from '@formily/element-plus'
import { getLogin } from '@/api/user'

const router = useRouter()

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input
  }
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      default: 'demo',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: '请输入用户名'
      }
    },
    password: {
      type: 'string',
      title: '密码',
      required: true,
      default: '123456',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: '请输入密码',
        type: 'password'
      }
    }
  }
}

const login = async (values: object) => {
  try {
    const res = await getLogin(values)
    if (res.data.errCode === 0) {
      router.push('/home')
    }
  } catch (error) {
    console.log('error: ', error)
  }
}
</script>

<template>
  <div>
    <FormProvider :form="form">
      <SchemaField :schema="schema" />
      <Submit @submit="login">登录</Submit>
    </FormProvider>
  </div>
</template>
