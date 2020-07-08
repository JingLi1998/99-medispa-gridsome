<template>
  <div class="dropdown">
    <slot name="link" />
    <div class="dropdown-content">
      <slot name="dropdown" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown {
  @apply relative inline-block;
}

.dropdown-content {
  @apply absolute ml-8 overflow-hidden bg-white max-h-0 w-48;
  transition: max-height 0.75s ease-in-out;
  left: -1rem;
  top: 4rem;
}
.dropdown:hover .dropdown-content {
  @apply max-h-screen block;
}
</style>
