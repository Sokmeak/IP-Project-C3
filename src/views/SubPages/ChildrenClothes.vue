<template>
  <div class="women-clothes-page">
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <BestOffers title="Children's Best Offer" productType="Children" />
      <GeneralProducts
        bgColor="#F0DFF5"
        type="Children"
        title="Recommended Product"
      />
      <GeneralProducts type="Children" title="Explore Men Pants" />
      <GeneralProducts
        title="Explore Children Shirt"
        bgColor="#F0DFF5"
        productType="Children"
        group="Shirt"
      />
     

     
     
      <!--
      <BestOffers title="Children's Trend Outfits" productType="Children" />
      <GeneralProducts
        bgColor="#F0DFF5"
        type="Children"
        title="Explore Men T-Shirt"
      />
      <GeneralProducts bgColor ="#F0DFF5"  productType="Children" title="Explore Children Pants" /> -->
      <!-- 
      <GeneralProducts
        bgColor="#F0DFF5"
        type="Children"
        title="Explore Men Hats"
      /> -->
    </div>
  </div>
</template>

<script>
import ListProducts from "@/components/ReadyToBuyProduct/ListProducts.vue";
import GeneralProducts from "@/components/GeneralProducts/GeneralProducts.vue";

export default {
  components: {
    // GeneralProducts,
    BestOffers: ListProducts,
    GeneralProducts: ListProducts,
  },
  data() {
    return {
      // Recommended Products Data
      recommendedProducts: [
        {
          imgSrc: "/images/WomenTrad.png",
          name: "Traditional Dress",
          description: "Perfect for cultural events",
        },
        {
          imgSrc: "/images/WomenHole.png",
          name: "Silk Skirt",
          description: "Elegant and stylish for all occasions",
        },
        {
          imgSrc: "/images/Hat.png",
          name: "Women's Hat",
          description: "Stay stylish and cool",
        },
        {
          imgSrc: "/images/Krama.png",
          name: "Khmer Scarf",
          description: "Versatile accessory for women",
        },
        {
          imgSrc: "/images/outfit3.jpg",
          name: "Casual Dress",
          description: "Comfortable for everyday wear",
        },
        {
          imgSrc: "/images/outfit4.jpg",
          name: "Evening Gown",
          description: "Elegant wear for special events",
        },
      ],

      // Children's Dresses Data
      dressProducts: [
        {
          imgSrc: "/images/WomenTrad.png",
          name: "Traditional Dress",
          description: "Beautiful cultural design",
        },
        {
          imgSrc: "/images/WomenHole.png",
          name: "Silk Skirt",
          description: "Perfect for formal events",
        },
        {
          imgSrc: "/images/outfit4.jpg",
          name: "Cocktail Dress",
          description: "Elegant and trendy",
        },
        {
          imgSrc: "/images/outfit3.jpg",
          name: "Summer Dress",
          description: "Stay cool and stylish",
        },
        {
          imgSrc: "/images/outfit2.jpg",
          name: "Casual Maxi Dress",
          description: "For laid-back days",
        },
        {
          imgSrc: "/images/outfit1.jpg",
          name: "Evening Dress",
          description: "Sophisticated and chic",
        },
      ],

      // children's Accessories Data
      accessoriesProducts: [
        {
          imgSrc: "/images/Hat.png",
          name: "Wide-Brim Hat",
          description: "Protect yourself in style",
        },
        {
          imgSrc: "/images/Krama.png",
          name: "Silk Scarf",
          description: "Soft and luxurious",
        },
        {
          imgSrc: "/images/outfit1.jpg",
          name: "Tote Bag",
          description: "Stylish and practical",
        },
        {
          imgSrc: "/images/outfit3.jpg",
          name: "Jewelry Set",
          description: "Add a touch of elegance",
        },
        {
          imgSrc: "/images/outfit4.jpg",
          name: "Sunglasses",
          description: "Trendy and protective",
        },
        {
          imgSrc: "/images/defaultLogo.png",
          name: "Wristwatch",
          description: "Timeless accessory",
        },
      ],
    };
  },
};
</script>

<style scoped>
.children-clothes-page {
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
