<template>
  <section class="service-section">
    <div class="header-container">
      <h1 class="section-title">Why choose us</h1>
      <PrimaryButton @click = "checkOAuth" content="Shop Now" class="shopnow"></PrimaryButton>
    </div>
    <div class="features-container">
      <FeatureCard
        v-for="(feature, index) in features"
        :key="index"
        :icon-class="feature.iconClass"
        :title="feature.title"
        :description="feature.description"
      />
    </div>
  </section>
</template>

<script>
import FeatureCard from "./FeatureCard.vue";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import router from "@/router";
import { useStore } from "@/stores/user";


export default {
  name: "ServiceSection",
  components: {
    FeatureCard,
    PrimaryButton,
  },
  setup() {
    const myStore = useStore();

    return {
      myStore,
    };
  },
  data() {
    return {
      features: [
        {
          iconClass: "fa-solid fa-truck",
          title: "First Delivery",
          description:
            "Lorem ipsum dolor sit amet consectetur. Mi cursus eget lacus placerat odio venenatis nunc quam.",
        },
        {
          iconClass: "fa-solid fa-globe",
          title: "24/7 Online Support",
          description:
            "Lorem ipsum dolor sit amet consectetur. Erat ullamcorper leo feugiat lacus pulvinar nulla et.",
        },
        {
          iconClass: "fa-solid fa-star",
          title: "High Rating",
          description:
            "Lorem ipsum dolor sit amet consectetur. Id posuere sagittis amet eget cursus suspendisse magna nibh eget.",
        },
        {
          iconClass: "fa-solid fa-ranking-star",
          title: "10 Years Service",
          description:
            "Lorem ipsum dolor sit amet consectetur. Id posuere sagittis amet eget cursus suspendisse magna nibh eget.",
        },
      ],
    };
  },
  methods: {
    checkOAuth() {
      this.myStore.isRegister = false;
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
.shopnow {
  width: 10rem;
  height: 3rem;
  padding: 0;
  border: none;
  border-radius: 30px !important;
  background-color: #ff8f00;
}
.service-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3e5f5;
  padding: 40px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  font-size: 1.5em;
}

.section-title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  color: #000;
}

.shop-now-btn {
  background-color: #ff9800;
  color: white;
  font-size: 1em;
  padding: 10px 10px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.shop-now-btn:hover {
  background-color: #e68900;
}

.features-container {
  color: #010001;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
</style>
