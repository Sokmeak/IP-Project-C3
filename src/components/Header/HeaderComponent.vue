<template>
  <header class="header">
    <!-- Updated Brand Section -->
    <!-- <div class="default-brand">
      <img src="../../../public/images/defaultLogo.png" alt="aa-logo" />
      <div class="brand-name">
        <span :style="{ color: fontColor1 }">Angkor </span>
        <span :style="{ color: fontColor2 }">Apparel</span>
      </div>
    </div> -->

    <!-- Navigation Menu -->
    <SecodaryBrand />
    <div class="classify-wrapper nav">
      <li>Men</li>
      <li>Women</li>
      <li>Children</li>
    </div>

    <!-- Actions -->
    <div class="actions">
      <!-- <i class="fa fa-search"></i> -->
      <div class="search-container">
        <input type="text" placeholder="Search" class="search-bar" />
      </div>
      <div class="iconWrapper">
        <i @click="GoToAccount" class="fa fa-user fa-xl"></i>
        <i @click="GoToshoppingCards" class="fa fa-shopping-cart fa-xl"></i>
      </div>
    </div>
  </header>
</template>

<script>
import SecodaryBrand from "../Brands/SecondaryBrand.vue";
export default {
  name: "HeaderComponent",
  components: {
    SecodaryBrand,
  },
  // Control by route in stead
  methods: {
    GoToAccount() {
      alert("Redirecting to user account....");
    },
    GoToshoppingCards() {
      alert("Redirecting to Shopping Cards");
    },
  },

  // props: {
  //   fontColor1: {
  //     type: String,
  //     default: "#ffffff", // Default color for the first part of the text
  //   },
  //   fontColor2: {
  //     type: String,
  //     default: "#ffdb00", // Default color for the second part of the text
  //   },
  // },
};
</script>

<style scoped>
.search-container {
  position: relative;
  display: inline-block;
}
.search-container::before {
  content: "\f002"; /* Unicode for the Font Awesome search icon */
  font-family: "Font Awesome 5 Free"; /* Ensure you are using Font Awesome */
  font-weight: 600; /* Font Awesome weight for solid icons */
  position: absolute;
  left: 10px; /* Adjust position as needed */
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px; /* Adjust icon size */
  color: #aaa; /* Adjust icon color */
}
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #a240de;
  padding: 1rem 2rem;
  color: white;
  position: fixed;
  z-index: 99;
}
.classify-wrapper {
  margin-top: 1.5 rem;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
  color: #ffdb00;
  font-weight: 500;
  font-size: 20px;
  gap: 5rem;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.nav li {
  cursor: pointer;
}
.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}
/* .search-bar {
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  border-radius: 20px;
} */
.search-bar {
  width: 100%;
  padding: 8px 40px; /* Adjust padding to make space for the icon */
  font-size: 16px;
  border-radius: 20px;
  border: none;
}
.fa {
  cursor: pointer;
}
.iconWrapper {
  margin-left: 1rem;
  width: 100px;
  display: flex;
  gap: 3rem;
}
/* .fa-search {
  position: absolute;
  top: 13px;
  color: #8a8a8a;
} */
</style>
