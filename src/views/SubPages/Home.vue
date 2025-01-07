<template>
  <div class="homePage">
    
    <Banner />
    <p>Welcome to Home page.</p>
    <CategorySection />
    <TrendingVideos />
    <KhmerCollections />
    <BestOffers />
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner.vue";
import MenProducts from "@/components/GeneralProducts/MenProducts.vue";

import HeroSection from "@/components/Hero/HeroSection.vue";
import KhmerCollections from "@/components/KhmerCollections/KhmerCollections.vue";
import BestOffers from "@/components/BestOffers/BestOffers.vue";
import TrendingVideos from "@/components/Videos/TrendingVideos.vue";
import CategorySection from "@/components/Categories/CategorySection.vue";

export default {
  components: {
    HeroSection,
    Banner,
    KhmerCollections,
    MenProducts,
    BestOffers,
    TrendingVideos,
    CategorySection,
  },
};
</script>

<style scoped>
.homePage {
  padding: 0.5rem;
  margin-top: 0.7rem;
}
.startComponents {
  margin-top: 4rem;
}
</style>
