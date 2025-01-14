<template>
  <section class="categories">
    <h2>Get Your Khmer Tranditonal Outfit</h2>
    <div class="category-list">
      <div class="category-card" v-for="outfit in outfits" :key="outfit.id">
        <div class="category-image" @click="GetCategory(outfit.type)">
          <img :src="outfit.image" :alt="outfit.name" />
        </div>
        <!-- <p>{{ outfit.name }}</p> -->
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
        {
          id: 1,
          type: "women",
          name: "Outfit 1",
          image: "/images/outfit1.jpg",
        },
        { id: 2, type: "men", name: "Outfit 2", image: "/images/outfit2.jpg" },
        { id: 3, type: "men", name: "Outfit 3", image: "/images/outfit3.jpg" },
        {
          id: 4,
          type: "women",
          name: "Outfit 4",
          image: "/images/outfit4.jpg",
        },
      ],
    };

  },
  methods:{
    GetCategory(type){
      // alert("Categories Name : "+type)
      console.log(this.$route.name);
      

      if (this.$route.name === "Home") {
        this.$router.push(type);
      } else {
        this.$router.push(`product/${type}`);
      }


    
    }
  }
};
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #f0dff5;
}
.category-list {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}
.category-card {
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 0.5rem;

  background-color: #ffffff;

  /* padding: 1rem; */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.category-card img {
  width: 100%;
  height: 33rem;
  border-radius: 4px;
}

.category-card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  transform: scale(1.005);
  border: 1.5px solid #af47d2;

  cursor: pointer;
}
</style>
