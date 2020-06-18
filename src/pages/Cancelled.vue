<template>
  <div
    class="flex flex-col w-10/12 h-auto pt-24 pb-10 mx-auto font-medium text-center md:pb-40 md:h-screen md:pt-40"
  >
    <div class="my-auto">
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
