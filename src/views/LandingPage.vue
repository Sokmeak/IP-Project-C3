<template>
  <div class="landingPage">
    <HeaderComponent />
    <HeroSection />
    <CategorySection />

    <TrendingVideos />

    <BestOffers productType="Men" />
    <BestOffers productType="Women" />

    <GeneralProducts type="Men" group="T-shirt" title="Explore Men T-Shirt" />
    <GeneralProducts type="Women" group="Skirt" title="Explore Women Skirt" />

    <serviceSection />
    <TestimonialsComponent />
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import HeroSection from "@/components/Hero/HeroSection.vue";
import CategorySection from "@/components/Categories/CategorySection.vue";
import TrendingVideos from "@/components/Videos/TrendingVideos.vue";

import Footer from "@/components/Footer.vue";
import serviceSection from "@/components/Services/serviceSection.vue";
import Testimonials from "@/components/Testimonails/Testimonials.vue";
import GeneralProducts from "@/components/GeneralProducts/GeneralProducts.vue";
import ListProducts from "@/components/ReadyToBuyProduct/ListProducts.vue";

export default {
  components: {
    HeaderComponent,
    HeroSection,
    CategorySection,
    TrendingVideos,

    BestOffers : ListProducts,
    serviceSection,
    GeneralProducts,
    TestimonialsComponent: Testimonials,
    Footer,
  },
};
</script>

<style scoped>
/* Optional: Landing page-specific styles */
.landingPage {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
