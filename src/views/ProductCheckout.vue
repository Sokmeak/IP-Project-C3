<template>
  <div class="checkout-page">
    <div class="left-header">
      <!-- Default Brand Logo -->
      <DefaultBrand class="logo" />

      <!-- Progress Steps -->
      <div class="steps">
        <span class="step completed">Cart</span>
        <span class="step completed">Shipping</span>
        <span :class="['step', payStatus ? 'completed' : 'active']"
          >Checkout</span
        >
      </div>
    </div>

    <!-- Checkout Layout -->
    <div class="checkout-layout">
      <!-- Left Section: Payment Methods -->
      <div class="payment-methods">
        <h2>Payment Method</h2>

        <!-- Google Pay -->
        <div
          class="method-selector clickable"
          @click="selectPayment('googlePay')"
        >
          <span>Google Pay</span>
          <span class="chevron">›</span>
        </div>

        <!-- Debit Card -->
        <div class="method-selector clickable" @click="toggleShowCard">
          <span>Debit Card</span>
          <span class="chevron">›</span>
        </div>

        <!-- Debit Card Details -->
        <div v-if="displaycard" class="card-details">
          <h3>Debit Card</h3>
          <div class="card-option">
            <img src="/images/mastercard.png" alt="MasterCard" />
            <span>Axim Bank</span>
            <span>**** **** **** 4578</span>
            <input type="radio" name="card" />
          </div>
          <div class="card-option">
            <img src="/images/visa.png" alt="Visa" />
            <span>Visa Bank</span>
            <span>**** **** **** 1234</span>
            <input type="radio" name="card" />
          </div>
          <button class="add-new-card">
            <i class="fa-solid fa-plus"></i> Add New Card
          </button>
        </div>

        <!-- Add New Payment Method -->
        <button class="add-new-method">
          <i class="fa-solid fa-plus"></i> Add New Method
        </button>
      </div>

      <!-- Right Section: Order Summary -->
      <div class="product-summary">
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

        <!-- Address Display -->
        <div class="address-display">
          <h4>Shipping Address</h4>
          <p>{{ address }}</p>
        </div>

        <!-- Pay Now Button -->
        <button class="confirm-btn" @click="Pay">Pay Now</button>

        <!-- Back Button -->
        <a class="back-link" @click="goBackToShipping"
          ><i class="fa-solid fa-less-than"></i> Back</a
        >
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

    // Retrieve the order total and address passed from ShippingPage
    const orderTotal = ref(parseFloat(route.query.orderTotal) || 0);
    const address = ref(route.query.address || "No address provided");

    // Delivery Fee and Total Price
    const deliveryFee = ref(0);
    const total = computed(() => orderTotal.value + deliveryFee.value);

    // Selected payment method
    const selectedPayment = ref("");

    // Handle payment selection
    const selectPayment = (method) => {
      selectedPayment.value = method;
    };

    // Navigate back to ShippingPage
    const goBackToShipping = () => {
      router.push({ name: "ShippingPage" });
    };

    return {
      orderTotal,
      deliveryFee,
      total,
      address,
      selectedPayment,
      selectPayment,
      goBackToShipping,
    };
  },

  methods: {
    toggleShowCard() {
      this.displaycard = !this.displaycard;
    },
    Pay() {
      Swal.fire({
        title: '<h2 style="color:#C77AE1;">Make Payment</h2>',
        html: `
    <div style="text-align: center; margin-top: 20px;">
      <div style="background-color: #C77AE1; color: #ffffff; font-size: 40px; width: 60px; height: 60px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto;">
        <i class="fa fa-check" style="color: #fffff;font-size: 24px;"></i>
      </div>
      <h3 style="margin-top: 20px; color: #343a40;">Success</h3>
    </div>
  `,
        showConfirmButton: true,
        confirmButtonText: "Done",
        confirmButtonColor: "#a768ff",
        customClass: {
          popup: "swal-custom-popup",
        },
      });
      this.payStatus = true;
    },
  },

  data() {
    return {
      displaycard: false,
      payStatus: false,
    };
  },
};
</script>

<style scoped>
/* General Layout */
.swal-custom-popup {
  border-radius: 20px;
}
.checkout-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.checkout-layout {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;
}

/* Payment Methods */
.payment-methods {
  flex: 2;
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.method-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.method-selector:hover {
  background: #f0f0f0;
}

.card-details {
  margin-top: 2rem;
}

.card-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: #f9f9f9;
}

.card-option img {
  width: 40px;
  margin-right: 10px;
}

.add-new-card,
.add-new-method {
  background-color: #26355d;
  color: #ffffff;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}

.add-new-card:hover,
.confirm-btn:hover,
.add-new-method:hover {
  background: #303f9f;
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
  margin-bottom: 2rem;
}

.payment-row.total {
  font-weight: bold;
  border-top: 2px solid #ddd;
  padding-top: 2rem;
}

.address-display {
  margin: 2rem 0;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.confirm-btn {
  /* background: #3f51b5; */

  background-color: #26355d;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  text-align: center;
}

/* .confirm-btn:hover {
  background: #388e3c;
} */

.back-link {
  display: inline-block;
  gap: 1rem;
  margin-top: 2rem;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
}
</style>
