import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product) {
      // Check if the product already exists in the cart
      const existingItem = this.cartItems.find(
        (item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
      );

      if (existingItem) {
        // Increment the quantity if it already exists
        existingItem.quantity += product.quantity;
      } else {
        // Add the product to the cart
        this.cartItems.push(product);
      }
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cartItems = [];
    },
  },
  getters: {
    cartTotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});
