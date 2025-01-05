<template>
  <header class="header">
    <!-- Updated Brand Section -->
    <RouterLink class = "link" to="/home">
      <SecodaryBrand />
    </RouterLink>

    <!-- Hamburger Menu for Mobile -->
    <div class="hamburger" @click="toggleMenu">
      <i class="fa fa-bars"></i>
    </div>

    <!-- Navigation Menu -->
    <div :class="['classify-wrapper nav', { active: menuActive }]">
      <li v-for="link in links" :key="link.name">
        <router-link
          :to="link.path"
          class="nav-link"
          :class="{ active: isActive(link.path) }"
          @click="closeMenu"
        >
          {{ link.name }}
        </router-link>
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
        <i @click="GoToshoppingCards" class="fa fa-shopping-cart fa-xl"></i>
      </div>
    </div>
  </header>
</template>

<script>
import SecodaryBrand from "../Brands/SecondaryBrand.vue";

import { RouterLink, RouterView } from "vue-router";
export default {
  name: "HeaderComponent",
  components: {
    SecodaryBrand,
  },
  data() {
    return {
      // Define links dynamically
      links: [
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Children", path: "/children" },
      ],
      menuActive: false, // State to toggle mobile menu
    };
  },
  methods: {
    GoToAccount() {
      alert("Redirecting to user account...");
    },
    GoToshoppingCards() {
      alert("Redirecting to shopping cards...");
    },
    // Check if the current route matches the link path
    isActive(path) {
      return this.$route.path === path;
    },
    // Toggle menu for mobile view
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    // Close menu on link click (mobile view)
    closeMenu() {
      this.menuActive = false;
    },
  },
};
</script>

<style scoped>
/* Original Header Styles Preserved */
.link {
  color: white;
}
.link:hover {
  color: #bba8c6;
  text-decoration: none;
}

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
  justify-content: space-between;
  align-items: center;
  background-color: #a240de;
  padding: 1rem 2rem;
  color: white;
  position: fixed;
  z-index: 99;
  width: 100%;
}

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

.classify-wrapper.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #a240de;
  width: 100%;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #ffdb00;
  text-decoration: none;
  cursor: pointer;
}

.nav-link:hover {
  /* text-decoration: underline; */
   /* Add underline on hover */
  color: #ffffff;
}

/* Active Link Style */
.nav-link.active {
  color: white;
  font-weight: bold;
  text-decoration: none; /* Remove underline for active state */
  border-bottom: 2px solid white; /* Add bottom border for active link */
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
}

/* Search Bar */
.search-container {
  position: relative;
}

.search-bar {
  /* padding: 8px 40px; */
  /* Adjust padding to make space for the icon */
  padding: 0.5rem 3rem;
  border-radius: 20px;
  border: none;
  width: 250px;
  font-size: 16px;
}

/* Icons */
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

@media (max-width: 480px) {
  .search-bar {
    width: 150px;
    font-size: 14px;
  }
}
</style>
