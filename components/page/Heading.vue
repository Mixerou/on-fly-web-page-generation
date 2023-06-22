<script setup lang="ts">
defineProps({
  level: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
    required: false,
    default: 1,
  },
})
</script>

<template>
  <Component :is="`h${level}`">
    <slot />
  </Component>
</template>

<style scoped lang="scss"></style>
