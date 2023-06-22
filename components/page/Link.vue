<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  target: {
    type: String as PropType<'_self' | '_blank' | '_parent' | '_top'>,
    required: false,
    default: '_self',
  },
})
</script>

<template>
  <a
    v-if="to?.includes('://') || target !== '_self'"
    :href="to"
    :target="target"
  >
    <slot />
  </a>
  <NuxtLink v-else :to="to">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  font-size: var(--default-font-size);
  font-weight: 500;
  text-decoration: none;
  color: var(--blue-400);
  transition: var(--fast-transition-duration);

  &:hover {
    color: var(--blue-500);
  }

  &:active {
    color: var(--blue-300);
  }
}
</style>
