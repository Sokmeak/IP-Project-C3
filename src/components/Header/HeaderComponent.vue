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
        v-for="link in links"
        :key="link.name"
        class="nav-item"
        @mouseover="hover = link.name"
        @mouseleave="hover = null"
      >
        <router-link
          :to="`/product${link.path}`"
          class="nav-link"
          @click="closeMenu"
        >
          {{ link.name }}
        </router-link>

        <!-- Dropdown Menu -->
        <div class="dropdown-menu" v-if="hover === link.name">
          <div class="dropdown-content">
            <h3>{{ link.name }}</h3>
            <ul>
              <li v-for="item in link.subMenu" :key="item.name">
                <router-link :to="`/product${item.path}`" class="dropdown-link">
                  {{ item.name }}
                </router-link>
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
      links: [
        {
          name: "Men",
          path: "/men",
          subMenu: [
            { name: "T-Shirts", path: "/men/t-shirts" },
            { name: "Pants", path: "/men/pants" },
            { name: "Shoes", path: "/men/shoes" },
          ],
        },
        {
          name: "Women",
          path: "/women",
          subMenu: [
            { name: "Dresses", path: "/women/dresses" },
            { name: "Tops", path: "/women/tops" },
            { name: "Shoes", path: "/women/shoes" },
          ],
        },
        {
          name: "Children",
          path: "/children",
          subMenu: [
            { name: "T-Shirts", path: "/children/t-shirts" },
            { name: "Shorts", path: "/children/shorts" },
            { name: "Shoes", path: "/children/shoes" },
          ],
        },
      ],
      menuActive: false, // Mobile menu toggle
      hover: null, // Tracks the current hover state for dropdowns
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
  position: relative;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;
}

.nav-link:hover {
  color: white;
  border-bottom: 2px solid white;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%; /* Align below the link */
  left: 0;
  background-color: white;
  width: 80%; /* Dropdown spans most of the width */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.dropdown-content {
  max-width: 900px;
  margin: 0 auto;
}

.dropdown-content h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #a240de;
  margin-bottom: 1rem;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
}

.dropdown-menu ul li {
  margin-bottom: 0.5rem;
}

.dropdown-link {
  text-decoration: none;
  color: black;
  font-size: 1rem;
}

.dropdown-link:hover {
  color: #ff0000;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.search-container {
  position: relative;
}

.search-bar {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  width: 200px;
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
