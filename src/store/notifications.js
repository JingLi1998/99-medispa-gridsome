const store = {
  namespaced: true,

  state: {
    showNotification: false,
    notificationContent: null,
  },

  mutations: {
    SET_NOTIFICATION_CONTENT(state, notificationContent) {
      state.notificationContent = notificationContent;
    },
    CLEAR_NOTIFICATION_CONTENT(state) {
      state.notificationContent = null;
    },
    SHOW_NOTIFICATION(state) {
      state.showNotification = true;
    },
    HIDE_NOTIFICATION(state) {
      state.showNotification = false;
    },
  },

  actions: {
    setNotificationContent({ commit }, notificationContent) {
      commit("SET_NOTIFICATION_CONTENT", notificationContent);
    },
    clearNotificationContent({ commit }) {
      commit("CLEAR_NOTIFICATION_CONTENT");
    },
    showNotification({ commit }) {
      commit("SHOW_NOTIFICATION");
    },
    hideNotification({ commit }) {
      commit("HIDE_NOTIFICATION");
    },
  },
};

export default store;
