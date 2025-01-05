<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeHolder"
    :class="customClass"
    :required="isRequired"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "InputField",
  inheritAttrs: false, // Prevent Vue from automatically binding attributes
  props: {
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeHolder: {
      type: String,
      default: "",
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
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
  font-family: "Roboto", serif;
  font-size: 18px;
  font-weight: 400;
}
input:invalid {
  border-color: red;
}
input:focus {
  outline: none;
  border-color: #7a2eb5;
  box-shadow: 0 0 5px #7a2eb5;
}
</style>
