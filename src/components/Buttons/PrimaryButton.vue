<template>
  <button :class="['button-primary', customClass]" @click="handleClick">
    {{ content }}
  </button>
</template>
<script>
export default {
  props: {
    content: String,
    customClass: {
      type: String,

      default: "",
    },
    emits: ["click"],
    methods: {
      handleClick() {
        this.$emit("click");
      },
    },
  },
};
</script>
<style scoped>
.button-primary {
  background-color: #af47d2;
  color: white;
  padding: 1rem ;
  border-radius: 0.4rem;
  font-family: "Roboto", serif;
  font-size: 18px;  

  font-weight: 400;

  /* font-size: 1rem; */
}
</style>
