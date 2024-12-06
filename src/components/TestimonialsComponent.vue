<template>
  <!-- change to seperate components next time -->
  <section class="testimonials">
    <h1 class="title">What our client say</h1>
    <div class="testimonial-list">
      <div class="testimonial" v-for="client in clients" :key="client.id">
        <!-- Profile Picture -->
        <img :src="client.image" :alt="client.name" class="profile-image" />
        <!-- Client Info -->
        <div class="client-info">
          <h3 class="client-name">{{ client.name }}</h3>
          <p class="client-feedback">{{ client.feedback }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialsComponent",
  data() {
    return {
      clients: [
        {
          id: 1,
          name: "Torella Missy",
          feedback: "Today night we care up troll well then so can",
          image: "/images/client1.jpg", // Replace with your image path
        },
        {
          id: 2,
          name: "Yosel Promora",
          feedback: "We gather see here too quit then just now stop",
          image: "/images/client1.jpg", // Replace with your image path
        },
        {
          id: 3,
          name: "Ericol Ason",
          feedback: "You here well see as America else there where",
          image: "/images/client3.jpg", // Replace with your image path
        },
        {
          id: 4,
          name: "Dollar Dillay",
          feedback: "Thanks well to here gather right just already may see",
          image: "/images/client4.jpg", // Replace with your image path
        },
        {
          id: 5,
          name: "Ding Dong",
          feedback: "Thanks well to here gather right just already may see",
          image: "/images/client5.jpg", // Replace with your image path
        },
      ],
    };
  },
};
</script>

<style scoped>
.testimonials {
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f9f9f9;
}

.title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: #333;
}

.testimonial-list {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.testimonial {
  display: flex;
  align-items: center;
  width: 20rem;
  gap: 1rem;
  padding: 1rem;
  transition: box-shadow 0.3s, border 0.3s;
  border-radius: 8px;
}

.testimonial:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  transform: scale(1.005);
  border: 1.5px solid #af47d2;

  cursor: pointer;
}

.profile-image {
  width: 60px;
  height: 60px;
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover; /* Ensures the image fits perfectly inside the circle */
  background-color: #ddd; /* Fallback color if image fails to load */
}

.client-info {
  text-align: left;
}

.client-name {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.client-feedback {
  font-size: 0.9rem;
  color: #555;
}
</style>
