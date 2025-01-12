<template>
  <div>
    <HeaderComponent />
    <div class="cart-section">
      <h1>Shopping Cart</h1>

      <div v-if="cartItems.length" class="cart-content">
        <!-- Cart Items -->
        <div class="cart-items">
          <div class="cart-header">
            <p>{{ cartItems.length }} items</p>
          </div>
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name" class="item-image" />
            <div class="item-details">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
              <p class="price">Price: ${{ item.price.toFixed(2) }}</p>
              <p>Qty: {{ item.quantity }}</p>
              <button @click="removeFromCart(item.id)" class="remove-btn">
                Remove
              </button>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="cart-summary">
          <h3>Total Checkout</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>${{ cartSubtotal.toFixed(2) }}</span>
          </div>
          <div class="summary-row">
            <span>Discount</span>
            <span>-${{ discountAmount.toFixed(2) }}</span>
          </div>
          <div class="summary-total">
            <span>Total</span>
            <span>${{ cartTotal.toFixed(2) }}</span>
          </div>
          <div class="buttons">
            <button @click="proceedToCheckout" class="checkout-btn">
              Checkout →
            </button>
            <button @click="clearCart" class="cancel-btn">Clear Cart</button>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="empty-cart">
        <p>Your cart is empty.</p>
        <router-link to="/product/home" class="go-back">
          Go back to shop
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { computed } from "vue";
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

    // Cart items and computed totals
    const cartItems = computed(() => cartStore.cartItems);
    const cartSubtotal = computed(() =>
      cartStore.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    );
    const discountAmount = computed(() => cartSubtotal.value * 0.1); // Example: 10% discount
    const cartTotal = computed(() => cartSubtotal.value - discountAmount.value);

    // Actions
    const removeFromCart = (id) => cartStore.removeFromCart(id);
    const clearCart = () => cartStore.clearCart();
    const proceedToCheckout = () => {
      alert("Proceeding to checkout...");
    };

    return {
      cartItems,
      cartSubtotal,
      discountAmount,
      cartTotal,
      removeFromCart,
      clearCart,
      proceedToCheckout,
    };
  },
};
</script>

<style scoped>
.cart-section {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 200px); /* Adjust based on header/footer height */
}

.cart-content {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
}

/* Cart Items Section */
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

.item-details h3 {
  font-size: 1rem;
  font-weight: bold;
  color: #26355d;
}

.price {
  font-size: 0.9rem;
  font-weight: bold;
  color: #ff5722;
}

/* Order Summary Section */
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

/* Center the Empty Cart Section */
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 200px); /* Center vertically */
  font-size: 1.2rem;
  color: #7e8b99;
}

.go-back {
  color: #a240de;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cart-content {
    flex-direction: column;
  }

  .cart-summary {
    margin-top: 2rem;
  }
}
</style>
