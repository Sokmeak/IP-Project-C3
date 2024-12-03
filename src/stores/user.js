import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import Cookies from "js-cookie";

export function isAuthenticated() {
  const savedEmail = Cookies.get("email");
  const savedPassword = Cookies.get("password");
  const sessionEmail = sessionStorage.getItem("email"); // Temporary session storage
  const sessionPassword = sessionStorage.getItem("password");
  let status = false;

  if ((savedEmail && savedPassword) || (sessionEmail && sessionPassword)) {
    status = true;
  }

  return status;
}

export const useStore = defineStore("counter", () => {
  const result = isAuthenticated();
  let isRegister = null;

  if (result) {
    isRegister = ref(true);
  } else {
    isRegister = ref(false); // Default value is false
  }

  // Return the state so it can be used in components
  return {
    isRegister,
  };
});
