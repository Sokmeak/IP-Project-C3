<template>

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Welcome to Group C3!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <Home></Home>

</template>

<script>
import Home from "./components/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>

<style scoped></style>
