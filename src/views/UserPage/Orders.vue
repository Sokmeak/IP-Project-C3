<template>
  <div class="orders">
    <div v-for="order in orders" :key="order.id" class="order-card">
      <div class="order-header">
        <span
          :class="{
            'status-pending': order.status === 'Pending',
            'status-delivered': order.status === 'Delivered',
          }"
        >
          <i
            :class="{
              'fa-regular fa-hourglass-half': order.status === 'Pending',
              'fa-regular fa-circle-check': order.status === 'Delivered',
            }"
          ></i>
          {{ order.status }}
        </span>
        <span class="delivery-info">
          {{ order.deliveryInfo }}
        </span>
      </div>
      <div class="order-container">
        <div class="order-body">
          <div v-for="item in order.items" :key="item.name" class="order-item">
            <div class="item-image"></div>
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p>Quantity: {{ item.quantity }}</p>
              <p>Price: ${{ item.price }}</p>
            </div>
          </div>
        </div>
        <div class="order-actions">
          <button class="track-button">Track orders</button>
          <button class="details-button" @click="viewOrder(order.id)">
            View details
          </button>
          <button class="invoice-button">Get invoice</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {
      orders: [
        {
          id: 101,
          status: "Pending",
          deliveryInfo: "arrives tomorrow (Mon, 10 Dec | 10am - 11am)",
          items: [
            { name: "Angkor Wat T-shirt", quantity: 1, price: 10.0 },
            { name: "Angkor Wat Pants", quantity: 2, price: 15.0 },
          ],
        },
        {
          id: 102,
          status: "Delivered",
          deliveryInfo: "Saturday, 8 December",
          items: [
            { name: "Angkor Wat T-shirt", quantity: 1, price: 10.0 },
            { name: "Angkor Wat Pants", quantity: 2, price: 15.0 },
          ],
        },
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
  background-color: #f9f3fc;
  border-radius: 10px;
  padding: 20px;
}

.orders h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #7e8b99;
}

.order-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.order-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
}

.order-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.status-pending {
  color: #ff9800;
  font-weight: bold;
}

.status-delivered {
  color: #4caf50;
  font-weight: bold;
}

.delivery-info {
  font-size: 0.9rem;
  color: #555;
}

.order-body {
  display: flex;
  width: 50%;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px 10px 10px;
  gap: 15px;
  margin: 15px 10px 10px 10px;
  border-left: 4px solid #9b51e0;
}

.order-item {
  display: flex;
  padding-left: 10px;
  gap: 10px;
}

.item-image {
  width: 60px;
  height: 60px;
  background-color: #d3b0ff;
  border-radius: 5px;
}

.item-details h4 {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.item-details p {
  margin: 2px 0;
  font-size: 0.9rem;
  color: #555;
}

.order-actions {
  display: flex;
  width:30%;
  flex-direction: column;
  gap: 10px;
  margin: 15px 10px 10px 10px;
  padding:10px ;
  align-items: flex-start;
}

button {
  flex: 1;
  width:90%;
  padding: 10px 15px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.track-button {
  background-color: #9b51e0;
  
  color: white;
}

.track-button:hover {
  background-color: #7a3db3;
}

.details-button {
  background-color: #555;
  color: white;
}

.details-button:hover {
  background-color: #333;
}

.invoice-button {
  background-color: #f44336;
  color: white;
}

.invoice-button:hover {
  background-color: #d32f2f;
}
</style>
