<template>
  <div class="product-page">
    <HeaderComponent />
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import Footer from "@/components/Footer.vue";
import { useCartStore } from "@/stores/cart";

export default {
  name: "ProductPage",
  components: {
    HeaderComponent,
    Footer,
  },
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  computed: {
    cartStore() {
      return useCartStore();
    },
  },
  mounted() {
    const productId = this.id || this.$route.params.id;
    this.product = this.cartStore.cartItems.find(
      (item) => item.id === productId
    );
    if (!this.product) {
      console.error("Product not found!");
    }
  },
};
</script>

<style scoped>
.product-page {
  padding: 2rem;
  text-align: center;
}
.product-page img {
  max-width: 300px;
  margin: 1rem 0;
}
</style>
