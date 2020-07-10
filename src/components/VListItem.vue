<template>
  <div
    :class="classes"
    class="flex flex-row items-center justify-between w-full p-3"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classes: {
        "bg-black bg-opacity-0 hover:bg-opacity-10": this.hover,
      },
    };
  },
};
</script>
