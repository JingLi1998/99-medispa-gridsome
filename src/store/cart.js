const store = {
  namespaced: true,

  state: {
    cartItems: [],
  },

  getters: {
    lineItems(state) {
      return state.cartItems.map((cartItem) => ({
        price: cartItem.item.price,
        quantity: cartItem.quantity,
      }));
    },
    isInCart: (state) => (name) => {
      return !!state.cartItems.filter((cartItem) => cartItem.item.name === name)
        .length;
    },
  },

  mutations: {
    ADD_CART_ITEM(state, cartItem) {
      const updatedCartItems = [...state.cartItems];
      updatedCartItems.push(cartItem);
      state.cartItems = updatedCartItems;
    },
    REMOVE_CART_ITEM(state, removeIndex) {
      state.cartItems = state.cartItems.filter(
        (_, index) => index !== removeIndex
      );
    },
    UPDATE_CART_ITEM(state, updateIndex, cartItem) {
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[updateIndex] = cartItem;
      state.cartItems = updatedCartItems;
    },
  },

  actions: {
    addCartItem({ commit, dispatch }, cartItem) {
      commit("ADD_CART_ITEM", cartItem);
      setTimeout(() => {
        dispatch("notifications/setNotificationContent", cartItem, {
          root: true,
        });
        dispatch("notifications/showNotification", null, { root: true });
      }, 500);
      setTimeout(() => {
        dispatch("notifications/hideNotification", null, { root: true });
        dispatch("notifications/clearNotification", null, { root: true });
      }, 2000);
    },
    removeCartItem({ commit }, removeIndex) {
      commit("REMOVE_CART_ITEM", removeIndex);
    },
    updateCartItem({ commit }, updateIndex, cartItem) {
      commit("UPDATE_CART_ITEM", updateIndex, cartItem);
    },
  },
};

export default store;
