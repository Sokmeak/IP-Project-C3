<template>
  <section class="BestOffers">
    <div class="BestOffersSectionContainer">
      <div class="header">
        <h1>Khmer Collections</h1>
      </div>
      <div class="container">
        <KhmerCollectionCard
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
import KhmerCollectionCard from "./KhmerCollectionCard.vue";

export default {
  name: "KhmerCollections",
  components: {
    KhmerCollectionCard,
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
          name: "Women traditional dresses",
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
          name: "Hats",
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
  justify-content: center;
}
.BestOffersSectionContainer {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.BestOffers {
  padding: 50px 0;
  background-color: #f0dff5;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style>
