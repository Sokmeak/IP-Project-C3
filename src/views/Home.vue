<template>
  <div class="homePage">
    <HeaderComponent />
    <div class="startComponents">
      <KhmerCollections />
    </div>

    
    <BestOffers />
    <KhmerCollections />
    <BestOffers />

    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import HeroSection from "@/components/Hero/HeroSection.vue";
import CategorySection from "@/components/Categories/CategorySection.vue";
import TrendingVideos from "@/components/Videos/TrendingVideos.vue";
import KhmerCollections from "@/components/KhmerCollections/KhmerCollections.vue";
import BestOffers from "@/components/BestOffers/BesfOffers.vue";
import Footer from "@/components/Footer.vue";
import serviceSection from "@/components/Services/serviceSection.vue";
import TestimonialsComponent from "@/components/Testimonails/Testimonials.vue";

export default {
  components: {
    HeaderComponent,
    HeroSection,
    CategorySection,
    TrendingVideos,
    KhmerCollections,
    BestOffers,

    serviceSection,
    TestimonialsComponent,
    Footer,
  },
};
</script>

<style scoped>
/* Optional: Landing page-specific styles */
.homePage {
  /* margin-top: 5rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.startComponents{
  margin-top: 2rem;
}
</style>
