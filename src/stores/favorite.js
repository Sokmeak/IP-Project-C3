// stores/favorite.js
import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Load from localStorage
  }),
  actions: {
    addFavorite(product) {
      if (!this.favorites.some((fav) => fav.id === product.id)) {
        this.favorites.push(product);
        this.saveToLocalStorage();
      }
    },
    // Remove a product from favorites
    removeFavorite(productId) {
      this.favorites = this.favorites.filter((fav) => fav.id !== productId);
      this.saveToLocalStorage();
    },
    // Check if a product is favorited
    isFavorite(productId) {
      return this.favorites.some((fav) => fav.id === productId);
    },
    // Save favorites to localStorage
    saveToLocalStorage() {
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
});