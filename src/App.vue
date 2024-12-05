<template>
  <div class="wrapper">
    <Home/>
    <serviceSection/>
    <Footer />

  </div>
</template>

<script>


import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import ServiceSection from "./components/serviceSection.vue";


export default {
  components: {

    ServiceSection,
    Footer,
  },
};
</script>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.wrapper > :nth-child(2) {
  margin-top: auto;
}
</style>
