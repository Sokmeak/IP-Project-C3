<template>
  <section class="BestOffers">
    <div class="BestOffersSectionContainer">
      <div class="header">
        <h1>General products For men During winter</h1>
        <div class="seemore">see more</div>
      </div>
      <div class="container">
        <ProductCard
          v-for="(item, index) in collections"
          :key="index"
          :imgSrc="item.imgSrc"
          :name="item.name"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "MenProducts",
  components: {
    ProductCard,
  },
  data() {
    return {
      collections: [
        {
          imgSrc: "../../public/images/Krama.png",
          name: "Kramas",
          description:
            "Khmer traditional towel use in many things, like taking shower and for swiping.",
        },
        {
          imgSrc: "../../public/images/WomenHole.png",
          name: "Women hol skirts",
          description:
            "Khmer traditional dress, rectangular cloth worn around the lower body",
        },
        {
          imgSrc: "../../public/images/WomenTrad.png",
          name: "Traditional dresses",
          description: "Traditional dress for wearing to pagoda event",
        },
        {
          imgSrc: "../../public/images/angkorWatT-shirt.png",
          name: "Angkor Wat T-shirt",
          description: "Simple T-shirt with tons of logo of choices and color",
        },
        {
          imgSrc: "../../public/images/Hat.png",
          name: "Hats",
          description: "Hat and palm hat for hot or Summer season",
        },

        {
          imgSrc: "../../public/images/MenTrad T shirt.png",
          name: "Men Traditional T-shirt",
          description: "Nice traditional T-shirt for visiting Angkor Wat",
        },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5rem 0 5rem;
}

.seemore {
  text-decoration: underline;
  color: blue;
}
.ProjectListContainer {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.ProductListSection {
  padding: 50px 0;
  /* background-color: #f0dff5; */
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
}
</style>
