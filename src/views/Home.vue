<template>
  <div class="homePage">
    <HeaderComponent />

    <MenProducts />
    <!-- <div class="startComponents">
      <BestOffers />
    </div>


     
    <KhmerCollections />
    <BestOffers />
    <KhmerCollections />
   -->


   

    <!--  -->
   <!--  -->

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
import MenProducts from "@/components/GeneralProducts/MenProducts.vue";

export default {
  components: {
    HeaderComponent,
    HeroSection,
    CategorySection,
    TrendingVideos,
    KhmerCollections,
    BestOffers,
    MenProducts,

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
  /* gap: 1rem; */
}
.startComponents {
  margin-top: 4rem;
}
</style>
