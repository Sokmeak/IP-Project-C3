<template>
  <div class="women-clothes-page">
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <BestOffers title="Men's Best Offer" productType="Men" />

      <GeneralProducts
        productType="Men"
        title="Explore Men T-shirt"
        bgColor="#F0DFF5"
      />

      <BestOffers title="Men's Jacket" productType="Men" />
      <section id="tshirt">
        <GeneralProducts
          bgColor="#F0DFF5"
          productType="Men"
          title="Recommended Product"
        />
      </section>

      <!-- Create a component that can generate the general product by passing type and group via props -->
    </div>
  </div>
</template>

<script>
import ListProducts from "@/components/ReadyToBuyProduct/ListProducts.vue";

import { computed } from "vue";
// import GeneralProducts from "@/components/GeneralProducts/GeneralProducts.vue";

export default {
  components: {
    GeneralProducts: ListProducts,
    BestOffers: ListProducts,
  },

  // Men's T-Shirts Data
};
</script>

<style scoped>
.men-clothes-page {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-wrapper {
  margin-top: 6rem; /* Adjust to match the height of the fixed header */
}

/* Section Styling */
.section {
  padding: 2rem 10%; /* Adjust as needed (10% usually works well for centered alignment) */
  margin: 0 auto; /* Ensures the section stays centered */
  max-width: 1200px; /* Add this to limit the width of the section if desired */
  text-align: center; /* Centers text within the section */
}

/* Center the Section Header */
.section-header {
  display: flex; /* Use flexbox for alignment */
  align-items: center;
  justify-content: space-between; /* Creates space in the middle */
  gap: 1rem; /* Optional: Space between elements if they shrink */
  margin-bottom: 2rem;
  width: 146%; /* Ensure the section-header spans the full width */
  padding: 7 rem; /* Add some padding for better spacing on the sides */
  margin-left: -23%;
}
.section-header h1 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #26355d;
  margin: 0; /* Removes any default margin */
}
/* Add a background color to the Dresses section */
.tshirts-section {
  background-color: #f0dff5; /* Light pinkish color */
  width: 100%; /* Ensure it spans the full horizontal width */
  padding: 2rem 0; /* Adds vertical spacing */
}

/* Ensure alignment within the Dresses section */
.tshirts-section .section {
  padding: 2rem 10%; /* Adjust as needed for the section’s content alignment */
  margin: 0 auto; /* Center the section within the page */
  max-width: 1200px;
  text-align: center;
}

/* View All Button Styling */
.view-all-btn {
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  color: #000;
  transition: all 0.3s;
}

.view-all-btn:hover {
  background-color: #af47d2;
  color: white;
  border-color: #af47d2;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rem;
  justify-content: center; /* Centers the grid within the section */
}
</style>
