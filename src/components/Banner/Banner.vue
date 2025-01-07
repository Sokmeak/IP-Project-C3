<template>
  <div class="banner">
    <img src="./banner-image.png" alt="New Year Shopping Banner" />
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  margin-top: 3rem; /* Adds space below the navigation bar */
  text-align: center;
  /* background-color: #f8f8f8; */
  padding: 2rem 0 ;
}
.banner img {
  max-width: 100%;
  height: auto;
  border-radius: 10px; /* Optional: Adds rounded corners to the banner */
}
</style>
