<template>
  <div class="bestofferCard">
    <div class="imageWrapper">
      <img :src="imgSrc" alt="Khmer Collection" />
    </div>

    <div class="content">
      <h4 class="name">
        {{ name }}
      </h4>
      <!-- <p class="description">{{ description }}</p> -->
      <div class="rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>

        <!-- Use a function for generating star base on #rating -->
      </div>
      <div class="seemore">
        <div class="Price">
          <p class="discountedPrice">$ 10.00</p>
          <p class="OriginalPrice">$ 20.00</p>
        </div>

        <PrimaryButton class="ShopNowBtn" content="Shop Now"></PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton,
  },
  props: {
    imgSrc: String,
    name: String,
    description: String,
    // need more props like color: ...
  },
};
</script>

<!-- adjust some style -->
<style scoped>
.imageWrapper img {
  width: 250px;
  height: 250px;
}
.rating{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}
.ShopNowBtn {
  height: 2rem !important;
  font-size: 14px;
  border-radius: 20px;
  color: #af47d2;
  /* padding: 0; */
  padding: 0.1rem 1rem 0.1rem 1rem;
  margin: 0;
  background-color: white;
}
.discountedPrice {
    color: #af47d2;
    font-size: larger;
    font-weight: bold;
}
.OriginalPrice {
  text-decoration: line-through;
  color: gray;
}
.Price {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.ShopNowBtn:hover {
  color: white;
  background-color: #af47d2;
}
.imageWrapper {
  width: 200px;
  height: 200px;
}

.bestofferCard {
  width: 313px;
  padding: 0 2rem 1rem 2rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  /* background-color: rgb(254, 255, 193); */
}

.bestofferCard:hover {
  border: 1px solid gray;
  transition: 0.4s ease;
  transform: scale(1.01);
  border-radius: 10px;
  background-color: #e9c8f4;
  /* color: rgb(167, 162, 162); */
}

.seemore {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.content {
  height: 9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  /* background-color: white; */
}
</style>
