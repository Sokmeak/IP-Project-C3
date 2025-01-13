<template>
  <section class="product-section" :style="{ backgroundColor: bgColor }">
    <div class="generalProContainer">
      <div class="header">
        <h1>{{ title }}</h1>
        <div>
          <button class="view-all-btn">View All</button>
        </div>
      </div>
      <div class="container">
        <ProductCard
          v-for="(product, index) in collections.slice(0,6)"
          :key="index"
          :imgSrc="product.productImages[0]"
          :name="product.productName"
          :description="product.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";

import { onMounted, computed } from "vue";
import { useProductStore } from "@/stores/product";

/*

The product should be fetched from store and filer base on type and group



*/
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
    bgColor: {
      type: String,
      default: "white",
    },
    type: String,
    group: String,
  },

  setup(props) {
    const productStore = useProductStore();

    onMounted(() => {
      productStore.fetchProducts();
    });
    const collections = computed(() =>
      productStore.getProductByTypeAndGroup(props.type, props.group)
    );

    return { collections };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem 0 5rem;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
}

.view-all-btn {
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 3rem;
  border-radius: 2rem;
  height: 3rem;
  font-size: 1rem;
  cursor: pointer;
  color: #000;
  transition: all 0.3s;
}

.view-all-btn:hover {
  background-color: #af47d2;
  color: white;
  border-color: #af47d2;
}
.generalProContainer {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.product-section {
  padding: 50px 0;
}
</style>
