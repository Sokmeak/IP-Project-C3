<template>
  <button class="button-google" @click="handClick">
    <img src="../../../public/images/googlelogo.png" alt="google logo" />
    <p>Continue with Google</p>
  </button>
</template>
<script>
export default {
  emits: ["click"],
  methods: {
    handClick() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
img {
  height: 35px;
}
.button-google {
  border: 1px solid #af47d2;
  padding: 0.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-family: "Roboto", serif;
  font-size: 18px;
}
</style>
