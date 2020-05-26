<template>
  <div>
    <v-row align="center" justify="center">
      <v-col
        :class="{ 'order-lg-2': right }"
        class="py-md-0 px-0 py-9 my-xs-9 my-sm-9"
        lg="6"
        cols="12"
      >
        <v-row align="center" justify="center">
          <v-col cols="8" xl="5">
            <v-skeleton-loader
              class="ml-n5"
              tile
              max-width="300"
              type="article"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col :class="{ 'order-lg-1': right }" class="pa-0" lg="6" cols="12">
        <v-responsive :aspect-ratio="1.4">
          <div
            style="background-color: lightgrey; height: 100%; width: 100%;"
          ></div>
        </v-responsive>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
