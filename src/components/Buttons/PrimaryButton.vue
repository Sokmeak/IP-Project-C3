<template>
  <button
    :class="['button-primary', $attrs.class]"
    :type="type"
    v-bind="$attrs"
    @click="handleClick"
  >
    {{ content }}
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "PrimaryButton",
  inheritAttrs: false, // Prevent default attribute inheritance
  props: {
    content: String,
    type: String,

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
  /* border-radius: 0.4rem;   */
  background-color: #af47d2;
  color: white;
  padding: 1rem;

  font-family: "Roboto", serif;
  font-size: 18px;

  font-weight: 400;
  cursor: pointer;

  /* font-size: 1rem; */
}
.primary-button.custom-button {
  border-radius:15px; /* Ensures the class is applied properly */
}
</style>
