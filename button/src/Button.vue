<template>
  <button :class="[$style.btn, $style[variant]]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ButtonType } from './types';

const props = defineProps({
  name: { type: String, default: 'John Doe' },
  variant: { type: String as PropType<ButtonType>, default: 'primary' },
});
</script>

<style lang="scss" module scoped>
@tailwind base;
@tailwind utilities;

.btn {
  @apply text-lg leading-6 rounded-lg py-4 px-6;
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
