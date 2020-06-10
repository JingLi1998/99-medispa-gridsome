<template>
  <section class="py-10 bg-pink-100 xl:py-24">
    <div class="w-10/12 mx-auto mb-10 lg:mb-16 sm:w-8/12 lg:w-7/12 xl:w-6/12">
      <h1
        class="text-4xl font-medium font-fancy xl:text-center text-secondary md:text-5xl lg:text-6xl"
      >
        Free Consultation
      </h1>
      <p class="text-sm font-light md:text-base lg:text-lg xl:text-xl">
        All customers receive a complimentary consultation with our experienced
        professionals. This allows us to best align the most suitable treatments
        with your personal goals and unique skin and body situation. Book a free
        consultation today and help us help you begin your journey towards
        better health, wellbeing and beauty.
      </p>
    </div>
    <div
      class="flex flex-col justify-center w-10/12 p-3 mx-auto leading-tight text-white bg-grey sm:p-4 sm:flex-row md:py-10 sm:w-8/12"
    >
      <h1
        class="py-1 mx-auto mb-4 text-xl font-medium text-center sm:mb-0 md:text-2xl lg:text-4xl"
      >
        For Bookings and Enquiries
      </h1>
      <g-link
        class="w-auto px-5 py-1 mx-auto text-xl font-medium text-center border-2 border-white rounded md:text-2xl lg:text-4xl"
        :to="'contact'"
      >
        Contact Us
      </g-link>
    </div>
  </section>
</template>
