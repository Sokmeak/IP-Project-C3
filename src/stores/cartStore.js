import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [], // Cart items
  }),
  actions: {
    // Add a product to the cart
    addToCart(product) {
      const existingItem = this.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if product exists
      } else {
        this.cartItems.push({ ...product, quantity: 1 }); // Add new product
      }
    },
    // Remove a product from the cart
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },
    // Clear the cart
    clearCart() {
      this.cartItems = [];
    },

    // updateQuantity(productId, newQuantity) {
    //   const item = this.cartItems.find((item) => item.id === productId);
    //   if (item) {
    //     item.quantity = Math.max(newQuantity, 1); // Ensure quantity is at least 1
    //   }
    // },
  },
});
