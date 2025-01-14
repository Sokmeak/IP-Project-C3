<template>
  <div class="shipping-page">
    <div class="left-header">
      <!-- Default Brand Logo -->
      <DefaultBrand class="logo" />

      <!-- Progress Steps -->
      <div class="steps">
        <span class="step completed">Cart</span>
        <span class="step active">Shipping</span>
        <span class="step">Checkout</span>
      </div>
    </div>

    <!-- Shipping Layout -->
    <div class="shipping-layout">
      <!-- Left Section: Delivery Form -->
      <div class="delivery-form">
        <h2>Delivery</h2>
        <form>
          <!-- Country Selector -->
          <label for="country">Country</label>
          <select id="country" class="full-width">
            <option value="Turkey">Turkey</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

          <!-- First Name & Last Name -->
          <div class="form-row">
            <input
              type="text"
              v-model="firstName"
              placeholder="First name"
              class="half-width"
            />
            <input
              type="text"
              v-model="lastName"
              placeholder="Last name"
              class="half-width"
            />
          </div>

          <!-- Address -->
          <input
            type="text"
            v-model="address"
            placeholder="Address"
            class="full-width"
          />
          <input
            type="text"
            v-model="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            class="full-width"
          />

          <!-- Postal Code & City -->
          <div class="form-row">
            <input
              type="text"
              v-model="postalCode"
              placeholder="Postal code"
              class="half-width"
            />
            <input
              type="text"
              v-model="city"
              placeholder="City"
              class="half-width"
            />
          </div>

          <!-- Phone Number -->
          <input
            type="text"
            v-model="phone"
            placeholder="Phone"
            class="full-width"
          />

          <!-- Save Information Checkbox -->
          <label class="checkbox-label">
            <input type="checkbox" v-model="saveInfo" />
            Save this information for next time
          </label>

          <!-- Shipping Method -->
          <h3>Shipping method</h3>
          <div class="shipping-options">
            <label class="shipping-option">
              <input
                type="radio"
                name="shipping"
                value="standard"
                @change="setShippingMethod('standard')"
                checked
              />
              <span>Standard Kargo</span>
              <span>Free</span>
            </label>
            <label class="shipping-option">
              <input
                type="radio"
                name="shipping"
                value="express"
                @change="setShippingMethod('express')"
              />
              <span>Sigortalı Kargo</span>
              <span>₺24.99</span>
            </label>
          </div>
        </form>
      </div>

      <!-- Right Section: Payment Details -->
      <div class="product-summary">
        <!-- Offer Input -->
        <div class="offer-input">
          <p>Offers</p>
          <a href="#">Add Code</a>
        </div>

        <!-- Payment Details -->
        <div class="payment-details">
          <h4>Payment Details</h4>
          <div class="payment-row">
            <span>Order</span>
            <span>${{ orderTotal }}</span>
          </div>
          <div class="payment-row">
            <span>Delivery</span>
            <span
              >${{ deliveryFee === 0 ? "Free" : deliveryFee.toFixed(2) }}</span
            >
          </div>
          <div class="payment-row total">
            <span>Total</span>
            <span>${{ total }}</span>
          </div>
        </div>

        <!-- Confirm and Back Buttons -->
        <button class="confirm-btn" @click="confirmCheckout">
          Confirm checkout
        </button>
        <a class="back-link" @click="goBackToCart">← Back</a>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultBrand from "@/components/Brands/DefaultBrand.vue";
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    DefaultBrand,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    // Retrieve the order total passed from ProductCart
    const orderTotal = ref(parseFloat(route.query.subtotal) || 0);

    // Delivery Fee and Total Price
    const deliveryFee = ref(0); // Default to Free for standard shipping
    const total = computed(() => orderTotal.value + deliveryFee.value);

    // Form Fields
    const firstName = ref("");
    const lastName = ref("");
    const address = ref("");
    const apartment = ref("");
    const postalCode = ref("");
    const city = ref("");
    const phone = ref("");
    const saveInfo = ref(false);

    // Set shipping method and update delivery fee
    const setShippingMethod = (method) => {
      deliveryFee.value = method === "standard" ? 0 : 24.99; // Set fees for different methods
    };

    // Confirm checkout: Navigate to ProductCheckout page
    const confirmCheckout = () => {
      if (
        !firstName.value ||
        !lastName.value ||
        !address.value ||
        !postalCode.value ||
        !city.value ||
        !phone.value
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      // Navigate to ProductCheckout and pass data as query params
      router.push({
        name: "ProductCheckout",
        query: {
          orderTotal: orderTotal.value,
          deliveryFee: deliveryFee.value,
          total: total.value,
          address: `${address.value}, ${apartment.value}, ${city.value}, ${postalCode.value}`,
        },
      });
    };

    // Navigate back to ProductCart
    const goBackToCart = () => {
      router.push({ name: "ProductCart" });
    };

    return {
      orderTotal,
      deliveryFee,
      total,
      firstName,
      lastName,
      address,
      apartment,
      postalCode,
      city,
      phone,
      saveInfo,
      setShippingMethod,
      confirmCheckout,
      goBackToCart,
    };
  },
};
</script>

<style scoped>
/* General Layout */
.shipping-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the left */
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #26355d;
}

.left-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.steps {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.step {
  font-size: 1rem;
  color: #888;
}

.step.completed {
  font-weight: bold;
  color: #4caf50;
}

.step.active {
  font-weight: bold;
  color: #ff9800;
}

.shipping-layout {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;
}

/* Delivery Form */
.delivery-form {
  flex: 2;
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.delivery-form h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.delivery-form input,
.delivery-form select {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.full-width {
  width: 100%;
}

.half-width {
  width: calc(50% - 0.75rem);
}

.form-row {
  display: flex;
  gap: 1.5rem;
}

.shipping-options {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.shipping-option {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f7f7f7;
}

/* Product Summary */
.product-summary {
  flex: 1.5;
  background: #f0dff5;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.payment-details {
  margin: 2rem 0;
  padding: 1.5rem; /* Add padding for inner spacing */
  background: #ffffff; /* Light background color for contrast */
  border-radius: 12px; /* Smooth rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border: 1px solid #ddd; /* Optional: Add a border for a defined outline */
}

.payment-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.payment-row.total {
  font-weight: bold;
  border-top: 1px solid #ddd;
  padding-top: 1.5rem;
}

.offer-input {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1.5rem; /* Add padding for inner spacing */
  background: #ffffff; /* Light background color for contrast */
  border-radius: 12px; /* Smooth rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border: 1px solid #ddd; /* Optional: Add a border for a defined outline */
}

.confirm-btn {
  background: #26355D;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.confirm-btn:hover {
  background: #303f9f;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
}
</style>
