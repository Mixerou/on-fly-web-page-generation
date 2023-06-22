<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true,
  },
})

onUnmounted(() => clearError({}))
</script>

<template>
  <PageFlex
    direction="column"
    justify-content="center"
    align-items="center"
    :gap="1"
    expanded
  >
    <PageHeading>Page Not Found</PageHeading>
    <PageLink to="/">Go back</PageLink>
  </PageFlex>
</template>

<style scoped lang="scss"></style>
