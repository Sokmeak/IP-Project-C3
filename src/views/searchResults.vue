<template>
  <div class="mainLayout">
    <HeaderComponent />

    <section class="child-section">
      <PageLoader v-if="!isLoaded" />

      <div v-else class="search-results-page">
        <!-- This renders the child pages dynamically -->

        <!-- Header Section -->
        <header class="header">
          <h1>Search Results</h1>
          <p>
            Showing results for: <strong>"{{ searchTerm }}"</strong>
          </p>
        </header>

        <div class="content">
          <!-- Filters Section -->
          <aside class="filters">
            <h3>Filters</h3>
            <!-- <div>
              <label>Category</label>
              <select v-model="selectedCategory" @change="applyFilters">
                <option value="">All</option>
                <option
                  v-for="category in categories"
                  :key="category"
                  :value="category"
                >
                  {{ category }}
                </option>
              </select>
            </div> -->

            <div>
              <label>Type</label>
              <select v-model="selectedType" @change="applyFilters">
                <option value="">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Children">Children</option>
              </select>
            </div>

            <div>
              <label>Price Range</label>
              <input
                type="number"
                v-model.number="minPrice"
                placeholder="Min"
                min="1"
                @input="applyFilters"
              />
              <input
                type="number"
                v-model.number="maxPrice"
                placeholder="Max"
                max="10000"
                @input="applyFilters"
              />
            </div>
          </aside>

          <!-- Results Section -->
          <section class="results">
            <div class="result-list" v-if="filteredResults.length > 0">
              <BestOfferCard
                v-for="item in paginatedResults"
                :key="index"
                :id="item.productId"
                :imgSrc="item.productImages[0]"
                :name="item.productName"
                :description="item.description"
                :originalPrice="item.price"
                :rating="item.rating"
                :promotionPercentage="item.promotionPercentage"
              />
            </div>
            <div v-else>
              <p>No results found for "{{ searchTerm }}"</p>
            </div>
          </section>
        </div>

        <!-- Pagination -->
        <footer class="pagination" v-if="totalPages > 1">
          <button
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
          >
            Previous
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
            @click="changePage(page)"
          >
            {{ page }}
          </button>
          <button
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
          >
            Next
          </button>
        </footer>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "../components/Header/HeaderComponent.vue";
import Footer from "../components/Footer.vue";
import PageLoader from "../components/PageLoader.vue";
import BestOfferCard from "@/components/ReadyToBuyProduct/RTBProductCard.vue"; // Import BestOfferCard component
import { useSearchStore } from "@/stores/search";
import { useProductStore } from "@/stores/product";
import { onMounted, computed } from "vue";

export default {
  name: "SearchResults",

  setup(props) {
    const productStore = useProductStore();

    console.log(props.productType);

    onMounted(() => {
      productStore.fetchProducts();
    });
    // parse the parameter here

    const results = computed(() => productStore.getAllProducts);

    console.log(results);

    return {
      results,
    };
  },
  components: {
    HeaderComponent,
    Footer,
    PageLoader,
    BestOfferCard, // Register the BestOfferCard component
  },
  data() {
    return {
      isLoaded: true, // Controls the loading spinner
      searchTerm: this.$route.query.term || "",
      selectedType: "", // Added filter for Type
      minPrice: null,
      maxPrice: null,
     
      filteredResults: [],
      currentPage: 1,
      itemsPerPage: 6, // Display 6 items per page
    };
  },
  computed: {
    paginatedResults() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredResults.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredResults.length / this.itemsPerPage);
    },
  },
  methods: {
   
    startLoading() {
      this.isLoaded = false;
    },
    finishLoading() {
      setTimeout(() => {
        this.isLoaded = true; // Simulate loading completion
      }, 1000);
    },
    applyFilters() {
      this.filteredResults = this.results.filter((item) => {
        return (
          (!this.selectedType || item.productType === this.selectedType) &&
          (!this.minPrice || item.price >= this.minPrice) &&
          (!this.maxPrice || item.price <= this.maxPrice) &&
          item.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.applyFilters();
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.searchTerm = this.$route.query.term || "";
        this.applyFilters();
      },
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.startLoading();
      next();
    });
    this.$router.afterEach(() => {
      this.finishLoading();
    });
  },
};
</script>

<style scoped>
/* Update results section to display 2 columns */

.search-results-page {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.header {
  text-align: center;
  margin-bottom: 1rem;
}
.content {
  display: flex;
  width: 5rem;
  gap: 1rem;
}
.filters {
  flex: 1;
  padding: 1rem;
  gap: 1rem;
  background: #f9f9f9;
  border-radius: 4px;
}
.filters label {
  display: block;
  margin-bottom: 0.5rem;
}
.mainLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.child-section {
  flex: 1;
  margin-top: 5rem;
  padding: 1rem;
  position: relative;
}

.child-content {
  opacity: 1;
  transition: opacity 0.5s;
}
.results {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  /* gap: 1rem; */
}

.result-list {
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
}

/* Pagination Styles */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.pagination button {
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  background: #af47d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.pagination button.active {
  background: #3700b3;
}
.pagination button:disabled {
  background: #ddd;
  cursor: not-allowed;
}
</style>
