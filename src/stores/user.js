import { ref } from "vue";
import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { isAuthenticated } from "@/router";

// export function isAuthenticated() {
//   const savedEmail = Cookies.get("email");
//   const savedPassword = Cookies.get("password");
//   const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
//   console.log(loggedInUser);

//   // const sessionEmail = sessionStorage.getItem("email"); // Temporary session storage
//   // const sessionPassword = sessionStorage.getItem("password");
//   let status = false;

//   if ((savedEmail && savedPassword) || loggedInUser) {
//     status = true;
//   }

//   return status;
// }



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

  // How to get data from the store and use function for filtering the product in the store
});
