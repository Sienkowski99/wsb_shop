export const useShoppingCart = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    itemsCount: (state) => state.items.reduce((count, item) => count + item.quantity, 0),
    totalCost: (state) => state.items.reduce((total, item) => total + parseFloat(item.price) * parseInt(item.quantity), 0),
    isEmpty: (state) => state.items.length === 0
  },
  actions: {
    addToCart(product,quantity) {
      const existingProduct = this.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity: quantity });
      }
    },
    removeFromCart(product) {
      this.items = this.items.filter(item => item.id !== product.id);
    }
  }
});
