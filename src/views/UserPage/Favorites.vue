<template>
  <div>
    <h1>Favorites</h1>
    <div v-for="(item, index) in favorites" :key="index" class="favorite-item">
      <img :src="item.image" alt="Product Image" />
      <p><strong>{{ item.name }}</strong></p>
      <p>{{ item.description }}</p>
      <p>Price: ${{ item.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [
        {
          name: "Angkor Wat T-shirt",
          description: "A warm 2-ply jacket, suitable for cooler weather",
          price: 40,
          image: "path-to-tshirt.jpg",
        },
        {
          name: "Angkor Wat Pants",
          description: "Comfortable and stylish pants for any occasion",
          price: 40,
          image: "path-to-pants.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.favorite-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.favorite-item img {
  width: 100px;
  height: 100px;
}
</style>
