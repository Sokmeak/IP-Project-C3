<template>
  <div class="default-brand">

    <!-- How can pass a function click from default branch to secondary branch to banner component that secodary is the parent of default and the banner is the parent of secondary? -->
    <img src="../../../public/images/defaultLogo.png" alt="aa-logo" />
    <div class="brand-name">
      <span :style="{ color: fontColor1 }">Angkor </span>
      <span :style="{ color: fontColor2 }">Apparel</span>

      <!-- <span style="color: #ffdb00">{{ fontColor1 }}</span> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fontColor1: String,
    fontColor2: String,
    
  },

  
};
</script>
<style scoped>
.default-brand {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

img {
  width: 4rem;
  height: 4rem;
}

.brand-name {
  font-family: "Sansita", sans-serif;
  font-size: 40px;
  font-weight: 800;
  color: #26355d;
  font-style: italic;
}
</style>
