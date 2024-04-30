export const useShoppingCart = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    itemsCount: (state) => state.items.reduce((count, item) => count + item.quantity, 0),
    totalCost: (state) => state.items.reduce((total, item) => total + parseFloat(item.price) * parseInt(item.quantity), 0)
  },
  actions: {
    addToCart(product,quantity) {
      const existingProduct = this.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity: quantity });
      }
      this._updateSessionStorage();
    },
    removeFromCart(product) {
      this.items = this.items.filter(item => item.id !== product.id);
      this._updateSessionStorage();
    },
    _updateSessionStorage() {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('shopping-cart-items', JSON.stringify(this.items));
      }
    },
    loadFromSession() {
      if (typeof sessionStorage !== 'undefined') {
        const storedItems = sessionStorage.getItem('shopping-cart-items');
        if (storedItems) {
          this.items = JSON.parse(storedItems);
        }
      }
    }
  }
});
