<template>
  <header class="header">
    <!-- Updated Brand Section -->
    <div class="default-brand">
      <img src="../../../public/images/defaultLogo.png" alt="aa-logo" />
      <div class="brand-name">
        <span :style="{ color: fontColor1 }">Angkor </span>
        <span :style="{ color: fontColor2 }">Apparel</span>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="nav">
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Children</li>
      </ul>
    </nav>

    <!-- Actions -->
    <div class="actions">
      <input type="text" placeholder="Search" class="search-bar" />
      <i class="fa fa-user"></i>
      <i class="fa fa-shopping-cart"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    fontColor1: {
      type: String,
      default: "#ffffff", // Default color for the first part of the text
    },
    fontColor2: {
      type: String,
      default: "#ffdb00", // Default color for the second part of the text
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a240de;
  padding: 1rem 2rem;
  color: white;
}
.default-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.default-brand img {
  width: 40px;
  height: 40px;
}
.brand-name {
  font-family: "Sansita", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
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
}
.search-bar {
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
}
</style>
