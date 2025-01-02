<template>
    <div class="payment-methods">
      <h1>Payment Methods</h1>
      <p>You have {{ paymentMethods.length }} saved payment methods.</p>
      <div v-for="method in paymentMethods" :key="method.id" class="payment-method">
        <p>Card: **** **** **** {{ method.last4 }}</p>
        <p>Expires: {{ method.expiry }}</p>
        <button @click="removeMethod(method.id)">Remove</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PaymentMethods",
    data() {
      return {
        paymentMethods: [
          { id: 1, last4: "1234", expiry: "12/24" },
          { id: 2, last4: "5678", expiry: "01/25" },
        ],
      };
    },
    methods: {
      removeMethod(id) {
        this.paymentMethods = this.paymentMethods.filter((method) => method.id !== id);
        alert(`Payment method removed.`);
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-methods {
    display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 20px;
  }
  .payment-methods h1{
    font-size: 2rem;
    text-align: center; 
    margin-bottom: px;

  }
  
  .payment-method {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 8px 12px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e63939;
  }
  </style>
  