<template>
  <section class="trending-videos">
    <div class="vdoConetentHeader-wrapper">
      <h2>Trending Videos</h2>
      <div class="changeVDO">
        <div @click="BackToPrevious" class="MoveContainer">
          <i class="fa-solid fa-angle-left"></i>
        </div>

        <div @click="GoToNext" class="MoveContainer">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
    <div class="video-list-wrapper">
      <div
        class="video-list"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="video in videos" :key="video.id" class="video-container">
          <video
            class="video-card"
            width="500px"
            height="400px"
            autoplay
            loop
            muted
          >
            <source :src="video.url" type="video/mp4" />
          </video>
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
      currentIndex: 0,
      currentLength: 0,
      videosToShow: 3,
      videos: [
        {
          id: 1,
          url: "https://videos.pexels.com/video-files/5889057/5889057-sd_640_360_25fps.mp4",
        },
        {
          id: 2,
          url: "https://videos.pexels.com/video-files/3959704/3959704-sd_960_506_25fps.mp4",
        },
        {
          id: 3,
          url: "https://videos.pexels.com/video-files/4715373/4715373-sd_960_506_25fps.mp4",
        },
        {
          id: 4,
          url: "https://videos.pexels.com/video-files/5889057/5889057-sd_640_360_25fps.mp4",
        },
        {
          id: 5,
          url: "https://videos.pexels.com/video-files/3959704/3959704-sd_960_506_25fps.mp4",
        },
        {
          id: 6,
          url: "https://videos.pexels.com/video-files/4715373/4715373-sd_960_506_25fps.mp4",
        },
        {
          id: 8,
          url: "https://videos.pexels.com/video-files/6767033/6767033-sd_640_360_25fps.mp4",
        },
        {
          id: 7,
          url: "https://videos.pexels.com/video-files/4715373/4715373-sd_960_506_25fps.mp4",
        },
       

        // {
        //   id: 8,
        //   url: "https://videos.pexels.com/video-files/7288127/7288127-sd_360_640_25fps.mp4",
        // },
        // {
        //   id: 9,
        //   url: "https://videos.pexels.com/video-files/8798158/8798158-sd_506_960_25fps.mp4",
        // },
        // {
        //   id: 10,
        //   url: "https://videos.pexels.com/video-files/7568637/7568637-sd_360_640_25fps.mp4",
        // },
        // {
        //   id: 11,
        //   url: "https://videos.pexels.com/video-files/8798158/8798158-sd_506_960_25fps.mp4",
        // },
        // {
        //   id: 12,
        //   url: "https://videos.pexels.com/video-files/7568637/7568637-sd_360_640_25fps.mp4",
        // },
      ],
    };
  },
  computed: {
    // visibleVideos() {
    //   return this.videos.slice(0, this.currentIndex + this.videosToShow);
    // },
  },
  methods: {
    BackToPrevious() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    GoToNext() {
      const maxIndex = Math.ceil(this.videos.length / this.videosToShow) - 1;
      if (this.currentIndex < maxIndex) {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style scoped>
/* 
.trending-videos {
  padding: 2rem;
}
.video-list {


  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow: auto;
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
} */

.trending-videos {
  padding: 2rem;
}

.MoveContainer {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.MoveContainer:hover {
  background-color: #ca98da;
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

.video-list-wrapper {
  overflow: hidden; /* Ensures only visible videos are shown */
  width: 100%;
}

.video-list {
  display: flex;
  /* overflow-x: auto;
  scroll-behavior: auto; */
  gap: 3rem;
  transition: transform 0.5s ease-in-out; /* Smooth transition */
}

.video-container {
  /* min-width: calc(100% / 3);  */
  width: 500px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
}

.video-card {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.video-card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  transform: scale(1.005);
  border: 1.5px solid #af47d2;
  cursor: pointer;
}
</style>
