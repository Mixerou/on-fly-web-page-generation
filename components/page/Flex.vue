<script setup lang="ts">
const props = defineProps({
  direction: {
    type: String as PropType<'row' | 'column'>,
    required: false,
    default: 'row',
  },
  justifyContent: {
    type: String as PropType<
      | 'center'
      | 'start'
      | 'end'
      | 'flex-start'
      | 'flex-end'
      | 'left'
      | 'right'
      | 'normal'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | 'stretch'
      | 'safe center'
      | 'unsafe center'
    >,
    required: false,
    default: 'start',
  },
  alignItems: {
    type: String as PropType<
      | 'normal'
      | 'stretch'
      | 'center'
      | 'start'
      | 'end'
      | 'flex-start'
      | 'flex-end'
      | 'self-start'
      | 'self-end'
      | 'baseline'
      | 'first baseline'
      | 'last baseline'
      | 'safe center'
      | 'unsafe center'
    >,
    required: false,
    default: 'start',
  },
  gap: {
    type: [String, Number],
    required: false,
    default: 0,
    validator(value: unknown): boolean {
      return useCssUnitValidator(value)
    },
  },
  expanded: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const parsedGap = computed(() => useCssUnitParser(props.gap))
const width = computed(() =>
  props.expanded && props.direction === 'row' ? '100%' : 'initial'
)
const height = computed(() =>
  props.expanded && props.direction === 'column' ? '100%' : 'initial'
)
</script>

<template>
  <div class="flex">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  flex-direction: v-bind(direction);
  justify-content: v-bind(justifyContent);
  align-items: v-bind(alignItems);
  gap: v-bind(parsedGap);
  width: v-bind(width);
  height: v-bind(height);
}
</style>
