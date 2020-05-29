<template>
  <div class="flex flex-col items-center w-full py-20 mx-auto bg-white rounded">
    <h1
      class="text-5xl font-bold text-center sm:mb-3 sm:text-6xl font-fancy text-secondary"
    >
      Enquiry Form
    </h1>
    <form
      class="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12"
      @submit.prevent="submitForm"
    >
      <div class="h-10">
        <transition name="fade">
          <p v-show="error != ''" class="px-2 text-sm text-center text-red-400">
            {{ error }}
          </p>
        </transition>
      </div>
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

      <!-- <div class="w-1/2 px-2">
          <label class="block text-sm" for="date">Consultation Date</label>
          <date-picker
            id="date"
            v-model="formData.date"
            :popover="{ visibility: 'click' }"
          >
            <input
              id="date"
              slot-scope="{ inputProps, inputEvents }"
              type="text"
              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
              v-bind="inputProps"
              v-on="inputEvents"
            />
            />
          </date-picker>
        </div> -->
      <!-- </div> -->

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
          class="block w-full p-2 text-white uppercase rounded bg-secondary"
          type="submit"
        >
          Submit Form
        </button>
      </div>
    </form>

    <snackbar
      :show="show"
      text="Thanks for submitting. We will be in contact with you shortly!"
    />
  </div>
</template>

<script>
import axios from "axios";

import vSelect from "vue-select";
// import "vue-select/dist/vue-select.scss";
import "vue-select/src/scss/vue-select.scss";
// import DatePicker from "v-calendar/lib/components/date-picker.umd";
import Snackbar from "./Snackbar";

export default {
  components: {
    vSelect,
    Snackbar,
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

<style lang="scss">
.v-select .vs__dropdown-toggle {
  border-color: #e2e8f0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
}
.v-select .vs__selected {
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.shake-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
