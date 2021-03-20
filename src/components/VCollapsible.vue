<template>
  <div :class="{ extended }" class="collapsible">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    extended: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.collapsible {
  transition: max-height 0.75s ease-in-out;
  &.extended {
    max-height: 100vh;
  }
}

.collapsible {
  @apply block;
  @apply w-full;
  @apply overflow-hidden;
  @apply max-h-0;
  transition: max-height 0.75s ease-in-out;
}

.collapsible.extended {
  max-height: 100vh;
}

@media (min-width: 768px) {
  .collapsible {
    @apply hidden;
  }
}
</style>
