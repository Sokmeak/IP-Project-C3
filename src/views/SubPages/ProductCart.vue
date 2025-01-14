<template>
  <!-- Cart Section -->
  <div class="cart-section">
    <h1>Shopping Cart</h1>

    <div class="cart-content">
      <!-- Left Section: Items List -->
      <div class="cart-items">
        <div class="cart-header">
          <p>{{ cartItems.length }} items</p>
        </div>

        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-details">
            <h3>
              {{ item.name }}
              <!-- <span class="edit-link">Edit</span> -->
            </h3>
            <p>{{ item.description }}</p>
            <p class="price">
              Price: ${{ item.price }}
              <span class="discounted" v-if="item.discounted">
                Discounted
              </span>
            </p>
            <p>Size: {{ item.size }}</p>
            <!-- <p>Qty: {{ item.quantity }}</p> -->
            <input
              class="updateQty"
              type="number"
              v-model="item.quantity"
              @change="updateQuantity(item)"
              min="1"
            />
          </div>
          <!-- Remove Item Button -->
          <button @click="removeItem(item.id)" class="remove-item-btn">
            X
          </button>
        </div>
      </div>

      <!-- Right Section: Order Summary -->
      <div class="cart-summary">
        <h3>Total checkout</h3>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="summary-row">
          <span>Discount</span>
          <span>-${{ discount.toFixed(2) }}</span>
        </div>
        <div class="summary-total">
          <span>Total checkout</span>
          <span>${{ totalPrice.toFixed(2) }}</span>
        </div>
        <div class="buttons">
          <!-- Checkout Button -->
          <button class="checkout-btn" @click="goToShipping">
            Checkout <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button class="cancel-btn" @click="backToCurrentRoute">Back to Shopping</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    HeaderComponent,
    Footer,
  },
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();

    // Computed properties for cart items and totals
    const cartItems = computed(() => cartStore.cartItems);
    const subtotal = computed(() =>
      cartStore.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    );
    const discount = computed(() => subtotal.value * 0.1); // Example: 10% discount
    const totalPrice = computed(() => subtotal.value - discount.value);

    // Methods
    // const clearCart = () => {
    //   cartStore.clearCart();
    //   alert("Cart has been cleared!");
    // };

    const removeItem = (id) => {
      cartStore.removeFromCart(id);
      alert("Item removed!");
    };

    const goToShipping = () => {
      router.push({
        name: "ShippingPage",
        query: { subtotal: totalPrice.value },
      });
    };

    return {
      cartItems,
      subtotal,
      discount,
      totalPrice,
      removeItem,
      goToShipping,
    };
  },

  methods: {
    backToCurrentRoute() {
      this.$router.go(-1);
    },

    updateQuantity(item) {
      // Ensure the quantity is valid (e.g., greater than 0)
      if (item.quantity < 1) {
        item.quantity = 1;
      }

      // Update the cart's subtotal and other related calculations if needed
      const updatedCart = this.cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: item.quantity }
          : cartItem
      );
    },
  },
};
</script>

<style scoped>
/* General Cart Section Styling */
.updateQty{
  width: 4rem;
  text-align: center;
}
.cart-section {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.cart-content {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
}

/* Left Section: Cart Items */
.cart-items {
  flex: 2;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart-header {
  font-weight: bold;
  font-size: 1rem;
  color: #7e8b99;
  margin-bottom: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
}

.item-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  font-size: 1rem;
  font-weight: bold;
  color: #26355d;
}

.edit-link {
  color: #7e8b99;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 0.5rem;
}

.price {
  font-size: 0.9rem;
  font-weight: bold;
  color: #ff5722;
}

.discounted {
  font-size: 0.8rem;
  color: #a240de;
  font-style: italic;
  margin-left: 0.5rem;
}

/* Remove Item Button */
.remove-item-btn {
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.remove-item-btn:hover {
  background: #e60000;
}

/* Right Section: Cart Summary */
.cart-summary {
  flex: 1;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart-summary h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #26355d;
  margin-bottom: 1rem;
}

.summary-row,
.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  color: #7e8b99;
}

.summary-total {
  font-weight: bold;
  font-size: 1.1rem;
  color: #26355d;
}

/* Buttons */
.buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
}

.checkout-btn {
  flex: 1;
  background: #ff9800;
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.checkout-btn:hover {
  background: #e67e00;
}

.cancel-btn {
  flex: 1;
  background: white;
  color: #26355d;
  border: 1px solid #26355d;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.cancel-btn:hover {
  background: #f1f1f1;
}

/* Footer Styling */
footer {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 1rem;
  text-align: center;
}
</style>
