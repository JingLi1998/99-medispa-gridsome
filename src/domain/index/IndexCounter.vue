<template>
  <section id="counter" class="px-4 pt-10 text-white bg-black lg:pt-16">
    <div class="grid grid-cols-1 row-gap-10 text-center md:grid-cols-3">
      <div>
        <p class="text-4xl font-semibold sm:text-5xl">
          {{ targets[0].current }}+
        </p>
        <p class="text-xl sm:text-2xl">Years of Experience</p>
      </div>
      <div>
        <p class="text-4xl font-semibold sm:text-5xl">
          {{ targets[1].current }}
        </p>
        <p class="text-xl sm:text-2xl">VIP Clients*</p>
      </div>
      <div>
        <p class="text-4xl font-semibold sm:text-5xl">
          {{ targets[2].current }}
        </p>
        <p class="mx-12 text-xl sm:mx-2 sm:text-2xl">
          FDA/TGA Approved Machines
        </p>
      </div>
    </div>

    <div class="pt-10 pb-4">
      <p class="text-xs text-center xl:text-sm font-fancy">
        * Contact us to find out more about our special VIP membership plan
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      speed: 300,
      targets: [
        {
          current: 0,
          target: 20,
          interval: 50,
        },
        {
          current: 0,
          target: 2369,
          interval: 1,
        },
        {
          current: 0,
          target: 15,
          interval: 60,
        },
      ],
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) this.startCounter();
      },
      { threshold: [0.3] }
    );
    this.observer.observe(document.querySelector("#counter"));
  },
  methods: {
    startCounter() {
      this.targets.forEach((target) => {
        const updateCount = () => {
          const inc = Math.ceil(target.target / this.speed);

          // Check if target is reached
          if (target.current < target.target) {
            // Add inc to count and output in counter
            target.current += inc;
            // Call function every ms
            setTimeout(updateCount, target.interval);
          } else {
            target.current = target.target;
          }
        };
        updateCount();
      });
    },
  },
};
</script>
