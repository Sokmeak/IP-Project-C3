<template>
  <div class="banner-container">
    <div
      class="banner-wrapper"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(banner, index) in banners" :key="index" class="banner-slide">
        <img :src="banner.url" :alt="banner.title" class="banner-image" />
        <div class="banner-text">
          <h2>{{ banner.title }}</h2>
          <p>{{ banner.description }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button class="prev-btn" @click="prevSlide">❮</button>
    <button class="next-btn" @click="nextSlide">❯</button>
  </div>
</template>

<script>
import banner1 from "@/components/Banner/banner2.png";
import banner2 from "@/components/Banner/banner1.png";
import banner3 from "@/components/Banner/banner3.png";

export default {
  name: "Banner",
  data() {
    return {
      banners: [
        {
          url: banner1,
          title: "Celebrate Lunar Moon Festival",
          description: "Discover our special collection for the season.",
        },
        {
          url: banner2,
          title: "New Arrivals",
          description: "Check out our latest trendy arrivals.",
        },
        {
          url: banner3,
          title: "Exclusive Discounts",
          description: "Enjoy up to 50% off on selected items!",
        },
      ],
      currentIndex: 0, // Track the current slide
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length; // Loop to the first slide
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.banners.length) % this.banners.length; // Loop to the last slide
    },
  },
};
</script>

<style scoped>
/* Container for the full-page banner */
.banner-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh; /* Full height of the viewport */
}

/* Wrapper for all slides */
.banner-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

/* Individual banner slides */
.banner-slide {
  flex: 0 0 100%;
  position: relative;
  text-align: center;
  height: 100%;
}

/* Full-size banner images */
.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the full area */
}

/* Text overlay on the banner */
.banner-text {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 20px;
  border-radius: 5px;
  width: auto;
}

.banner-text h2 {
  font-size: 2.5rem;
  margin: 0.5rem 0;
}

.banner-text p {
  font-size: 1.2rem;
}

/* Navigation buttons */
.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.prev-btn:hover,
.next-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Responsive Design */
@media (max-width: 768px) {
  .banner-text h2 {
    font-size: 1.8rem;
  }

  .banner-text p {
    font-size: 1rem;
  }
}
</style>
