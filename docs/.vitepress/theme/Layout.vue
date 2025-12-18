<template>
  <DefaultLayout>
    <template #layout-top>
      <slot name="layout-top" />
    </template>
    <template #layout-bottom>
      <slot name="layout-bottom" />
      <Analytics />
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { Analytics } from '@vercel/analytics'

const DefaultLayout = DefaultTheme.Layout
</script>

