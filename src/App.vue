<template>
  <div id="app">
    <router-view />
    <!-- <UserPage/> -->
  </div>
</template>

<script>
import UserPage from './views/UserPage/UserPage.vue';

export default {
  name: "App",
  components: {
    UserPage,
  },
};
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>
