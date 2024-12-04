<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Angkor Apparel</h1>
      <p>
        Angkor Apparel is the right place for you to pick up your fashion
        clothes with a good price and truth.
      </p>
      <div class="cta-buttons">
        <button class="shop-now">Shop Now</button>
        <button class="learn-more">Learn More</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f8f8f8; /* Light background for contrast */
}
.hero-content h1 {
  font-size: 3rem;
  color: #26355d;
}
.hero-content p {
  margin: 1rem 0;
  color: #6c757d;
}
.cta-buttons button {
  margin: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.shop-now {
  background-color: #f04848;
  color: white;
}
.learn-more {
  background-color: white;
  border: 1px solid #f04848;
  color: #f04848;
}
</style>
