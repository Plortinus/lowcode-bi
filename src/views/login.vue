<script setup lang="ts">
defineOptions({
  name: 'LoginPage'
})

import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import { FormItem, Submit, Input } from '@formily/element-plus'

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    password: {
      type: 'string',
      title: '密码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}

const login = (values: any) => {
  console.log(values)
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
