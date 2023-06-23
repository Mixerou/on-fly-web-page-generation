<script setup lang="ts"></script>

<template>
  <div id="default-layout">
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#default-layout {
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    height: 100%;
  }
}
</style>
