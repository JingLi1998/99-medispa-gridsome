<template>
  <div class="flex flex-col items-center w-full py-20 mx-auto bg-white rounded">
    <h1 class="mb-6 text-6xl font-bold text-center font-fancy text-secondary">
      Enquiry Form
    </h1>
    <form class="w-4/12" @submit.prevent="submitForm">
      <div class="flex w-full">
        <div class="w-1/2 px-2">
          <label class="block text-sm" for="fullName">Full Name</label>
          <input
            id="fullName"
            v-model="formData.name"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
            type="text"
          />
        </div>
        <div class="w-1/2 px-2">
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

      <div class="flex w-full my-6">
        <div class="w-1/2 px-2">
          <label class="block text-sm" for="phone">Phone Number</label>
          <input
            id="phone"
            v-model="formData.phone"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
            type="text"
          />
        </div>
        <!-- <div class="w-full px-2 my-6"> -->
        <div class="w-1/2 px-2">
          <label class="block text-sm" for="fullName">Email Address</label>
          <input
            id="fullName"
            v-model="formData.email"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
            type="text"
          />
        </div>
      </div>

      <div class="w-full px-2 my-6">
        <label class="block text-sm" for="treatment">Treatments</label>
        <input
          id="treatment"
          v-model="formData.treatment"
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none"
          type="text"
        />
      </div>

      <div class="w-full px-2 my-6">
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
  </div>
</template>

<script>
import vSelect from "vue-select";
// import "vue-select/dist/vue-select.scss";
import "vue-select/src/scss/vue-select.scss";
// import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  components: {
    vSelect,
    // DatePicker,
  },
  data() {
    return {
      formData: {
        name: null,
        gender: null,
        treatment: null,
        date: null,
        phone: null,
        email: null,
        comments: null,
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formData);
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
</style>
