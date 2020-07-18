<template>
  <div class="flex flex-col items-center pt-24 font-medium text-center wrapper">
    <div class="w-10/12">
      <font-awesome
        class="opacity-50"
        size="10x"
        :icon="['far', 'check-circle']"
      />
      <h1 class="mt-4 text-4xl font-medium leading-none opacity-50 md:text-5xl">
        Payment Succeeded
      </h1>
      <p class="my-4 text-sm tracking-wide opacity-50 md:text-lg">
        We'll prepare your order as soon as possible, in the meantime, an email
        receipt will be emailed directly to you!
      </p>
      <p class="mt-4 text-sm tracking-wide md:text-lg">
        <span class="opacity-50">
          Feel free to head back to
        </span>
        <g-link :to="'/'">99medispa.com.au</g-link>
        <span class="opacity-50">
          to browse our other products and services!
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Payment Successful",
    meta: [
      {
        name: "description",
        key: "description",
        content: "Stripe Checkout Payment Succeeded",
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
