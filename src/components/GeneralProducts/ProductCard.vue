<template>
  <!--Get the group of the product and navigate to its group in the type -->

  <div class="GenProductCard" @click="handleClick">
    <div class="imageWrapper">
      <img :src="'../../../public/images/' + imgSrc" alt="General product" />
    </div>

    <div class="content">
      <h4 class="name">
        {{ name }}
      </h4>
      <!-- <p class="description">{{ description }}</p> -->

      <div class="description">
        {{ description }}
      </div>

      <!-- Should use the function for analyze the price and get discout -->

      <!-- Some products are promotion but we use the same product card. -->
      <div class="seemoreAndPrice">
        <div class="Price">
          <p class="actualPrice">$ 10.00</p>
          <!-- <p class="OriginalPrice">$ 20.00</p> -->
        </div>

        <!-- <PrimaryButton class="ShopNowBtn" content="Shop Now"></PrimaryButton> -->
        <div class="seemore">
          <a href="#">see more</a>
        </div>
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
    productType: String,
    group: String,
    // need more props like color: ...
  },
  methods: {
    // GetGroup(){
    //   alert("Type of product and group: "+this.productType+" "+ this.group);
    // }

    // Go to the selected route

    handleClick() {
      // alert(this.$route.name);
      const typeInLowerCase = this.productType.toLowerCase();

      if (this.$route.name === "Home") {
        this.$router.push(typeInLowerCase);
      } else {
        this.$router.push(`product/${typeInLowerCase}`);
      }
    },
  },
};
</script>

<!-- adjust some style -->
<style scoped>
.imageWrapper img {
  width: 250px;
  height: 250px;
}
.rating {
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
.actualPrice {
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

.GenProductCard {
  background-color: white;
  width: 313px;
  padding: 0 2rem 1rem 2rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  border-radius: 10px;
  gap: 2rem;

  /* background-color: rgb(254, 255, 193); */
}

.GenProductCard:hover {
  /* border: 1px solid gray;
    transition: 0.4s ease;
    transform: scale(1.01);
    border-radius: 10px;
    background-color: #e9c8f4; */
  /* color: rgb(167, 162, 162); */

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  transform: scale(1.005);
  border: 1.5px solid #af47d2;

  cursor: pointer;
}

.seemoreAndPrice {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.seemore {
  text-decoration: underline;
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
