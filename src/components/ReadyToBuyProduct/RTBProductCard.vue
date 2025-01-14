<template>
  <div
    class="bestofferCard"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Promotion Percentage Display -->
    <div v-if="promotionPercentage > 0" class="promotionLabel">
      - {{ promotionPercentage }}%
    </div>
    <i
      v-if="hover"
      @click="toggleFavorite"
      :class="['fav', isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart']"
    ></i>
    <div class="imageWrapper">
      <router-link class="link" :to="`/product/view/${id}`">
        <img :src="'../../../public/images/' + imgSrc" alt="Khmer Collection" />
      </router-link>
    
    </div>

    <div class="content">
      <h4 class="name">
        {{ name }}
      </h4>
      <p class="description">{{ description }}</p>
   
      <!-- Use a function for generating star base on #rating  -->

      <!-- <div class="rating">
        <i class="fa-solid fullStar fa-star"></i>
        <i class="fa-solid fullStar fa-star"></i>
        <i class="fa-solid fullStar fa-star"></i>
        <i class="fa-solid fullStar fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div> -->

      <div class="rating" v-html="generateStars(rating)"></div>
      <div class="seemore">
        <div class="Price">
          <p class="actualPrice">
            $
            {{ calculateDiscountedPrice(originalPrice, promotionPercentage) }}
          </p>
          
          <p v-if = "promotionPercentage> 0" class="OriginalPrice">$ {{ originalPrice }}</p>
        </div>

        <router-link class="link" :to="`/product/view/${id}`">
          <PrimaryButton class="ShopNowBtn" content="Shop Now"></PrimaryButton
        ></router-link>
      </div>
    </div>
 
  </div>
</template>

<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import { RouterLink } from "vue-router";
import { useFavoriteStore } from "@/stores/favorite"; // Import the favorite store

export default {
  components: {
    PrimaryButton,
  },
  props: {
    id: Number,
    imgSrc: String,
    name: String,
    description: String,
    rating: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    promotionPercentage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      hover: false, // Tracks whether the mouse is over the card
    };
  },
  computed: {
    // Check if the current product is favorited
    isFavorite() {
      const favoriteStore = useFavoriteStore();
      return favoriteStore.isFavorite(this.id);
    },
  },
  methods: {
    toggleFavorite() {
      const favoriteStore = useFavoriteStore();
      if (this.isFavorite) {
        favoriteStore.removeFavorite(this.id); // Remove from favorites
      } else {
        const product = {
          id: this.id,
          name: this.name,
          description: this.description,
          imgSrc: this.imgSrc,
          rating: this.rating,
          originalPrice: this.originalPrice,
          promotionPercentage: this.promotionPercentage,
        };
        favoriteStore.addFavorite(product); // Add to favorites
      }
    },
    generateStars(rating) {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(
            '<i class="fa-solid fullStar fa-star"  style="color: #FF8F00"</i>'
          );
        } else if (i - 0.5 <= rating) {
          stars.push(
            '<i class="fa-solid fa-star-half-alt" style="color: #FF8F00"></i>'
          );
        } else {
          stars.push('<i class="fa-regular fa-star" style="color: gray"></i>');
        }
      }
      return stars.join(" ");
    },
    calculateDiscountedPrice(originalPrice, promotionPercentage) {
      if (!promotionPercentage || promotionPercentage <= 0)
        return originalPrice;
      return (
        originalPrice -
        (originalPrice * promotionPercentage) / 100
      ).toFixed(2);
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: inherit;
}

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
}

.imageWrapper img {
  width: 250px;
  height: 250px;
}

.rating {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.fullStar {
  color: #f1c40f;
}

.ShopNowBtn {
  height: 2rem !important;
  font-size: 14px;
  border-radius: 20px;
  color: #af47d2;
  padding: 0.1rem 1rem 0.1rem 1rem;
  margin: 0;
  background-color: white;
}

.actualPrice {
  color: #af47d2;
  font-size: larger;
  font-weight: bold;
}

.OriginalPrice {
  text-decoration: line-through;
  color: gray;
}

.Price {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.ShopNowBtn:hover {
  color: white;
  background-color: #af47d2;
}

.imageWrapper {
  width: 200px;
  height: 200px;
}

.fav {
  position: absolute;
  top: 10px;
  font-size: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.fav.fa-regular {
  color: #af47d2;
}

.fav.fa-solid {
  color: #af47d2; /* Filled heart color */
}

.bestofferCard {
  position: relative;
  background-color: white;
  width: 313px;
  padding: 0 2rem 1rem 2rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 10px;
  gap: 2rem;
  transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
}

.description {
  font-size: 14px;
  height: 1rem;
  color: gray;
}

.bestofferCard:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  transform: scale(1.005);
  border: 1.5px solid #af47d2;
  cursor: pointer;
}

.seemore {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.content {
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 0.3rem;
}
</style>