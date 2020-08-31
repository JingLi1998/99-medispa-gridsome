<template>
  <div class="flex flex-col items-center pt-24 font-medium text-center wrapper">
    <div class="w-10/12">
      <font-awesome class="opacity-50" size="10x" :icon="['far', 'frown']" />
      <h1 class="mt-4 font-medium leading-none opacity-50 text-8xl">
        404
      </h1>
      <p class="my-4 text-3xl opacity-50">Page Not Found</p>
      <p class="my-4 text-sm tracking-wide opacity-50 md:text-lg">
        The page you were looking for either does not exist or an unknown error
        occured.
      </p>
      <p class="mt-4 text-sm tracking-wide md:text-lg">
        <span class="opacity-50">
          Feel free to head back to
        </span>
        <g-link :to="'/'">99medispa.com.au</g-link>
        <span class="opacity-50">
          to choose a new page to visit!
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Page Not Found",
    meta: [
      {
        name: "description",
        key: "description",
        content: "404 Page not found",
      },
    ],
  },
};
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 4.5rem);
  margin-top: 4.5rem;
}

@media (min-width: 768px) {
  .wrapper {
    min-height: calc(100vh - 8.5rem);
    margin-top: 8.5rem;
  }
}
</style>
