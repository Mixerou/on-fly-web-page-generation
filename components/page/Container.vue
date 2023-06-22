<script setup lang="ts">
const props = defineProps({
  width: {
    type: [String, Number],
    required: false,
    default: 0,
    validator(value: unknown): boolean {
      return useCssUnitValidator(value)
    },
  },
  height: {
    type: [String, Number],
    required: false,
    default: 0,
    validator(value: unknown): boolean {
      return useCssUnitValidator(value)
    },
  },
})

const parsedWidth = computed(() => useCssUnitParser(props.width))
const parsedHeight = computed(() => useCssUnitParser(props.height))
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: v-bind(parsedWidth);
  height: v-bind(parsedHeight);
}
</style>
