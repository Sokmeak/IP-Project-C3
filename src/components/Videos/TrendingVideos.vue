<template>
  <section class="trending-videos">
    <div class="vdoConetentHeader-wrapper">
      <h2>Trending Videos</h2>
      <div class="changeVDO">
        <i @click="BackToPrevious" class="fa-solid fa-angle-left"></i>
        <i @click="GoToNext" class="fa-solid fa-angle-right"></i>
      </div>
    </div>
    <div class="video-list">
      <div class="video-card" v-for="video in videos" :key="video.id">
        <!-- <p>Video {{ video.id }}</p> -->
        <div class="player">
          <i class="fa-solid fa-play fa-xl"></i>
        </div>
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
  methods: {
    BackToPrevious() {
      alert("BackToPrevious...");
    },
    GoToNext() {
      alert("GoToNext...");
    },
  },
};
</script>

<style scoped>
.trending-videos {
  padding: 2rem;
}
.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  /* display: flex;
  flex-direction: row; */
}
.vdoConetentHeader-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.changeVDO {
  display: flex;
  cursor: pointer;
  gap: 0.9rem;
}
.video-card {
  background-color: #ffffff;
  padding: 1rem;
  height: 321px;

  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.video-card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  transform: scale(1.005);
  border: 1.5px solid #af47d2;

  cursor: pointer;
}
.player {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ab66c2;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.player i {
  color: white;

}
</style>
