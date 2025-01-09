// src/stores/favorites.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  const addFavorite = (product) => {
    if (!favorites.value.some((item) => item.id === product.id)) {
      favorites.value.push(product);
    }
  };

  const removeFavorite = (productId) => {
    favorites.value = favorites.value.filter((item) => item.id !== productId);
  };

  return { favorites, addFavorite, removeFavorite };
});
