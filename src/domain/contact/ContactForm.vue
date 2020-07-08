<template>
  <div
    id="contactForm"
    class="flex flex-col items-center w-full py-20 mx-auto bg-white rounded"
  >
    <h2>
      Enquiry Form
    </h2>
    <form
      class="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12"
      @submit.prevent="submitForm"
    >
      <!-- <div class="h-10">
        <transition name="fade">
          <p v-show="error != ''" class="px-2 text-sm text-center text-red-400">
            {{ error }}
          </p>
        </transition>
      </div> -->
      <div class="w-full sm:flex">
        <div class="w-full px-2 sm:w-1/2">
          <label class="block text-sm" for="fullName">Full Name</label>
          <input
            id="fullName"
            v-model="formData.name"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
            type="text"
          />
        </div>
        <div class="w-full px-2 sm:w-1/2">
          <label class="block text-sm" for="gender">Gender</label>
          <v-select
            v-model="formData.gender"
            :searchable="false"
            :options="['Male', 'Female']"
          ></v-select>
        </div>
      </div>

      <div class="w-full sm:my-6 sm:flex">
        <div class="w-full px-2 sm:w-1/2">
          <label class="block text-sm" for="phone">Phone Number</label>
          <input
            id="phone"
            v-model="formData.phone"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
            type="text"
          />
        </div>
        <!-- <div class="w-full px-2 my-6"> -->
        <div class="w-full px-2 sm:w-1/2">
          <label class="block text-sm" for="fullName">Email Address</label>
          <input
            id="fullName"
            v-model="formData.email"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
            type="text"
          />
        </div>
      </div>

      <div class="w-full px-2 sm:my-6">
        <label class="block text-sm" for="treatment">Treatments</label>
        <input
          id="treatment"
          v-model="formData.treatment"
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
          type="text"
        />
      </div>

      <div class="w-full px-2 mb-3 sm:my-6">
        <label class="block text-sm" for="comments">
          Further Comments / Preferred Dates
        </label>
        <input
          id="comments"
          v-model="formData.comments"
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
          type="text"
        />
      </div>

      <div class="px-2">
        <button
          class="block w-full p-2 text-white uppercase rounded submit focus:outline-none bg-secondary"
          type="submit"
        >
          Submit Form
        </button>
      </div>
    </form>

    <v-snackbar
      :show="show"
      text="Thanks for submitting. We will be in contact with you shortly!"
    />
  </div>
</template>

<script>
import axios from "axios";

import vSelect from "vue-select";
// import DatePicker from "v-calendar/lib/components/date-picker.umd";
import VSnackbar from "../../components/VSnackbar";

export default {
  components: {
    vSelect,
    VSnackbar,
    // DatePicker,
  },
  data() {
    return {
      formData: {
        name: null,
        gender: null,
        treatment: null,
        phone: null,
        email: null,
        comments: null,
      },
      show: false,
      error: "",
    };
  },
  methods: {
    async submitForm() {
      if (
        this.formData.name &&
        this.formData.gender &&
        this.formData.treatment &&
        this.formData.phone &&
        this.formData.email &&
        this.formData.comments
      ) {
        this.error = "";
        try {
          await axios.post(
            "https://dicwjr8992.execute-api.ap-southeast-2.amazonaws.com/dev/email/send",
            this.formData
          );
          this.show = true;
          Object.keys(this.formData).forEach((k) => (this.formData[k] = ""));
          setTimeout(() => {
            this.show = false;
          }, 5000);
        } catch (error) {
          this.error = "Something went wrong, please try again";
        }
      } else {
        this.error = "Please fill in all required fields before submitting";
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.submit {
  transition: all 0.3s;
  position: relative;
}
.submit:active {
  top: 2px;
}

h2 {
  @apply text-3xl leading-9 my-6 font-bold text-center font-fancy text-secondary;
}

@media (min-width: 640px) {
  h2 {
    @apply text-4xl my-9 leading-12;
  }
}

@media (min-width: 768px) {
  h2 {
    @apply text-5xl my-12;
    line-height: 3.75rem;
  }
}
</style>
