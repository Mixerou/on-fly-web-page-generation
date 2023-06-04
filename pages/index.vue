<script setup lang="ts">
import { greet } from 'on-the-fly-web-page-generation-lib'

console.log(greet('World'))
</script>

<template>
  <div class="content">
    <h1>Home page</h1>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  @include dvh(height, 100);
}
</style>
