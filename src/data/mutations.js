export default {
  addToCart(state, payload) {
    state.cart.push(payload.product);
    console.table(state.cart);
  },
  removeFromCart(state, payload) {
    const cart = state.cart;
    const productIndex = cart.findIndex(
      (product) => payload.product.name === product.name
    );

    cart.splice(productIndex, 1);
    console.table(cart);
  },
  editCart(state, payload) {
    const cart = state.cart;
    const cartItem = cart.find(
      (cartItem) => payload.product.name === cartItem.product.name
    );
    cartItem.amount = payload.amount;
    console.table(cart);
  },
  clearCart(state) {
    const cart = state.cart;
    cart.splice(0, cart.length);
  },
};
