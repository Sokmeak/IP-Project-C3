<template>
  <section class="categories">
    <h2>Get Your Khmer Outfit</h2>
    <div class="category-grid">
      <div class="category-card" v-for="outfit in outfits" :key="outfit.id">
        <div class="category-image">
          <img :src="outfit.image" :alt="outfit.name" />
        </div>
        <p>{{ outfit.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CategorySection",
  data() {
    return {
      outfits: [
        { id: 1, name: "Outfit 1", image: "/images/outfit1.jpg" },
        { id: 2, name: "Outfit 2", image: "/images/outfit2.jpg" },
        { id: 3, name: "Outfit 3", image: "/images/outfit3.jpg" },
        { id: 4, name: "Outfit 4", image: "/images/outfit4.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.categories {
  padding: 2rem;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.category-card {
  text-align: center;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.category-card img {
  width: 100%;
  border-radius: 4px;
}
</style>
