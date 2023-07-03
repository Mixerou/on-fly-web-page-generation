<script setup lang="ts">
type Fragment = {
  name: string
  attributes: any
  classes: string[]
  children: Fragment[]
}

defineProps({
  fragments: {
    type: Array as PropType<Fragment[]>,
    required: true,
  },
})

const convertStringToBoolean = (value: string): boolean => {
  return value === 'true'
}

const tryParseInt = (value: string): string | number => {
  try {
    return parseInt(value)
  } catch (_) {
    return value
  }
}
</script>

<template>
  <client-only
    v-for="(fragment, index) in fragments"
    :key="`builder-fragment-${index}`"
  >
    <PageContainer
      v-if="fragment.name === 'container'"
      :width="tryParseInt(fragment.attributes.width)"
      :height="tryParseInt(fragment.attributes.height)"
    >
      <PageBuilder :fragments="fragment.children" />
    </PageContainer>

    <PageFlex
      v-else-if="fragment.name === 'flex'"
      :direction="fragment.attributes.direction"
      :justify-content="fragment.attributes['justify-content']"
      :align-items="fragment.attributes['align-items']"
      :gap="fragment.attributes.gap"
      :expanded="convertStringToBoolean(fragment.attributes.expanded)"
    >
      <PageBuilder :fragments="fragment.children" />
    </PageFlex>

    <!-- Heading -->
    <PageHeading v-else-if="fragment.name === 'h1'" :level="1">
      <PageBuilder :fragments="fragment.children" />
    </PageHeading>
    <PageHeading v-else-if="fragment.name === 'h2'" :level="2">
      <PageBuilder :fragments="fragment.children" />
    </PageHeading>
    <PageHeading v-else-if="fragment.name === 'h3'" :level="3">
      <PageBuilder :fragments="fragment.children" />
    </PageHeading>
    <PageHeading v-else-if="fragment.name === 'h4'" :level="4">
      <PageBuilder :fragments="fragment.children" />
    </PageHeading>
    <PageHeading v-else-if="fragment.name === 'h5'" :level="5">
      <PageBuilder :fragments="fragment.children" />
    </PageHeading>
    <PageHeading v-else-if="fragment.name === 'h6'" :level="6">
      <PageBuilder :fragments="fragment.children" />
    </PageHeading>

    <PageLink
      v-else-if="fragment.name === 'link'"
      :to="fragment.attributes.to"
      :target="fragment.attributes.target"
    >
      <PageBuilder :fragments="fragment.children" />
    </PageLink>

    <PageText
      v-else-if="fragment.name === 'text'"
      :dimmed="convertStringToBoolean(fragment.attributes.dimmed)"
    >
      <PageBuilder :fragments="fragment.children" />
    </PageText>

    <client-only v-else>{{ fragment }}</client-only>
  </client-only>
</template>

<style scoped lang="scss"></style>
