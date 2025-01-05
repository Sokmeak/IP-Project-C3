<template>
  <div class="feature-card">
    <div class="icon-container">
      <i :class="iconClass"></i>
    </div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.feature-card {
  background-color: #f3e5f5;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.feature-card i {
  font-size: 2em;
  color: #9b248d;

  border-radius: 50%;
}

.icon-container {
  background-color: white;
  border-radius: 50%;
  padding: 15px;
  display: inline-block;
  margin-bottom: 10px;
}

.icon {
  width: 40px;
  height: 40px;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 10px 0;
}

.description {
  color: #757575;
  font-size: 1em;
}
.feature-card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  transform: scale(1.005);
  border: 1.5px solid #af47d2;

  cursor: pointer;
}
</style>
