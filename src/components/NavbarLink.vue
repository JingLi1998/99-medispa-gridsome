<template>
  <g-link
    class="inline-block text-xs font-medium tracking-widest uppercase"
    active-class="border-b border-black"
    :to="to"
    :exact="exact"
    :event="disabled ? '' : 'click'"
    :class="{ 'cursor-default': disabled, 'mr-10': !dropdown }"
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
  position: relative;
  color: #000;
  text-decoration: none;
}

a:hover {
  color: #000;
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -1px;
  left: 0;
  background-color: #000;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
</style>
