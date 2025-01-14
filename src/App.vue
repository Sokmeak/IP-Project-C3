<template>
  <!-- <PageLoader v-if="!isLoaded" /> -->

  <!-- Show the HomePage after loading is complete -->
  <!-- <template v-else> <RouterView /></template> -->
  <RouterView />
  <!-- <ProductDeailsLayout/> -->
</template>

<script>
import PageLoader from "@/components/PageLoader.vue";
import ProductDeailsLayout from "./views/SubPages/ProductDeailsLayout.vue";

export default {
  name: "App",
  components: {
    PageLoader,
    ProductDeailsLayout,
  },
  data() {
    return {
      isLoaded: true,
    };
  },
  methods: {
    startLoading() {
      this.isLoaded = false;
    },
    finishLoading() {
      setTimeout(() => {
        this.isLoaded = true; // Hide loader after delay
      }, 1000); // Simulate loading time (2 seconds)
    },
    shouldLoad(to) {
      // Restrict loading if navigating to the user page
      const userPagePath = `/userpage/`; // Adjust if necessary
      const productPath = `/product/`;
      return (
        !to.path.startsWith(userPagePath) && !to.path.startsWith(productPath)
      );
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (this.shouldLoad(to)) {
        this.startLoading(); // Start loader when navigation begins
      }

      next(); // Allow navigation
    });

    this.$router.afterEach((to) => {
      if (this.shouldLoad(to)) {
        this.finishLoading(); // End loader when navigation completes
      }
    });
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
