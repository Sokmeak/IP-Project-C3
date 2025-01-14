<template>
  <div>
    <div v-if="favorites.length === 0">
      <p>No favorite products yet.</p>
    </div>
    <div class="favorites-grid">
      <div v-for="(item, index) in favorites" :key="index" class="favorite-item">
        <!-- Promotion Label -->
        <div v-if="item.promotionPercentage > 0" class="promotionLabel">
          -{{ item.promotionPercentage }}%
        </div>

        <!-- Favorite Icon -->
        <i
          class="fa"
          :class="isFavorite(item.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
          @click="toggleFavorite(item)"
          :style="{ color: isFavorite(item.id) ? 'white' : '#af47d2' }"
          style="cursor: pointer; position: absolute; top: 10px; right: 10px;"
        ></i>

        <!-- Product Image -->
        <div class="imageWrapper">
          <img :src="getImagePath(item.imgSrc)" alt="Product Image" />
        </div>

        <!-- Product Details -->
        <div class="content">
          <h4 class="name">{{ item.name }}</h4>
          <p class="description">{{ item.description }}</p>
          <div class="price-section">
            <p class="actualPrice">
              ${{ calculateDiscountedPrice(item.originalPrice, item.promotionPercentage) }}
            </p>
            <p class="originalPrice" v-if="item.promotionPercentage > 0">
              ${{ item.originalPrice }}
            </p>
          </div>
          <router-link class="link" :to="`/product/view/${item.id}`">
            <div class="seemore">see more</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavoriteStore } from "@/stores/favorite"; 
export default {
  setup() {
    const favoriteStore = useFavoriteStore();

    return {
      favoriteStore,
    };
  },
  computed: {

    favorites() {
      return this.favoriteStore.favorites;
    },
  },
  methods: {
    isFavorite(productId) {
      return this.favoriteStore.isFavorite(productId);
    },
    toggleFavorite(product) {
      if (this.isFavorite(product.id)) {
        this.favoriteStore.removeFavorite(product.id);
      } else {
        this.favoriteStore.addFavorite(product);
      }
    },
    calculateDiscountedPrice(originalPrice, promotionPercentage) {
      if (!promotionPercentage || promotionPercentage <= 0) return originalPrice;
      return (
        originalPrice -
        (originalPrice * promotionPercentage) / 100
      ).toFixed(2);
    },

    getImagePath(imgSrc) {
      return `../../../public/images/${imgSrc}`;
    },
  },
};
</script>

<style scoped>
.promotionLabel {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(231, 8, 0); 
  color: white;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  z-index: 1;
}


.fa-heart {
  color: #af47d2; 
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1; 
}


.favorites-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}

.favorite-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative; 
}

.imageWrapper img {
  background-color: rgba(188, 59, 193, 0.818);
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.content {
  flex: 1;
  padding: 15px;
}

.name {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px;
}

.description {
  font-size: 14px;
  color: #555;
  margin: 0 0 10px;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.actualPrice {
  font-size: 18px;
  font-weight: bold;
  color: red;
}

.originalPrice {
  font-size: 14px;
  text-decoration: line-through;
  color: #888;
}


@media (max-width: 768px) {
  .favorites-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .imageWrapper img {
    height: 150px;
  }

  .name {
    font-size: 14px;
  }

  .actualPrice {
    font-size: 16px;
  }

  .originalPrice {
    font-size: 12px;
  }
}
</style>