<template>
  <header class="header">
    <!-- Brand Section -->
    <RouterLink class="link" to="/product/home">
      <SecondaryBrand />
    </RouterLink>

    <!-- Hamburger Menu for Mobile -->
    <div class="hamburger" @click="toggleMenu">
      <i class="fa fa-bars"></i>
    </div>

    <!-- Navigation Menu -->
    <div :class="['classify-wrapper nav', { active: menuActive }]">
      <li
        v-for="(items, category) in categories"
        :key="category"
        class="nav-item"
        @mouseover="hover = category"
        @mouseleave="hover = null"
      >
        <router-link
          :to="`/product/${category.toLowerCase()}`"
          class="nav-link"
          @click="closeMenu"
        >
          {{ category }}
        </router-link>

        <!-- Dropdown Menu -->
        <div class="dropdown-menu" v-if="hover === category">
          <div class="dropdown-content">
            <h3>{{ category }}</h3>
            <ul>
              <li v-for="item in items" :key="item">
                <a
                  href="#"
                  class="dropdown-link"
                  @click.prevent="goToParentCategory(category)"
                >
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </div>

    <!-- Actions -->
    <div class="actions">
      <div class="search-container">
        <input type="text" placeholder="Search" class="search-bar" />
      </div>
      <div class="iconWrapper">
        <RouterLink class="link" to="/userpage/1/account">
          <i class="fa fa-user fa-xl"></i>
        </RouterLink>
        <i @click="goToCart" class="fa fa-shopping-cart fa-xl"></i>
      </div>
    </div>
  </header>
</template>

<script>
import SecondaryBrand from "../Brands/SecondaryBrand.vue";

export default {
  name: "HeaderComponent",
  components: {
    SecondaryBrand,
  },
  data() {
    return {
      categories: {
        Men: [
          "Shirt",
          "T-shirt",
          "Pants",
          "Hats",
          "Krama",
          "Short-pants",
          "Shoes",
        ],
        Women: [
          "Blouse",
          "Sampot (Skirt)",
          "Dress",
          "Scarf (Krama)",
          "Accessories",
          "Shoes",
        ],
        Children: [
          "Shirt",
          "Pants",
          "Dresses",
          "Krama",
          "Shoes",
          "Accessories",
        ],
      },
      menuActive: false,
      hover: null,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    closeMenu() {
      this.menuActive = false;
    },
    goToCart() {
      this.$router.push("/cart");
    },
    goToParentCategory(category) {
      this.$router.push(`/product/${category.toLowerCase()}`);
    },
  },
};
</script>

<style scoped>
/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a240de;
  padding: 1rem 2rem;
  color: white;
  position: fixed;
  z-index: 99;
  width: 100%;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
}

/* Navigation Menu */
.classify-wrapper {
  display: flex;
  gap: 5rem;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
}

.nav-link {
  color: #ffdb00;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;
  position: relative;
}

.nav-link:hover {
  color: white;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  width: 300px; /* Adjusted size for better usability */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999; /* Ensure dropdown is on top */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  pointer-events: auto; /* Enable click events */
}

.dropdown-content h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #a240de;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%; /* Align directly below the parent */
  left: 0;
  background-color: white;
  width: 200px; /* Adjust width as needed */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999; /* Ensure dropdown is on top */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  pointer-events: auto; /* Enable click events */
}

.nav-item {
  position: relative; /* Ensure dropdown aligns with the parent */
}

.dropdown-link {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  display: block;
  padding: 0.5rem;
  border-radius: 4px;
}

.dropdown-link:hover {
  background-color: #f0f0f0;
  color: #a240de;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.search-container {
  position: relative;
  display: inline-block;
}

.search-container::before {
  content: "\f002";
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #aaa;
}

.search-bar {
  padding: 0.5rem 2.5rem;
  border-radius: 20px;
  border: none;
  width: 250px;
  font-size: 16px;
}

.iconWrapper {
  display: flex;
  gap: 1.5rem;
}

.fa {
  color: white;
  cursor: pointer;
}

.fa:hover {
  color: #ffdb00;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .classify-wrapper {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .actions {
    display: none;
  }
}
</style>
