<template>
  <g-link
    active-class="active"
    :to="to"
    :exact="exact"
    :event="disabled ? '' : 'click'"
    :class="{ 'cursor-default': disabled, 'ml-3': !dropdown }"
  >
    {{ name }}
  </g-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
    exact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  @apply inline-block text-xs font-medium tracking-normal uppercase relative text-black no-underline;

  &.active {
    @apply border-b border-black;
  }

  &::before {
    @apply absolute w-full left-0 bg-black invisible;
    content: "";
    height: 1px;
    bottom: -1px;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    @apply visible;
    transform: scaleX(1);
  }
}
</style>
