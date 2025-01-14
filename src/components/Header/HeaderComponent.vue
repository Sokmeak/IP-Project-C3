<template>
  <header class="header">
    <!-- Updated Brand Section -->
    <RouterLink class="link" to="/product/home">
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
          :to="`/product` + link.path"
          class="nav-link"
          @click="closeMenu"
        >
          {{ link.name }}
        </router-link>
      </li>
    </div>

    <!-- Actions -->
    <div class="actions">
      <div class="search-container">
        <input
          type="text"
          :placeholder="placeholderMessage"
          class="search-bar"
        />
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

  // watch: {
  //   $route: {
  //     immediate: true, // Trigger on initial load
  //     handler() {
  //       this.updateSearchPlaceholder();
  //     },
  //   },
  // },

  data() {
    return {
      // Define links dynamically
      placeholderMessage: "Search type of Product", // Default placeholder

      links: [
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Children", path: "/children" },
      ],
      menuActive: false, // State to toggle mobile menu
    };
  },

  watch: {
    $route: {
      immediate: true, // Trigger on initial load
      handler() {
        this.updateSearchPlaceholder();
      },
    },
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
      let fullPath = `/product` + path;
      return this.$route.path === fullPath;
    },
    // Toggle menu for mobile view
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    // Close menu on link click (mobile view)
    closeMenu() {
      this.menuActive = false;
    },

    updateSearchPlaceholder() {
      console.log(this.$route.name);

      switch (this.$route.name) {
        case "home":
        case "LandingPage":
          this.placeholderMessage = "Search type of Product";
          break;
        case "Men":
          this.placeholderMessage = "Search men's Clothes";
          break;
        case "Women":
          this.placeholderMessage = "Search women's Clothes";
          break;
        case "Children":
          this.placeholderMessage = "Search children's Clothes";
          break;
        default:
          this.placeholderMessage = "Search for items";
      }
    },
  },
};
</script>

<style scoped>
.link {
  color: white;
}

.link.router-link-active {
  border: none;
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
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;
  position: relative;
}
.nav-link.active {
  color: white;
  font-weight: bold;
  border-bottom: 2px solid white;
}
.nav-link.active::after {
  width: 100%;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px; /* Adjust the position of the underline */
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out; /* Smoothly animate the width */
}
.nav-link:hover {
  color: white;
}
.nav-link:hover::after {
  /* text-decoration: underline; */
  /* Add underline on hover */
  color: #ffffff;
  width: 100%;
}

/* Active Link Style */
/* .nav-link.active {
  color: white;
  font-weight: bold;
  text-decoration: none; /* Remove underline for active state */
/* border-bottom: 2px solid white;  */
/* Add bottom border for active link */
/*
} 
*/
.router-link-active {
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 2px solid white;
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
  width: 280px;
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
