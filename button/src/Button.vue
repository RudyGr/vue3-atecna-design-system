<template>
  <button
    @click="$emit('click')"
    :class="[$style.btn, $style[variant], rounded ? $style.rounded : '']"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ButtonType } from './types';

const props = defineProps({
  name: { type: String, default: 'John Doe' },
  variant: { type: String as PropType<ButtonType>, default: 'primary' },
  rounded: { type: Boolean, default: true },
});

const emits = defineEmits({
  click: null,
});
</script>

<style lang="scss" module scoped>
@tailwind base;
@tailwind utilities;

.btn {
  @apply text-lg leading-6 py-4 px-6;
}

.rounded {
  @apply rounded-lg;
}
.primary {
  @apply text-white bg-actions-default hover:bg-actions-darker focus-visible:bg-actions-default hover:shadow-primary;
}
.secondary {
  @apply text-actions-default border border-actions-default hover:shadow-primary;
}
.minimal {
  @apply text-actions-default hover:bg-actions-primary focus-visible:bg-transparent;
}
</style>
