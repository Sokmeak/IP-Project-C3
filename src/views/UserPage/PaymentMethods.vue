<template>
  <div class="payment-methods">
    <h1>Your Saved Payment Methods</h1>
     <!-- Display message if no payment methods are saved -->
     <div v-if="paymentMethods.length === 0" class="no-methods">
      <p>You have no saved payment methods.</p>
    </div>
    <!-- List Saved Payment Methods -->
    <div
      v-for="method in paymentMethods"
      :key="method.id"
      class="payment-method"
    >
      <div class="card-info">
        <img
          v-if="method.brand"
          :src="method.brand"
          alt="Card Brand"
          class="card-brand-logo"
        />
        <span class="card-number">**** **** **** {{ method.last4 }}</span>
        <span class="card-expiry">expires on {{ method.expiry }}</span>
      </div>
      <div class="actions">
        <input
          type="radio"
          :name="'defaultCard'"
          :value="method.id"
          v-model="selectedCard"
          aria-label="Set as default payment method"
        />
        <button
          @click="removeMethod(method.id)"
          class="delete-button"
          :aria-label="`Remove card ending in ${method.last4}`"
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>

    <!-- Button to Show AddPaymentMethod Modal -->
    <button class="add-card-button" @click="toggleAddCardForm">
      Add Payment 
    </button>

    <!-- AddPaymentMethod Modal -->
    <AddPayment
      v-if="showAddCardForm"
      @add-card="addNewPaymentMethod"
      @close="toggleAddCardForm"
    />
  </div>
</template>

<script>
import AddPayment from "@/components/AddPayment.vue";

export default {
  components: {
    AddPayment,
  },
  data() {
    return {
      paymentMethods: [], // Store all saved payment methods
      selectedCard: null, // Tracks the selected default card
      showAddCardForm: false, // Controls modal visibility
      currentEmail: "", // Store the current user's email
    };
  },
  created() {
    // Get the current user's email from localStorage
    this.currentEmail = localStorage.getItem("currentEmail");

    // Load payment methods for the current user
    this.loadPaymentMethods();
  },
  methods: {
    toggleAddCardForm() {
      this.showAddCardForm = !this.showAddCardForm; // Show/Hide AddPaymentMethod modal
    },
    getCardBrand(cardNumber) {
      const firstDigit = cardNumber.charAt(0);
      switch (firstDigit) {
        case "4":
          return "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg";
        case "5":
          return "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg";
        default:
          return "Card Brand";
      }
    },
    addNewPaymentMethod(newCard) {
      const card = {
        id: Date.now(),
        last4: newCard.number.slice(-4),
        expiry: newCard.expiry, // Add expiry date
        brand: this.getCardBrand(newCard.number), // Determine card brand
      };
      this.paymentMethods.push(card); // Add new card to the list
      this.updatePaymentMethods(); // Update payment methods in localStorage
    },
    removeMethod(id) {
      this.paymentMethods = this.paymentMethods.filter(
        (method) => method.id !== id
      ); // Remove a card by its ID
      this.updatePaymentMethods(); // Update payment methods in localStorage
    },
    loadPaymentMethods() {
      // Load payment methods for the current user from localStorage
      const key = `paymentMethods_${this.currentEmail}`;
      const savedMethods = localStorage.getItem(key);
      if (savedMethods) {
        this.paymentMethods = JSON.parse(savedMethods);
      }
    },
    updatePaymentMethods() {
      // Save the payment methods for the current user to localStorage
      const key = `paymentMethods_${this.currentEmail}`;
      localStorage.setItem(key, JSON.stringify(this.paymentMethods));
    },
  },
};
</script>

<style scoped>
.payment-methods {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f5ff;
  padding: 20px;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 1.8rem;
  color: #5c3b91;
  margin-bottom: 20px;
  text-align: center;
}

.payment-method {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-info {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.card-brand-logo {
  width: 40px; /* Adjust size as needed */
  height: auto;
  margin-bottom: 5px;
}

.bank-name {
  font-size: 0.9rem;
  color: #555;
}

.card-number {
  font-size: 1rem;
  color: #333;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type="radio"] {
  accent-color: #5c3b91;
  cursor: pointer;
}

.delete-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #ff4d4d;
  cursor: pointer;
}

.delete-button:hover {
  color: #e63939;
}

.add-card-button {
  margin-top: 10px;
  padding: 12px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #a445f7;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-card-button:hover {
  background-color: #b73bdb;
}

@media (max-width: 500px) {
  .payment-method {
    flex-direction: column;
    align-items: flex-start;
  }

  .actions {
    margin-top: 10px;
    justify-content: flex-start;
  }

  .add-card-button {
    width: 100%;
  }
}
</style>
