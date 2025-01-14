<template>
  <div v-if="product" class="product-details-layout">
    <h2>{{ product.productName }}</h2>
    <div class="tabs">
      <!-- Tabs for switching between Product Details and Reviews -->
      <div class="tabController">
        <button
          :class="{ active: activeTab === 'details' }"
          @click="activeTab = 'details'"
        >
          Product details
        </button>
        <button
          :class="{ active: activeTab === 'reviews' }"
          @click="activeTab = 'reviews'"
        >
          Reviews
        </button>
      </div>
    </div>

    <div class="productDetailsWrapper">
      <productImage :images="mergedImages" />

      <div class="content">
        <!-- Product Details Tab -->
        <div v-if="activeTab === 'details'" class="details-tab">
          <div class="main-content">
            <detailsInfo
              :id="product.productId"
              :price="product.price"
              :qty="product.quantity"
              :originalPrice="product.price"
              :description="product.description"
              :name="product.productName"
              @AddToCart="HandleAddToCart"
              :image="product.productImages[0]"
              :sizes="sizes"
              :deliveryOptions="deliveryOptions"
              :promotionPercentage="product.promotionPercentage"
              :selectedImage="mergedImages[0]"
            />
          </div>
        </div>

        <!-- Reviews Tab -->
        <div v-else class="reviews-tab">
          <productReview :reviews="reviews" :rating="product.rating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productImage from "../../components/ProductDetails/ProductImage.vue";
import productReview from "../../components/ProductDetails//ProductReviewers.vue";
import detailsInfo from "../../components/ProductDetails//DetailsInfo.vue";
import { mapState } from "pinia";
import { useProductStore } from "@/stores/product";
export default {
  components: {
    productImage,
    productReview,
    detailsInfo,
  },

  props: {
    name: String,
    price: Number,
    promotionPercentage: Number,
    image: String,
  },
  data() {
    // Test the data in product details page

    return {
      activeTab: "details", // 'details' or 'reviews'
      SelectedSize: null,
      // price: 15.5,
      // originalPrice: 30.5,
      sizes: ["XS", "S", "M", "L", "XL"],
      deliveryOptions: [
        {
          type: "Standard delivery",
          howLong: "1-4 business days",
          howMuch: "$4.50",
        },
        {
          type: "Express delivery",
          howLong: "1 business day",
          howMuch: "$10.00",
        },
        {
          type: "Pick up in store",
          howLong: "1-3 business days",
          howMuch: "Free",
        },
      ],
      reviews: [
        {
          username: "Lorem Ipsum",
          rating: 5,
          comment: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          username: "Kanaant Tifi",
          rating: 4,
          comment: "Great quality and fast delivery!",
        },
        {
          username: "Lorem Ipsum",
          rating: 5,
          comment: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          username: "Kanaant Tifi",
          rating: 4,
          comment: "Great quality and fast delivery!",
        },
        {
          username: "Lorem Ipsum",
          rating: 5,
          comment: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          username: "Kanaant Tifi",
          rating: 4,
          comment: "Great quality and fast delivery!",
        },
        // Add more reviews as needed
      ],

      productImages2: [
        "https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp",
        "https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-13.webp",
        "https://fps.cdnpk.net/images/ai/image-generator/gallery/65446.webp",
        "https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp",
        "https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-13.webp",
      ],
    };
  },
  methods: {
    HandleAddToCart(cartItem) {
      console.log("Cart Item: " + cartItem);
      alert(`Product added to cart: \n${JSON.stringify(cartItem, null, 2)}`);
    },
  },

  computed: {
    ...mapState(useProductStore, {
      products: "products",
    }),
    product() {
      const productId = this.$route.params.id;
      console.log(productId);

      return this.products.find((product) => product.productId == productId);
    },

    mergedImages() {
      // Combine the single image prop with the array of product images
      // this.image =  this.product.productImages[0];
      const imagePath =
        "../../../public/images/" + this.product.productImages[0];
      // const imagePath = this.image ? `/images/${this.image}` : null;

      return this.product.productImages
        ? [imagePath, ...this.productImages2]
        : this.productImages2;
    },
  },
};
</script>

<style scoped>
.productDetailsWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem; */
}
.product-details-layout {
  margin-top: 5rem;
  padding: 20px;
}

.tabs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  border-bottom: 2px solid #ddd;

  margin-bottom: 20px;
}

.tabs button {
  padding: 10px;

  border: none;
  cursor: pointer;
  background: none;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

.tabs button.active {
  border: 2px solid orange;
  color: black;
  outline: none;
  border-radius: 0.3rem;
}

.tabController {
  display: flex;
  justify-content: left;
  gap: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
}

.details-tab {
  display: flex;
  width: fit-content;
  flex-direction: row;
}

.main-content {
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  gap: 20px;
}

.reviews-tab {
  padding: 20px;
  width: fit-content;
  height: 1rem;
}
</style>
