<template>
  <!-- Show the PageLoader if loading is not complete -->
  <PageLoader v-if="!isLoaded" />

  <!-- Show the HomePage after loading is complete -->
  <template v-else> <RouterView /></template>
  <!-- <RouterView/> -->
</template>

<script>
import PageLoader from "./components/PageLoader.vue";

import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    PageLoader,
  },
  data() {
    return {
      isLoaded: true, // Track loading state
    };
  },
  methods: {
    // Method to simulate loading
    startLoading() {
      this.isLoaded = false; // Show loader
    },
    finishLoading() {
      setTimeout(() => {
        this.isLoaded = true; // Hide loader after delay
      }, 2000); // Simulate loading time (2 seconds)
    },
    shouldLoad(to) {
      // Restrict loading if navigating to the user page
      const userPagePath = `/userpage/`; // Adjust if necessary
      return !to.path.startsWith(userPagePath);
    },
  },
  created() {
    // Listen to router events
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

.wrapper > :nth-child(2) {
  margin-top: auto;
}

/* Optional: Global styles */
</style>
