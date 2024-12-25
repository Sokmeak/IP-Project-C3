<template>
  <PageLoader v-if="!isLoaded" />
  <template v-else>
    <RouterView />
  </template>
</template>

<script>
import PageLoader from "@/components/PageLoader.vue";

export default {
  components: {
    PageLoader,
  },
  data() {
    return {
      isLoaded: true,
    };
  },
  methods: {
    startLoading() {
      this.isLoaded = false;
    },
    finishLoading() {
      setTimeout(() => {
        this.isLoaded = true;
      }, 2000);
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.startLoading();
      next();
    });
    this.$router.afterEach(() => {
      this.finishLoading();
    });
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
