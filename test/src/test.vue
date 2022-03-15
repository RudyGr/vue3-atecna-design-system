<template>
  <button :class="variant"><slot></slot></button>
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, default: 'John Doe' },
  variant: { type: String, default: 'primary' },
});
</script>

<style lang="scss" scoped>
button {
  padding: var(--vue-spacing-00) var(--vue-spacing-2);
  border-radius: var(--vue-border-radius-pill);
  border: 1px solid var(--vue-color-border);
  font-family: var(--vue-font-family);
  font-size: var(--vue-font-size-00);
  font-weight: var(--vue-font-weight-button);
  letter-spacing: var(--vue-letter-spacing-button);
  text-transform: uppercase;

  &.primary {
    background-color: var(--vue-color-primary);
    color: var(--vue-color-text-on-primary);
  }

  &.secondary {
    background-color: var(--vue-color-secondary);
    color: var(--vue-color-text-on-secondary);
  }

  &.disabled,
  &:disabled {
    background-color: transparent;
    pointer-events: none;
    filter: brightness(50%);
  }

  &:hover {
    color: var(--vue-color-text-on-primary);
    filter: brightness(1.1);
  }
}
</style>
