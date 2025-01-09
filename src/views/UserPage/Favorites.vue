<template>
  <div>
    <div
      v-for="(product, index) in BestOfferCard"
      :key="index"
      class="product-item"
    >
      <img :src="product.image" alt="Product Image" />
      <p><strong>{{ product.name }}</strong></p>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <button @click="toggleFavorite(product)">
        {{ isFavorite(product) ? "Remove from Favorites" : "Add to Favorites" }}
      </button>
    </div>
  </div>
</template>

<script>
import { useFavoritesStore } from "@/stores/favorites";
import { useProductStore } from "@/stores/product";
import { onMounted, computed } from "vue";

export default {
  name: "BestOfferCard",
  setup() {
    const favoritesStore = useFavoritesStore();
    const productStore = useProductStore();

    // Fetch products when the component is mounted
    onMounted(() => {
      productStore.fetchProducts();
    });

    // Computed property for Khmer collections
    const BestOfferCard = computed(() => productStore.getBestOfferProducts);

    // Toggle favorite status
    const toggleFavorite = (product) => {
      if (isFavorite(product)) {
        favoritesStore.removeFavorite(product.id);
      } else {
        favoritesStore.addFavorite(product);
      }
    };

    // Check if the product is a favorite
    const isFavorite = (product) =>
      favoritesStore.favorites.some((item) => item.id === product.id);

    return {
      BestOfferCard,
      toggleFavorite,
      isFavorite,
    };
  },
};
</script>

<style>
.product-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-item img {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
}

.product-item p {
  margin: 10px 0;
  color: #333;
}

.product-item p strong {
  font-size: 1.2em;
  color: #000;
}

.product-item button {
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.product-item button:hover {
  background-color: #e65a50;
}
</style>
