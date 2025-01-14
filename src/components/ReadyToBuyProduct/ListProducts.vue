<template>
  <section class="ProductListSection" :style="{ backgroundColor: bgColor }">
    <div class="ProjectListContainer">
      <div class="header">
        <h1>{{ title }}</h1>
        <!-- <div class="seemore">see more</div> -->

        <!-- <div class="view-all-btn">View All</div> -->

        <PrimaryButton
          v-if="showViewAll"
          class="view-all-btn"
          content="View All"
          type="button"
          @click="loadMore"
        ></PrimaryButton>


        <PrimaryButton
          v-if="showViewFewer"
          class="view-all-btn"
          content="View Fewer "
          type="button"
          @click="loadFewer"
        ></PrimaryButton>
      </div>

      <div class="container">
        <!-- We can use v-if here -->

        <RTBProduct
          v-for="(item, index) in collections.slice(0, displayedItems)"
          :key="index"
          :id="item.productId"
          :imgSrc="item.productImages[0]"
          :name="item.productName"
          :description="item.description"
          :originalPrice="item.price"
          :rating="item.rating"
          :promotionPercentage="item.promotionPercentage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import RTBProduct from "./RTBProductCard.vue";
import { useProductStore } from "@/stores/product";
import { onMounted, computed } from "vue";
export default {
  name: "ListProducts",
  props: {
    productType: String,
    title: {
      type: String,
      default: "Best Offer for Today",
    },
    group: String,
    bgColor: {
      type: String,
      default: "white",
    },
  },

  components: {
    RTBProduct,
    PrimaryButton,
  },

  methods: {
    loadMore() {
      this.displayedItems += this.collections.length;
    },
    loadFewer() {
      this.displayedItems = Math.min(6, this.collections.length);
    },
  },

  setup(props) {
    const productStore = useProductStore();

    console.log(props.productType);

    onMounted(() => {
      productStore.fetchProducts();
    });
    // parse the parameter here

    const collections = computed(() =>
      // productStore.getBestOfferProducts(props.productType)
      productStore.getProductByTypeAndGroup(props.productType, props.group)
    );

    return {
      collections,
    };
  },

  computed: {
    showViewAll() {
      return this.displayedItems <= Math.min(6,this.collections.length);
    },
    showViewFewer() {
      return this.displayedItems > Math.max(6,this.collections.length);
    },
  },

  data() {
    return {
      displayedItems: 6,

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
      //     imgSrc: "../../public/images/angkorWatT-shirt.jpg",
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
      //     name: "Men Traditional T-shirt",
      //     description: "Nice traditional T-shirt for visiting Angkor Wat",
      //   },
      // ],
    };
  },

  // setup() {
  //   const productStore = useProductStore();
  //   productStore.fetchProducts(); // Fetch products from API
  //   return { productStore };
  // },
  // methods: {
  //   fetchBestProducts() {
  //     this.colloection= this.productStore.getBestForTodayProducts;
  //   },
  // },
  // watch: {
  //   // Automatically fetch best products when `type` changes
  //   type() {
  //     this.fetchBestProducts();
  //   },
  // },
};
</script>

<style scoped>
.view-all-btn {
  border: 1px solid #000;
  background-color: rgb(241, 241, 241);
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
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5rem 0 5rem;
}

.seemore {
  text-decoration: underline;
  color: blue;
}
.ProjectListContainer {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.ProductListSection {
  padding: 50px 0;
  /* background-color: #f0dff5; */
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
}
</style>
