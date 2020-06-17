<template>
  <div class="flex flex-col h-screen pb-10 font-medium text-center">
    <div class="my-auto">
      <font-awesome
        class="opacity-50 text-8xl"
        size="10x"
        :icon="['far', 'frown']"
      />
      <h1 class="font-medium opacity-50 text-8xl">404 :(</h1>
      <p class="mb-8 text-3xl opacity-50">Page Not Found</p>
      <p class="text-xl tracking-wide opacity-50">
        The page you were looking for either does not exist or an unknown error
        occured.
      </p>
      <p class="mt-4 text-xl tracking-wide">
        <span class="opacity-50">
          Feel free to head back to
        </span>
        <g-link :to="'/'">99medispa.com.au</g-link>
        <span class="opacity-50"> to choose a new page to visit!</span>
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
