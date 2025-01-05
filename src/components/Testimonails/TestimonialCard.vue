<template>
  <!-- change to seperate components next time -->
 
    
    
      <div class="testimonial">
        <!-- Profile Picture -->
        <img :src="imageScr" alt="alternative" class="profile-image" />
        <!-- Client Info -->
        <div class="client-info">
          <h3 class="client-name">{{ name }}</h3>
          <p class="client-feedback">{{ feedback }}</p>
        </div>
      </div>
  

</template>

<script>
export default {
  name: "TestimonialsComponent",
  props: {
    imageScr: String,
    name: String,
    alternative: String,
    feedback: String,
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
