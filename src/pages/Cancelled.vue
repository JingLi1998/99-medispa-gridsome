<template>
  <div class="flex flex-col items-center pt-24 font-medium text-center wrapper">
    <div class="w-10/12">
      <font-awesome
        class="opacity-50"
        size="10x"
        :icon="['far', 'times-circle']"
      />
      <h1 class="mt-4 text-4xl font-medium leading-none opacity-50 md:text-5xl">
        Checkout Cancelled
      </h1>
      <p class="my-4 text-sm tracking-wide opacity-50 md:text-lg">
        You have cancelled your purchase. Your card was not charged.
      </p>
      <p class="mt-4 text-sm tracking-wide md:text-lg">
        <span class="opacity-50">
          Made a mistake? Head back to
        </span>
        <g-link :to="'/'">99medispa.com.au</g-link>
        <span class="opacity-50">
          to try purchasing again!
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Checkout Cancelled",
    meta: [
      {
        name: "description",
        key: "description",
        content: "Stripe Checkout Payment Cancelled",
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
