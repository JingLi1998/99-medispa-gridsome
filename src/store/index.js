import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lineItems: [],
    showNotification: false,
    notificationItem: null,
    stripe: null,
    notificationTimer: null,
  },
  getters: {
    checkoutItems(state) {
      const checkoutItems = state.lineItems.map((item) => ({
        price: item.price,
        quantity: 1,
      }));
      return checkoutItems;
    },
  },
  mutations: {
    ADD_LINE_ITEM(state, lineItem) {
      if (!state.lineItems.includes(lineItem)) {
        let newLineItems = [...state.lineItems];
        newLineItems.push(lineItem);
        state.lineItems = newLineItems;
      }
    },
    REMOVE_LINE_ITEM(state, lineItem) {
      let newLineItems = [...state.lineItems];
      newLineItems = newLineItems.filter((item) => item !== lineItem);
      state.lineItems = newLineItems;
    },
    SET_STRIPE(state) {
      // eslint-disable-next-line
      state.stripe = Stripe(
        "pk_test_51GqzvrLfMbezZRstzh4aiqz8q8xcP8yJ14oijiY8zuXOqZidR9drTQ6uQbyDjeKzfy3bAzpp5ab8LWvvnInruDp500LmW9lnEE"
      );
    },
    SET_NOTIFICATION_ITEM(state, notificationItem) {
      state.notificationItem = notificationItem;
    },
    REMOVE_NOTIFICATION_ITEM(state) {
      state.notificationItem = null;
    },
    SHOW_NOTIFICATION(state) {
      state.showNotification = true;
    },
    HIDE_NOTIFICATION(state) {
      state.showNotification = false;
    },
    SET_NOTIFICATION_TIMER(state, timer) {
      state.timer = timer;
    },
    CLEAR_NOTIFICATION_TIMER(state) {
      clearTimeout(state.timer);
    },
  },
  actions: {
    addLineItem({ commit, dispatch }, lineItem) {
      commit("ADD_LINE_ITEM", lineItem);
      dispatch("clearNotificationTimer");
      dispatch("hideNotification");
      let timer = setTimeout(() => {
        dispatch("setNotificationItem", lineItem);
        dispatch("showNotification");
      }, 500);
      timer = setTimeout(() => {
        dispatch("hideNotification");
        dispatch("removeNotificationItem");
      }, 2000);
      dispatch("setNotificationTimer", timer);
    },
    removeLineItem({ commit }, lineItem) {
      commit("REMOVE_LINE_ITEM", lineItem);
    },
    setStripe({ commit }) {
      commit("SET_STRIPE");
    },
    setNotificationItem({ commit }, notificationItem) {
      commit("SET_NOTIFICATION_ITEM", notificationItem);
    },
    removeNotificationItem({ commit }) {
      commit("REMOVE_NOTIFICATION_ITEM");
    },
    showNotification({ commit }) {
      commit("SHOW_NOTIFICATION");
    },
    hideNotification({ commit }) {
      commit("HIDE_NOTIFICATION");
    },
    setNotificationTimer({ commit }, timer) {
      commit("SET_NOTIFICATION_TIMER", timer);
    },
    clearNotificationTimer({ commit }) {
      commit("CLEAR_NOTIFICATION_TIMER");
    },
  },
});

export default store;
