<template>
  <div class="homePage">
    <HeaderComponent />
    <Banner />
    <!-- <div class="startComponents">
      <MenProducts />
    </div> -->

    <CategorySection />

    <TrendingVideos />
    <KhmerCollections />
    <BestOffers />
    <!-- <KhmerCollections /> -->

    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import Banner from "@/components/Banner/Banner.vue";
import MenProducts from "@/components/GeneralProducts/MenProducts.vue";
import Footer from "@/components/Footer.vue";
import HeroSection from "@/components/Hero/HeroSection.vue";
import KhmerCollections from "@/components/KhmerCollections/KhmerCollections.vue";
import BestOffers from "@/components/BestOffers/BestOffers.vue";
import TrendingVideos from "@/components/Videos/TrendingVideos.vue";
import CategorySection from "@/components/Categories/CategorySection.vue";

export default {
  components: {
    HeaderComponent,
    HeroSection,
    Banner,
    KhmerCollections,
    MenProducts,
    BestOffers,
    Footer,
    TrendingVideos,
    CategorySection,
  },
};
</script>

<style scoped>
.homePage {
  display: flex;
  flex-direction: column;
}
.startComponents {
  margin-top: 4rem;
}
</style>
