<template>
  <div class="payment-methods">
    <h1>Your saved Payment methods</h1>
    <div
      v-for="method in paymentMethods"
      :key="method.id"
      class="payment-method"
    >
      <div class="card-info">
        <span class="card-brand">VISA</span>
        <span class="bank-name">Axim Bank</span>
        <span class="card-number">**** **** **** {{ method.last4 }}</span>
      </div>
      <div class="actions">
        <input
          type="radio"
          :name="'defaultCard'"
          :value="method.id"
          v-model="selectedCard"
        />
        <button @click="removeMethod(method.id)" class="delete-button">
          &#128465;
        </button>
      </div>
    </div>
    <button class="add-card-button">Add card</button>
  </div>
</template>

<script>
export default {
  name: "PaymentMethods",
  data() {
    return {
      paymentMethods: [
        { id: 1, last4: "4578", expiry: "12/24" },
        { id: 2, last4: "4578", expiry: "12/24" },
      ],
      selectedCard: null,
    };
  },
  methods: {
    removeMethod(id) {
      this.paymentMethods = this.paymentMethods.filter(
        (method) => method.id !== id
      );
      alert(`Payment method removed.`);
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
}

h1 {
  font-size: 1.5rem;
  color: #5c3b91;
  margin-bottom: 20px;
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
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-brand {
  font-weight: bold;
  color: #0056b3;
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

/* .add-card-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #d14eff;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
} */

.add-card-button {
  margin-top: 5px;
  width: 10rem;
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #a445f7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
  border-radius: 15px;
}

.add-card-button:hover {
  background-color: #b73bdb;
}
</style>
