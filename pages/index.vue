<script setup lang="ts">
import { convertPugToJson } from 'on-the-fly-web-page-generation-lib'

const json = JSON.parse(convertPugToJson('h1 Home page'))
</script>

<template>
  <PageFlex direction="column" justify-content="center" expanded>
    <Component :is="json.children[0].name">
      {{ json.children[0].children[0] }}
    </Component>
  </PageFlex>
</template>

<style scoped lang="scss"></style>
