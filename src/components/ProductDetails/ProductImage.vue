<template>
  <div class="product-image">
    <div
      class="main-image"
      @mouseover="showArrows = true"
      @mouseleave="showArrows = false"
    >
      <button v-if="showArrows" class="arrow left-arrow" @click="prevImage">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <img
        @mousemove="handleMouseMove"
        @mouseleave="resetZoom"
        :style="imageStyles"
        :src="selectedImage"
        alt="Main product image"
      />
      <button v-if="showArrows" class="arrow right-arrow" @click="nextImage">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>

    <div class="thumbnail-images">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Product thumbnail"
        @click="selectedImage = image"
        :class="{ active: image === selectedImage }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedImage: this.images.length ? this.images[0] : "",

      showArrows: true,
      transformOrigin: "center center",
      zoomScale: 1, // Default zoom scale
    };
  },

  methods: {
    nextImage() {
      const currentIndex = this.images.indexOf(this.selectedImage);
      this.selectedImage = this.images[(currentIndex + 1) % this.images.length];
    },
    prevImage() {
      const currentIndex = this.images.indexOf(this.selectedImage);
      this.selectedImage =
        this.images[
          (currentIndex - 1 + this.images.length) % this.images.length
        ];
    },
    selectImage(image) {
      this.selectedImage = image;
    },
    handleKeydown(event) {
      if (event.key === "ArrowRight") {
        this.nextImage();
      } else if (event.key === "ArrowLeft") {
        this.prevImage();
      }
    },
    handleMouseMove(event) {
      const container = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - container.left) / container.width) * 100;
      const y = ((event.clientY - container.top) / container.height) * 100;

      this.transformOrigin = `${x}% ${y}%`;
      this.zoomScale = 1.5; // Smooth zoom-in
    },
    resetZoom() {
      this.transformOrigin = "center center"; // Reset position
      this.zoomScale = 1; // Reset zoom
    },
  },

  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },

  computed: {
    imageStyles() {
      return {
        transform: `scale(${this.zoomScale})`,
        transformOrigin: this.transformOrigin,
        transition: "transform 0.3s ease",
      };
    },
  },
};
</script>

<style scoped>
.product-image {
  text-align: center;
  /* position: relative; */
}
.arrow {
  position: absolute;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 2;
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s;
}

.left-arrow {
  left: 3rem;
}

.right-arrow {
  right: 3rem;
}
.main-image {
  overflow: hidden; /* Ensures no overflow */
  position: relative;
  object-fit: cover;
  background-color: rgb(182, 182, 182);
}
.main-image img {
  max-width: 25rem;
  display: block;
  margin: auto;
}
.thumbnail-images {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.thumbnail-images img {
  width: 60px;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 5px;
}
.thumbnail-images img.active {
  border-color: #000;
}
.main-image:hover .arrow {
  opacity: 1;
}
</style>
