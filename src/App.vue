<template>
  <div class="wrapper">
    <Home/>
    <Footer />

  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";

export default {
  components: {
    
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
