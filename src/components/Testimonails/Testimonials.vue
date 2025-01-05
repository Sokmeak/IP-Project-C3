<template>
  <section class="testimonials">
    <h1 class="title">What our client say</h1>
    <div class="testimonial-list">
      <TestimonialCard
        v-for="(client,index) in clients"
        :key="index"
        :imageScr="client.image"
        :name="client.name"
        :alt="client.alt"
        :feedback="client.feedback"
      />
    </div>
  </section>
</template>

<script>
import TestimonialCard from "./TestimonialCard.vue";

export default {
  name: "TestimonialsComponent",
  components: {
    TestimonialCard,
  },
  data() {
    return {
      clients: [
        {
          id: 1,
          name: "Torella Missy",
          alt: "testimonials",
          feedback: "Today night we care up troll well then so can",
          image: "../../public/images/client1.jpg", // Replace with your image path
        },
        {
          id: 2,
          name: "Yosel Promora",
          feedback: "We gather see here too quit then just now stop",
          image: "../../public/images/client1.jpg", // Replace with your image path
        },
        {
          id: 3,
          name: "Ericol Ason",
          feedback: "You here well see as America else there where",
          image: "../../public/images/client1.jpg", // Replace with your image path
        },
        {
          id: 4,
          name: "Dollar Dillay",
          feedback: "Thanks well to here gather right just already may see",
          image: "../../public/images/client1.jpg", // Replace with your image path
        },
        {
          id: 5,
          name: "Ding Dong",
          feedback: "Thanks well to here gather right just already may see",
          image: "../../public/images/client1.jpg", // Replace with your image path
        }
      ],
    };
  },
};
</script>

<style scoped>
.title {
  /* font-size: 1.8rem; */
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: #333;
}
.testimonials {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f3e5f5; */
  padding: 40px;
}
.testimonial-list {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
</style>
