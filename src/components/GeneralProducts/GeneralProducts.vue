<template>
  <section class="product-section" :style="{ backgroundColor: bgColor }">
    <div class="generalProContainer">
      <div class="header">
        <h1>{{ title }}</h1>
        <!-- <div>
          <button class="view-all-btn">View All</button>
        </div> -->

        <div>
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
      </div>
      <div class="container-wrapper" ref="containerWrapper">
        <TransitionGroup
          name="product"
          tag="div"
          class="container"
          @before-enter="setHeightBeforeEnter"
          @enter="setHeightAfterEnter"
          @before-leave="setHeightBeforeLeave"
          @leave="setHeightAfterLeave"
        >
          <ProductCard
            v-for="(product, index) in collections.slice(0, displayedItems)"
            :key="index"
            :imgSrc="product.productImages[0]"
            :name="product.productName"
            :description="product.description"
            :group="product.productGroup"
            :product-type="product.productType"
          />
        </TransitionGroup>
        <!-- <ProductCard
          v-for="(product, index) in collections.slice(0, displayedItems)"
          :key="index"
          :imgSrc="product.productImages[0]"
          :name="product.productName"
          :description="product.description"
        /> -->
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import { TransitionGroup } from "vue";

import { onMounted, ref, computed } from "vue";
import { useProductStore } from "@/stores/product";

/*

The product should be fetched from store and filer base on type and group



*/
export default {
  name: "GeneralProducts",
  components: {
    ProductCard,
    PrimaryButton,
    TransitionGroup,
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
  methods: {
    loadMore() {
      this.displayedItems += this.collections.length;
    },
    loadFewer() {
      this.displayedItems = Math.min(3, this.collections.length);
    },

    setHeightBeforeEnter(el) {
      const wrapper = this.$refs.containerWrapper;
      wrapper.style.height = `${wrapper.offsetHeight}px`; // Fix the height before transition
    },
    setHeightAfterEnter(el) {
      const wrapper = this.$refs.containerWrapper;
      // Set height to auto after new height is calculated
      wrapper.style.height = `${wrapper.scrollHeight}px`;
      setTimeout(() => (wrapper.style.height = "auto"), 500); // Ensure smooth auto reset
    },
    setHeightBeforeLeave(el) {
      const wrapper = this.$refs.containerWrapper;
      wrapper.style.height = `${wrapper.offsetHeight}px`; // Fix the height before transition
    },
    setHeightAfterLeave(el) {
      const wrapper = this.$refs.containerWrapper;
      wrapper.style.height = `${wrapper.scrollHeight}px`; // Animate height during leave
      setTimeout(() => (wrapper.style.height = "auto"), 500);
    },
  },

  computed: {
    showViewAll() {
      return this.displayedItems <= Math.min(3, this.collections.length);
    },
    showViewFewer() {
      return this.displayedItems > Math.max(3, this.collections.length);
    },
  },
  setup(props) {
    const productStore = useProductStore();
    const containerWrapper = ref(null);

    onMounted(() => {
      productStore.fetchProducts();
    });
    const collections = computed(() =>
      productStore.getProductByTypeAndGroup(props.type, props.group)
    );

    return { collections, containerWrapper };
  },
  data() {
    return {
      displayedItems: 3,
    };
  },
};
</script>

<style scoped>
/* scale smoothly */

/* .product-enter-active,
.product-leave-active {
  transition: all 0.3s ease;
}
.product-enter {
  opacity: 0;
  transform: translateY(20px);
}
.product-leave-to {
  opacity: 0;
  transform: translateY(20px);
} */

.container-wrapper {
  transition: 0.5s ease-in-out;
  overflow: hidden; /* Prevent content overflow during transitions */
}

.product-enter-active,
.product-leave-active {
  transition: all 0.5s ease-in-out;
}

.product-enter {
  opacity: 0;
  transform: translateY(20px);
}

.product-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

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
