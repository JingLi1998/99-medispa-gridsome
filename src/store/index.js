import Vuex from "vuex";
import Vue from "vue";

import cart from "./cart";
import notifications from "./notifications";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stripe: null,
  },

  mutations: {
    SET_STRIPE(state) {
      const timer = setInterval(() => {
        // eslint-disable-next-line
        state.stripe = Stripe(process.env.GRIDSOME_SECRET_KEY);
        if (state.stripe) clearInterval(timer);
      }, 500);
    },
  },
  actions: {
    setStripe({ commit }) {
      commit("SET_STRIPE");
    },
  },

  modules: {
    cart,
    notifications,
  },
});

export default store;
