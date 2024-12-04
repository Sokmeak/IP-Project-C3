<!-- <template>
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
export default {};
</script> -->

<!-- <style scoped></style> -->

<template>
  <!-- Show the PageLoader if loading is not complete -->
  <PageLoader v-if="!isLoaded" />

  <!-- Show the HomePage after loading is complete -->
  <template v-else> <RouterView /></template>
</template>

<script>
import PageLoader from "./components/PageLoader.vue";

import { RouterView } from "vue-router";

export default {
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
      }, 3000); // Simulate loading time (3 seconds)
    },
  },
  created() {
    // Listen to router events
    this.$router.beforeEach((to, from, next) => {
      this.startLoading(); // Start loader when navigation begins
      next(); // Allow navigation
    });

    this.$router.afterEach(() => {
      this.finishLoading(); // End loader when navigation completes
    });
  },
};
</script>

<style scoped></style>
