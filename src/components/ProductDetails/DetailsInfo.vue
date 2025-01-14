<template>
  <div class="details-info">
    <!-- Price Section -->
    <div class="price-section">
      <span class="current-price"
        >${{
          calculateDiscountedPrice(originalPrice, promotionPercentage)
        }}</span
      >
      <span class="original-price" v-if="originalPrice"
        >${{ originalPrice.toFixed(2) }}</span
      >
      <span v-if="promotionPercentage > 0" class="discount">
        - {{ promotionPercentage }}%
      </span>
      <span
        class="stockStatus"
        :class="{
          'in-stock': stockStatus === 'In Stock',
          'out-of-stock': stockStatus === 'Out Of Stock',
          'low-stock': stockStatus === 'Low Stock',
        }"
        >{{ stockStatus }}</span
      >
    </div>

    <p>
      {{ description }}
    </p>

    <!-- Size Selector -->
    <div class="size-selector">
      <h6>Select Size <span class="size-guide">Size Guide →</span></h6>
      <div class="sizes">
        <button
          v-for="size in sizes"
          :key="size"
          :class="{ selected: size === selectedSize }"
          @click="selectSize(size)"
        >
          {{ size }}
        </button>
      </div>
    </div>

    <!-- Quantity and Add to Cart -->
    <div class="quantity-and-cart">
      <div class="quantity-selector">
        <input class="quantity" type="number" v-model="quantity" min="1" />
      </div>
      <button @click="HandleAddToCart" class="add-to-cart">
        <i class="fa fa-shopping-cart fa-xl"></i> Add to cart
      </button>
      <div class="wishlist-container">
        <i
          @click="toggleFavorite"
          :class="[isFavorite ? 'fa-solid fa-heart ' : 'fa-regular fa-heart']"
        ></i>
      </div>
    </div>

    <!-- Delivery Information -->
    <div class="delivery-info">
      <h6>Delivery</h6>
      <p>
        Free standard shipping on orders over <b>$35</b> before tax, plus free
        returns.
      </p>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>How Long</th>
            <th>How Much</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(deliveryOption, index) in deliveryOptions" :key="index">
            <td>{{ deliveryOption.type }}</td>
            <td>{{ deliveryOption.howLong }}</td>
            <td>{{ deliveryOption.howMuch }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Return Policy -->
    <div class="return-policy">
      <h6>Return</h6>
      <p>
        You have <b>60 days</b> to return the item(s) using any of the following
        methods:
      </p>
      <ul>
        <li>Free store return</li>
        <li>Free returns via USPS Dropoff Service</li>
      </ul>
    </div>

    <!-- Share Section -->
    <div class="share-section">
      <h6 class="social-icons">
        <strong> Share: </strong>
        <span><i class="fa-brands fa-facebook-f"></i></span>
        <span><i class="fa-brands fa-twitter"></i></span>
        <span><i class="fa-brands fa-pinterest-p"></i></span>
      </h6>
    </div>

    <!-- Buttons -->
    <div class="action-buttons">
      <button @click="goToCart" class="shopping-cart">
        Shopping Cart <i class="fa-solid fa-arrow-right"></i>
      </button>
      <button @click="Back" class="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart"; // Importing the cart store
import { useRouter } from "vue-router"; // Vue Router for navigation
import { useFavoriteStore } from "@/stores/favorite";
export default {
  props: {
    originalPrice: Number,
    promotionPercentage: Number,
    sizes: Array,
    description: String,
    qty: Number,
    selectedImage: String,
    id: Number,
    image:String,
    name:String
  },
  // setup() {
  //   const router = useRouter(); // Initialize Vue Router instance

  //   // const goToCart = () => {
  //   //   router.({ name: "cart" }); // Navigate to ProductCart page
  //   // };

  //   return {
  //     goToCart,
  //   };
  // },
  data() {
    return {
      selectedSize: null,
      quantity: 1,
      isFavorite: false,
    };
  },
  computed: {
    stockStatus() {
      if (this.qty === 0) {
        return "Out Of Stock";
      } else if (this.qty < 10) {
        return "Low Stock";
      } else {
        return "In Stock";
      }
    },

    isFavorite() {
      const favoriteStore = useFavoriteStore();
      return favoriteStore.isFavorite(this.id);
    },
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    Back() {
      this.$router.go(-1);
    },
    // goToCart() {
    //   this.$router.replace({
    //     name: "ProductCart", // Refers to the child route
    //     params: {}, // Add any route parameters here, if needed
    //     props: true, // Pass props to the component
    //   });
    // },

    goToCart() {
      this.$router.replace({
        replace: true,
        name: "ProductCart",
        path: "/product/cart",
        props: true,
      });
    },

    calculateDiscountedPrice(originalPrice, promotionPercentage) {
      if (!promotionPercentage || promotionPercentage <= 0)
        return originalPrice;
      return (
        originalPrice -
        (originalPrice * promotionPercentage) / 100
      ).toFixed(2);
    },
    toggleFavorite() {
      const favoriteStore = useFavoriteStore();
      if (this.isFavorite) {
        favoriteStore.removeFavorite(this.id); // Remove from favorites
      } else {
        const product = {
          id: this.id,
          name: this.name,
          description: this.description,
          imgSrc: this.image,
          rating: this.rating,
          originalPrice: this.originalPrice,
          promotionPercentage: this.promotionPercentage,
        };
        favoriteStore.addFavorite(product); // Add to favorites
      }
    },
    HandleAddToCart() {
      if (!this.selectedSize) {
        alert("Please select a size before adding to cart.");
        return;
      }

      if(this.qty == 0){
        alert("Sorry the product is out of Stock, Thank for your understanding!")
        return;
      }

      const cartStore = useCartStore();

      const cartItem = {
        id: this.id,
        name: `Product ${this.id}`, // Example product name
        image: this.selectedImage,
        price: parseFloat(
          this.calculateDiscountedPrice(
            this.originalPrice,
            this.promotionPercentage
          )
        ),
        size: this.selectedSize,
        quantity: this.quantity,
        description: this.description,
      };

      cartStore.addToCart(cartItem); // Add item to cart store
      // alert("Item added to cart!");
    },
  },
};
</script>

<style scoped>
.in-stock {
  /* background-color: rgb(12, 192, 72); */
  color: rgb(12, 192, 72);
  border: 2px solid rgb(12, 192, 72);
}

.low-stock {
  color: rgb(207, 200, 13);
  border: 2px solid rgb(207, 200, 13);
}

.out-of-stock {
  color: rgba(231, 8, 0);
  border: 2px solid rgba(231, 8, 0);
}
.wishlist-container {
  padding: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 2px solid gray;
}
.details-info {
  padding: 1rem;
  font-size: large;
}
.stockStatus {
  /* color: white; */
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  margin-left: 10px;
}
.price-section {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 20px;
}

.current-price {
  color: red;
  font-size: 1.5rem;
  font-weight: bold;
}

.original-price {
  text-decoration: line-through;
  margin-left: 10px;
  color: #999;
}

.discount {
  background-color: rgba(231, 8, 0);
  color: white;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  margin-left: 10px;
}

.size-selector {
  margin-bottom: 20px;
}

.size-guide {
  font-size: 0.85rem;
  color: #0073e6;
  cursor: pointer;
  margin-left: 10px;
}
.sizes {
  display: flex;
  gap: 1rem;
}

.sizes button {
  margin-right: 10px;
  height: 2rem;
  width: 2rem;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #000;
  background: none;
  cursor: pointer;
}
.sizes button:hover {
  background-color: rgb(93, 87, 87);
  color: white;
}

.sizes button.selected {
  background: #000;
  color: #fff;
}

.quantity-and-cart {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.quantity-selector input {
  width: 80px;
  padding: 10px 20px;
  font-weight: 500;
  text-align: center;
  margin-right: 10px;
}

.add-to-cart {
  background: #ff8f00;

  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}

.wishlist {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.delivery-info {
  margin-bottom: 20px;
}

.delivery-info table {
  width: 100%;
  border-collapse: collapse;
}

.delivery-info th,
.delivery-info td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.return-policy {
  margin-bottom: 20px;
}

.return-policy ul {
  list-style: disc;
  padding-left: 20px;
}

.share-section {
  margin-bottom: 20px;
}
.social-icons {
  width: 15rem;
  display: flex;
  gap: 1rem;
}
.social-icons i {
  color: rgba(155, 155, 155, 0.781);
}
.social-icons i:hover {
  color: rgb(100, 98, 98);
}
.social-icons span {
  margin-right: 10px;
  cursor: pointer;
}

.action-buttons {
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
}

.shopping-cart,
.cancel {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.shopping-cart {
  background: #ff8f00;

  border-radius: 5px;
  color: white;
}

.cancel {
  background: #f4f4f4;
  color: black;
}
</style>
