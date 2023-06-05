<script setup lang="ts">
import { convert_pug_to_json } from 'on-the-fly-web-page-generation-lib'

const json = JSON.parse(convert_pug_to_json('h1 Home page'))
</script>

<template>
  <div class="content">
    <Component :is="json.children[0].name">
      {{ json.children[0].children[0] }}
    </Component>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  @include dvh(height, 100);
}
</style>
