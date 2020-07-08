<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    cols: {
      type: Number,
      required: true,
    },
    sm: {
      type: Number,
      default: null,
    },
    md: {
      type: Number,
      default: null,
    },
    lg: {
      type: Number,
      default: null,
    },
    xl: {
      type: Number,
      default: null,
    },
    xl2: {
      type: Number,
      default: null,
    },
  },
  computed: {
    classes() {
      const output = [];
      if (this.cols)
        output.push(
          `w-${this.cols < 12 ? this.cols.toString() + "/12" : "full"}`
        );
      if (this.sm)
        output.push(`
          sm:w-${this.sm < 12 ? this.sm.toString() + "/12" : "full"}
      
      `);
      if (this.md)
        output.push(`
         md:w-${this.md < 12 ? this.md.toString() + "/12" : "full"}
      
      `);
      if (this.lg)
        output.push(`
          lg:w-${this.lg < 12 ? this.lg.toString() + "/12" : "full"}
      
      `);
      if (this.xl)
        output.push(`
         xl:w-${this.xl < 12 ? this.xl.toString() + "/12" : "full"}
      
      `);
      if (this.xl2)
        output.push(`
         2xl:w-${this.xl2 < 12 ? this.xl2.toString() + "/12" : "full"}
      
      `);
      return output.join(" ");
    },
  },
};
</script>
