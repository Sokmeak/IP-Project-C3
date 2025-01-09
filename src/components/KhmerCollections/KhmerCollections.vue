<script>
// import MenproductData from "../Data/MenProductData.js";
import KhmerCollectionCard from "./KhmerCollectionCard.vue";
import { useProductStore } from "@/stores/product";
import { onMounted, ref, computed } from "vue";

export default {
  name: "KhmerCollections",
  props:{
    type:String
  },
  components: {
    KhmerCollectionCard,
  },
  setup(props) {
    const productStore = useProductStore();
    onMounted(() => {
      productStore.fetchProducts();
    });

    const khmerCollections = computed(() => productStore.getBestOfferProducts(props.type));

    return {
      khmerCollections,
    };
  },

  data() {
    return {
      // collections: [
      //   {
      //     imgSrc: "../../public/images/Krama.png",
      //     name: "Kramas",
      //     description:
      //       "Khmer traditional towel use in many things, like taking shower and for swiping.",
      //   },
      //   {
      //     imgSrc: "../../public/images/WomenHole.png",
      //     name: "Women hol skirts",
      //     description:
      //       "Khmer traditional dress, rectangular cloth worn around the lower body",
      //   },
      //   {
      //     imgSrc: "../../public/images/WomenTrad.png",
      //     name: "Women traditional dresses",
      //     description: "Traditional dress for wearing to pagoda event",
      //   },
      //   {
      //     imgSrc: "../../public/images/angkorWatT-shirt.png",
      //     name: "Angkor Wat T-shirt",
      //     description: "Simple T-shirt with tons of logo of choices and color",
      //   },
      //   {
      //     imgSrc: "../../public/images/Hat.png",
      //     name: "Hats",
      //     description: "Hat and palm hat for hot or Summer season",
      //   },
      //   {
      //     imgSrc: "../../public/images/MenTrad T shirt.png",
      //     name: "Hats",
      //     description: "Nice traditional T-shirt for visiting Angkor Wat",
      //   },
      // ],
    };
  },
};
</script>

<template>
  <section class="BestOffers">
    <div class="BestOffersSectionContainer">
      <div class="header">
        <h1>Khmer Collections</h1>
      </div>
      <div class="container">
        <KhmerCollectionCard
          v-for="product in khmerCollections.slice(0, 6)"
          :key="product.productId"
          :imgSrc="product.productImages[0]"
          :name="product.productName"
          :description="product.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

.view-all-btn {
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
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
.header {
  display: flex;
  justify-content: center;
}
.BestOffersSectionContainer {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.BestOffers {
  padding: 50px 0;
  background-color: #f0dff5;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
}
</style>
