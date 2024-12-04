<template>
  <section class="trending-videos">
    <h2>Trending Videos</h2>
    <div class="video-grid">
      <div class="video-card" v-for="video in videos" :key="video.id">
        <p>Video {{ video.id }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TrendingVideos",
  data() {
    return {
      videos: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
};
</script>

<style scoped>
.trending-videos {
  padding: 2rem;
}
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.video-card {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
