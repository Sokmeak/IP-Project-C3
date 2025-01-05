<template>
  <section class="product-section">
    <div class="header">
      <h2>{{ title }}</h2>
      <button class="view-more">View All</button>
    </div>
    <div class="product-grid">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :imgSrc="product.imgSrc"
        :name="product.name"
        :description="product.description"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "GeneralProducts",
  components: {
    ProductCard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-section {
  padding: 2rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
</style>
