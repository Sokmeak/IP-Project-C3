<template>
  <div class="mainLayout">
    <HeaderComponent />

    <!-- The content here should be dynamic by using router link -->

    <!-- apply the page loader here -->


     <!-- Section for child components with a loader -->
     <section class="child-section">
        <PageLoader v-if="!isLoaded" />
        <div v-else class="child-content">
          <router-view />
        </div>
      </section>

     

    <!-- <Home /> -->

    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import PageLoader from "@/components/PageLoader.vue";
import { RouterLink,RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
import Home from "./SubPages/Home.vue";

export default {
  components: {
    HeaderComponent,
    Home,
    Footer,
    PageLoader,
  },
  data(){
    return {
      isLoaded: true,
    }
  },

  methods: {
    startLoading() {
      this.isLoaded = false;
    },
    finishLoading() {
      setTimeout(() => {
        this.isLoaded = true; // Hide loader after delay
      }, 1000); // Simulate loading time
    },
  },
  created() {
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

.child-section > .v-if {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 10;
}
</style>
