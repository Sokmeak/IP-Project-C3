<template>
  <section class="hero">
    <div class="hero-content">
      <p>
        <span>Angkor Apparel</span> is the right place for you to pick up your
        fashion clothes with a good price and truth.
      </p>
      <div class="cta-buttons">
        <!-- <button class="shop-now">Shop Now</button> -->

        <PrimaryButton
          class="btn custom-button"
          content="Shop Now"
          type="button"
          @click="goToLogin"
        ></PrimaryButton>

        <PrimaryButton
          class="btn learn-more"
          content="Learn More"
          type="button"
          @click="goToLogin"
        ></PrimaryButton>
      </div>
    </div>

    <div class="hero-content proverb">
      <!-- <p>"You can sense <span>the fashion</span>."</p> -->

      <p class="multiple-text"></p>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import router from "@/router";
import { useStore } from "@/stores/user";
export default {
  name: "HeroSection",

  setup() {
    const myStore = useStore();

    return {
      myStore,
    };
  },
  components: {
    PrimaryButton,
  },
  methods: {
    goToLogin() {
      this.myStore.isRegister = false;
      this.$router.push("/signup");
    },
  },
  mounted() {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Welcome to Angkor Apparel",
        "You can sense the fashion.",
        "Get your new Outfits.",
        "Affordable Products.",
        "Easy Shoppoing Website.",
      ],

      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

    // const targetElement = document.getElementsByClassName("multiple-text");
    // if (targetElement) {
    //   new Typed(targetElement, {
    //     strings: [
    //       "Welcome to Angkor Apparel",
    //       "You can sense the fashion.",
    //       "Get your new Outfits.",
    //       "Affordable Products.",
    //       "Easy Shoppoing Website.",
    //     ],

    //     typeSpeed: 80,
    //     backSpeed: 80,
    //     backDelay: 1200,
    //     loop: true,
    //   });
    // } else {
    //   console.error("Target element not found");
    // }

    // this.$nextTick(() => {
    //   const targetElement = document.getElementsByClassName("multiple-text");
    //   if (!targetElement) {
    //     console.error("Target element not found");
    //     return;
    //   }
    //   new Typed(targetElement, {
    //     strings: ["Welcome to the Hero Section!"],
    //     typeSpeed: 50,
    //   });
    // });
  },
};
</script>

<style scoped>
.cta-buttons {
  display: flex;
  gap: 1rem;
}
.btn {
  width: 10rem;
}
.custom-button {
  border-radius: 30px !important;
  background-color: #ff8f00;

  /* padding : 0 2rem 0 2rem; */
}
.custom-button:hover {
  background-color: white;
  color: #ff8f00;
}
.learn-more {
  background-color: white;
  border-radius: 30px !important;
  border: 1px solid #3f3b3b !important;
  color: #3c3c3c;
}
.learn-more:hover {
  background-color: #ff8f00;
  color: white;
}
.hero {
  display: flex;
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-between;
  margin-top: 7rem;
  text-align: center;
  padding: 2rem 4rem 2rem 4rem;
  background-color: #f0dff5; /* Light background for contrast */
}
.hero-content {
  width: 100%;
  font-size: 20px;
  padding: 2rem 4rem 2rem 4rem;
  display: flex;
  flex-direction: column;

  align-items: start;
}
.proverb {
  font-size: 48px;
  display: flex;
  flex-direction: row;
}
.proverb p {
  margin: 0;
}
.cta-buttons {
  margin-left: 1rem;
}
.hero-content h1 {
  font-size: 3rem;
  color: #26355d;
}
.hero-content span {
  color: #3c3c3c;
  font-size: larger;
  font-weight: bold;
}
/* .hero-content p { */
/* margin: 1rem 0; */
/* color: #6c757d; */
/* } */
.cta-buttons button {
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.shop-now {
  background-color: #f04848;
  color: white;
}

.proverb {
  font-family: "Sansita", sans-serif;
  font-weight: bolder;
  color: #a240de;
}
</style>
