<template>
  <div>
    <!-- Header -->
    <HeaderComponent />

    <!-- Shipping Page Content -->
    <div class="shipping-page">
      <h1>Shipping Information</h1>

      <form class="shipping-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" id="address" v-model="form.address" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    HeaderComponent,
    Footer,
  },
  data() {
    return {
      form: {
        name: "",
        address: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("Shipping details submitted successfully!");
    },
  },
};
</script>

<style scoped>
.shipping-page {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.shipping-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.submit-btn {
  background: #4caf50;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
