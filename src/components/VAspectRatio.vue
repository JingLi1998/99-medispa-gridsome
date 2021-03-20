<template>
  <div>
    <div :class="classes" class="wrapper">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: String,
      default: "full",
    },
  },
  computed: {
    classes() {
      const output = [];
      if (this.ratio === "full") output.push("pb-full xl:pb-7/10");
      if (this.ratio === "wide") output.push("pb-wide");
      return output.join(" ");
    },
  },
};
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply relative;
}

.content {
  @apply absolute inset-0;
}
</style>
