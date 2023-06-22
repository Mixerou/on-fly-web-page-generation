<script setup lang="ts">
defineProps({
  dimmed: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <p :class="{ dimmed }">
    <slot />
  </p>
</template>

<style scoped lang="scss">
p {
  font-size: var(--default-font-size);
  font-weight: 500;
  color: var(--neutral-900);
  transition: var(--fast-transition-duration);

  &.dimmed {
    color: var(--neutral-500);
  }
}
</style>
