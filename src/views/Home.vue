<template>
  <div class="homePage">
    <HeaderComponent />
    <Banner />
    <div class="startComponents">
      <MenProducts />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import Banner from "@/components/Banner/Banner.vue";
import MenProducts from "@/components/GeneralProducts/MenProducts.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    HeaderComponent,
    Banner,
    MenProducts,
    Footer,
  },
};
</script>

<style scoped>
.homePage {
  display: flex;
  flex-direction: column;
}
.startComponents {
  margin-top: 2rem;
}
</style>
