<template>
  <input :type="type" :placeholder="placeHolder" :class="customClass" />
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "type",
    },
    placeHolder: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "value",
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #af47d2;
  border-radius: 0.5rem;

  font-family: "Roboto", serif;
  font-size: 18px;

  font-weight: 400;
}
</style>
