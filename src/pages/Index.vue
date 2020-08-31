<script>
import Slideshow from "../domain/Slideshow";
import VResponsive from "../components/VResponsive";
import VAspectRatio from "../components/VAspectRatio";

export default {
  metaInfo: {
    title: "99 Medispa",
    titleTemplate: "%s | Cosmetic Laser Treatment Clinic Australia",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "With over 20 years of experience as a Laser Clinic in Australia, we at 99 Medispa take pride in providing our customers with a range of non-invasive cosmetic treatments. We use only TGA and FDA approved technologies including Picosure, Fotona, Ultherapy, Endymed, AquaPure, Coolsculpting and many more. ",
      },
    ],

    script: [
      {
        src: "https://cdn.lightwidget.com/widgets/lightwidget.js",
        defer: true,
      },
      {
        type: "application/ld+json",
        json: {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          name: "99 Medispa",
          image:
            "https://d33wubrfki0l68.cloudfront.net/dcb286b8bfa9f1b1a06a454157eec8d0bd158b9b/f9b04/images/logo_small.jpg",
          telephone: "0452 008 115",
          email: "99medispa.sydney@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1304, 99 York St",
            addressLocality: "Sydney",
            addressRegion: "NSW",
            postalCode: "2000",
          },
        },
      },
    ],
  },
  components: {
    Slideshow,
    VAspectRatio,
    VResponsive,
  },
  data() {
    return {
      src: null,
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
    setTimeout(() => {
      this.src = "https://www.youtube.com/embed/kL8Bwz63zBo";
    }, 1000);
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

<template>
  <div>
    <slideshow />
    <section class="bg-white">
      <v-responsive :cols="10" :sm="8" :md="7" :lg="6">
        <h2>Pioneers in Non-invasive Laser Treatments</h2>
        <p>
          Here at 99 medispa, our cosmetic doctors have perfected the art of
          non-surgical cosmetic treatments. For over 18 years we have used the
          most advanced, state of the art TGA and FDA approved technologies to
          provide our customers with face and body enhancements.
        </p>
        <p>
          Our unique success lies within our deep understanding of the
          underlying scientific foundations of each treatment, allowing us to
          align the best selection of treatments to your unique skin type. We
          place immense value on the client-doctor relationship and will always
          strive to bring you the ultimate in anti-aging, body slimming and skin
          rejuvenation services.
        </p>
      </v-responsive>
    </section>
    <section class="bg-pink-100">
      <v-responsive :cols="10" :sm="8" :md="7" :lg="6" :xl="5">
        <v-aspect-ratio ratio="wide">
          <iframe
            frameborder="0"
            class="w-full h-full"
            :src="src"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-aspect-ratio>
      </v-responsive>
    </section>
    <section id="counter" class="text-white bg-black">
      <div class="grid grid-cols-1 row-gap-10 text-center md:grid-cols-3">
        <div>
          <span class="target">{{ targets[0].current }}+</span>
          <span>Years of Experience</span>
        </div>
        <div>
          <span class="target"> {{ targets[1].current }} </span>
          <span>VIP Clients*</span>
        </div>
        <div>
          <span class="target"> {{ targets[2].current }} </span>
          <span class="mx-12">
            FDA/TGA Approved Machines
          </span>
        </div>
      </div>
      <div class="mt-4">
        <small class="font-fancy">
          * Contact us to find out more about our special VIP membership plan
        </small>
      </div>
    </section>
    <section class="bg-white">
      <v-responsive :cols="10" :sm="8" :md="7" :lg="6">
        <div class="md:text-center">
          <h2>Follow the 99 Medispa journey on Instagram</h2>
          <p>
            Stay up to date with our latest treatments and services and
            potential discounts by following us on Instagram!
          </p>
        </div>
      </v-responsive>
      <v-responsive :cols="10">
        <iframe
          src="https://cdn.lightwidget.com/widgets/a5bb06a79a9f5550983ceb07e4b7641f.html"
          scrolling="no"
          allowtransparency="true"
          class="lightwidget-widget"
          style="width: 100%; border: 0; overflow: hidden;"
        ></iframe>
      </v-responsive>
    </section>
    <section class="bg-pink-100">
      <v-responsive :cols="10" :sm="8" :md="7" :lg="6">
        <h2>Online Booking, Enquiry and Consultation</h2>
        <p>
          All our customers receive a complimentary consultation with our
          experienced professionals prior to performing treatment. This allows
          us to best align the most suitable treatments with your personal goals
          and unique skin and body type.
        </p>
        <p>
          Feel free to book with us directly online or if you'd like to know
          more about a particular treatment make call us now or make an email
          enquiry. Begin your journey towards better health, wellbeing and
          beauty today!
        </p>
        <div class="flex justify-between">
          <a
            href="https://www.fresha.com/providers/99-medispa-xd1tjw01?pId=364819"
            class="contact-button"
          >
            <v-button>Book Online</v-button>
          </a>
          <g-link to="/contact/" class="contact-button">
            <v-button>Make an Enquiry</v-button>
          </g-link>
        </div>
      </v-responsive>
    </section>
  </div>
</template>

<style scoped>
section {
  @apply flex flex-col items-center justify-center py-6;
}

h2 {
  @apply text-4xl font-medium text-secondary my-6 leading-12 font-fancy;
}

p {
  @apply my-6;
}

small {
  @apply text-sm my-3;
}

.contact-button {
  @apply bg-grey py-3 text-white text-center;
  width: 49.5%;
}

.target {
  @apply my-3 text-4xl font-semibold leading-9 block;
}

@media (min-width: 768px) {
  section {
    @apply py-24;
  }
}
</style>
