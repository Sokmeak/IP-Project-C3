<template>
  <div class="homePage">
    <Banner />

    <CategorySection />
    <TrendingVideos />
    <BestOffers title="Men Best Offers" productType="Men" />
    <BestOffers bg-color="#F0DFF5" productType="Women" />
    <BestOffers productType="Children" />

    <GeneralProducts
      bgColor="#F0DFF5"
      type="Women"
      group="Skirt"
      title="Explore Women Skirt"
    />

    <GeneralProducts type="Women" group="Skirt" title="Explore Women Skirt" />

    <GeneralProducts
      bgColor="#F0DFF5"
      type="Men"
      group="T-shirt"
      title="Explore Men T-Shirt"
    />
    <GeneralProducts type="Men" group="T-shirt" title="Explore Men T-Shirt" />
    <GeneralProducts
      bg-color="#F0DFF5"
      type="Children"
      group="Shirt"
      title="Explore Children New Outfits"
    />
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner.vue";
import MenProducts from "@/components/GeneralProducts/MenProducts.vue";

import HeroSection from "@/components/Hero/HeroSection.vue";
import ListProducts from "@/components/ReadyToBuyProduct/ListProducts.vue";
import TrendingVideos from "@/components/Videos/TrendingVideos.vue";
import CategorySection from "@/components/Categories/CategorySection.vue";
import GeneralProducts from "@/components/GeneralProducts/GeneralProducts.vue";

export default {
  components: {
    HeroSection,
    Banner,
    GeneralProducts,
    MenProducts,
    BestOffers : ListProducts,
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
