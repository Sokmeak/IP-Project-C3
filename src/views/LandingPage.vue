<template>
  <div>
    <HeaderComponent />
    <HeroSection />
    <CategorySection />
    <TrendingVideos />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import HeroSection from "@/components/Hero/HeroSection.vue";
import CategorySection from "@/components/Categories/CategorySection.vue";
import TrendingVideos from "@/components/Videos/TrendingVideos.vue";

export default {
  components: {
    HeaderComponent,
    HeroSection,
    CategorySection,
    TrendingVideos,
  },
};
</script>

<style scoped>
/* Optional: Landing page-specific styles */
</style>
