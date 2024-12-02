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
  },
};
</script>
<style scoped>
input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #af47d2;
  border-radius: 0.5rem;
  font-size: 14px;
}
</style>
