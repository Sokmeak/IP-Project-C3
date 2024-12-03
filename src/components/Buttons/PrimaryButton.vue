<template>
  <button :class="['button-primary', customClass]" :type="type" @click="handleClick">
    {{ content }}
  </button>
</template>
<script>
export default {
  props: {
    content: String,
    type: String,
    customClass: {
      type: String,

      default: "",
    },

    methods: {
      handleClick(event) {
        // Emit a custom click event to the parent
        this.$emit("click", event);
      },
    },
  },
};
</script>
<style scoped>
.button-primary {
  background-color: #af47d2;
  color: white;
  padding: 1rem;
  border-radius: 0.4rem;
  font-family: "Roboto", serif;
  font-size: 18px;

  font-weight: 400;
  cursor: pointer;

  /* font-size: 1rem; */
}
</style>
