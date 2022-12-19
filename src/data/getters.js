export default {
  //product to preview on home page in the header :)
  getProducts(state) {
    return state.products;
  },
  getHomeProduct(state) {
    const products = state.products;
    const homeProduct = products.find((product) => product.id === 4);
    return homeProduct;
  },
  getFeaturedProducts(state) {
    const products = state.products;
    const featuredProducts = products.filter(
      (product) => product.id === 1 || product.id === 5 || product.id === 6
    );
    return featuredProducts;
  },
  getHeadphones(state) {
    const products = state.products;
    const headphones = products.filter((product) => product.category === 'headphones');
    for (let i = 0; i < headphones.length; i++) {
      headphones[i].itemOrder = i;
    }
    console.log(headphones);
    return headphones;
  },
  getEarphones(state) {
    const products = state.products;
    const earphones = products.filter((product) => product.category === 'earphones');
    for (let i = 0; i < earphones.length; i++) {
      earphones[i].itemOrder = i;
    }
    console.log(earphones);
    return earphones;
  },
  getSpeakers(state) {
    const products = state.products;
    const speakers = products.filter((product) => product.category === 'speakers');
    for (let i = 0; i < speakers.length; i++) {
      speakers[i].itemOrder = i;
    }
    console.log(speakers);
    return speakers;
  },
  getCart(state) {
    return state.cart;
  },
};
