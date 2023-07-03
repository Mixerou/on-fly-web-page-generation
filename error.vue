<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true,
  },
})

useHead({
  title: 'Error',
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
    <PageHeading v-if="error.statusCode === 404">Page Not Found</PageHeading>
    <PageHeading v-else>{{ error.statusCode }}</PageHeading>
    <PageText v-if="error.statusCode !== 404">
      {{ error.statusMessage }}
    </PageText>
    <PageLink to="/">Go back</PageLink>
  </PageFlex>
</template>

<style scoped lang="scss"></style>
