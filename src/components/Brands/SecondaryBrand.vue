<template>
  <DefaultBrand :font-color1="color1" :font-color2="color2"></DefaultBrand>
</template>
<script>
import DefaultBrand from "./DefaultBrand.vue";
export default {
  components: {
    DefaultBrand,
  },
  data() {
    return {
      color1: "#FFFFFF",
      color2: "#FFDB00",
    };
  },
};
</script>
<style></style>
