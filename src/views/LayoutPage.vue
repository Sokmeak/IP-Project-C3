<template>
  <div class="mainLayout">
    <!-- Header -->
    <HeaderComponent />

    <!-- Main Content -->
    <section class="child-section">
      <PageLoader v-if="!isLoaded" />
      <div v-else class="child-content">
        <router-view />
        <!-- This renders the child pages dynamically -->
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import Footer from "@/components/Footer.vue";
import PageLoader from "@/components/PageLoader.vue";

export default {
  components: {
    HeaderComponent,
    Footer,
    PageLoader,
  },
  data() {
    return {
      isLoaded: true, // Controls the loading spinner
    };
  },
  methods: {
    startLoading() {
      this.isLoaded = false;
    },
    finishLoading() {
      setTimeout(() => {
        this.isLoaded = true; // Simulate loading completion
      }, 1000);
    },
  },
  created() {
    // Add a navigation guard for showing loader
    this.$router.beforeEach((to, from, next) => {
      this.startLoading();
      next();
    });
    this.$router.afterEach(() => {
      this.finishLoading();
    });
  },
};
</script>

<style scoped>
.mainLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.child-section {
  flex: 1;
  padding: 1rem;
  position: relative;
}

.child-content {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
