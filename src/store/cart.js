const store = {
  namespaced: true,

  state: {
    cartItems: [],
    selectedItemIndex: null,
    selectedItem: null,
    showDeleteModal: false,
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
    total(state) {
      return state.cartItems.reduce(
        (total, { item, quantity }) => Number(item.amount) * quantity + total,
        0
      );
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
    UPDATE_CART_ITEM(state, { updateIndex, cartItem }) {
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[updateIndex] = cartItem;
      state.cartItems = updatedCartItems;
    },
    SET_SELECTED_ITEM_INDEX(state, index) {
      state.selectedItemIndex = index;
    },
    SET_SELECTED_ITEM(state, index) {
      state.selectedItem = { ...state.cartItems[index] };
    },
    SHOW_DELETE_MODAL(state) {
      state.showDeleteModal = true;
    },
    HIDE_DELETE_MODAL(state) {
      state.showDeleteModal = false;
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
        dispatch("notifications/clearNotificationContent", null, {
          root: true,
        });
      }, 2000);
    },
    removeCartItem({ commit, dispatch }, removeIndex) {
      commit("REMOVE_CART_ITEM", removeIndex);
      dispatch("hideDeleteModal");
    },
    updateCartItem({ commit }, { updateIndex, cartItem }) {
      commit("UPDATE_CART_ITEM", { updateIndex, cartItem });
    },
    setSelectedItemIndex({ commit, dispatch }, index) {
      commit("SET_SELECTED_ITEM_INDEX", index);
      dispatch("setSelectedItem", index);
      dispatch("showDeleteModal");
    },
    setSelectedItem({ commit }, index) {
      commit("SET_SELECTED_ITEM", index);
    },
    showDeleteModal({ commit }) {
      commit("SHOW_DELETE_MODAL");
    },
    hideDeleteModal({ commit }) {
      commit("HIDE_DELETE_MODAL");
    },
  },
};

export default store;
