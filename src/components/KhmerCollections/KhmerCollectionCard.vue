<template>
  <div class="collectionCard">
    <div class="imageWrapper">
      <img :src="imgSrc" alt="Khmer Collection" />
    </div>

    <div class="content">
      <h4 class="name">
        {{ name }}
      </h4>
      <p class="description">{{ description }}</p>
      <div class="seemore">
        <a href="#">see more</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components:{
    
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

.collectionCard {
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

.collectionCard:hover {
  border: 1px solid gray;
  transition: 0.4s ease;
  transform: scale(1.01);
  border-radius: 10px;
  background-color: #E9C8F4;
  /* color: rgb(167, 162, 162); */
}

.seemore {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
}
.content {
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  /* background-color: white; */
}
.seemore a {
  color: blue;
  text-decoration: underline;
}
</style>
