<template>
  <div class="orders">
    <h1>My Orders</h1>
    <div v-for="order in orders" :key="order.id" class="order">
      <h3>Order #{{ order.id }}</h3>
      <p>Status: {{ order.status }}</p>
      <p>Total: ${{ order.total }}</p>
      <button @click="viewOrder(order.id)">View Details</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {
      orders: [
        { id: 101, status: "Pending", total: 50 },
        { id: 102, status: "Delivered", total: 80 },
      ],
    };
  },
  methods: {
    viewOrder(id) {
      alert(`Viewing details for order #${id}`);
      // Logic to navigate to order details page can go here.
    },
  },
};
</script>

<style scoped>
.orders {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 20px;
}

.orders h1 {
  
  font-size: 3rem;
  text-align: center;
  margin-bottom: 10px;
}
.order{
  margin: 20px 0 10px;
}

button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
