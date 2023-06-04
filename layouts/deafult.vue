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

  .layout-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
  }
}
</style>
