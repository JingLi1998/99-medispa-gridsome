<template>
  <div class="relative inline-block dropdown">
    <slot name="link" />
    <div
      class="absolute ml-12 overflow-hidden bg-white max-h-0 dropdown-content"
    >
      <slot name="dropdown" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown-content {
  transition: max-height 0.75s ease-in-out;
  left: -1rem;
  top: 4rem;
  width: 12rem;
}
.dropdown:hover .dropdown-content {
  max-height: 100vh;
  display: block;
}
</style>
