<template>
  <div class="loginPage">
    <form class="loginForm-container" @submit.prevent="handleLogin">
      <DefaultBrand />
      <div class="loginForm-wrapper">
        <img src="../../public/images/OAuth/tapromFace.png" alt="temple" />
        <div class="loginDetails">
          <div class="head">
            <h1 class="title">Login to your Account</h1>
            <p>See what is going on with your business</p>
          </div>
          <IconButton @click="handleLoginWithGoogle"></IconButton>
          <div class="divider">
            <hr />
            <span>Or</span>
            <hr />
          </div>

          <div class="email-field">
            <label for="email">Email or Username</label>
            <InputField
              id="email"
              v-model="user.email"
              place-holder="johnsmith123@gmail.com"
            ></InputField>
          </div>

          <div class="password">
            <label for="password">Password</label>
            <div class="password-wrapper">
              <InputField
                id="password"
                :type="passwordFieldType"
                place-holder="6+ characters"
                v-model="user.password"
              />
              <i
                class="fa"
                :class="
                  passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'
                "
                @click="togglePasswordVisibility"
              ></i>
            </div>
          </div>

          <div class="more-option">
            <div class="rememberme">
              <input
                type="checkbox"
                id="rememberme"
                name="rememberme"
                v-model="rememberMe"
              />
              <label for="rememberme">Remember Me</label>
            </div>

            <button class="forgotpassword" @click="forgotPass">
              Forgot password?
            </button>
          </div>

          <PrimaryButton type="submit" content="Login"></PrimaryButton>

          <div class="back">
            <i class="fa-solid fa-angle-left"></i>
            <a href="/signup">Back</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Cookies from "js-cookie";

import { useRouter } from "vue-router";
import DefaultBrand from "@/components/Brands/DefaultBrand.vue";
import InputField from "@/components/InputField.vue";
import IconButton from "@/components/Buttons/IconButton.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import { useStore } from "@/stores/user";

export default {
  setup() {
    const myStore = useStore();

    return {
      myStore,
    };
  },
  components: {
    DefaultBrand,
    InputField,
    PrimaryButton,
    IconButton,
  },
  data() {
    return {
      password: "", // bind the password input value
      rememberMe: false,
      user: {
        email: "",
        username: "",
        password: "",
      },
      passwordFieldType: "password",
    };
  },

  // },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },

    handleLogin() {
      const email = this.user.email.trim();
      const username = this.user.email.trim();

      // just in case user input username
      const password = this.user.password.trim();

      // Retrieve users from local storage
      const users = JSON.parse(localStorage.getItem("users")) || []; // Ensure users is an array
      console.log(users);

      // Find the user with matching email and password

      const validUserInfo = users.find(
        (user) =>
          (String(user.email) === email &&
            String(user.password) === password) ||
          (String(user.username) === username && String(user.password))
      );

      console.log(validUserInfo);

      // Simulate checking credentials (replace with actual logic)
      if (validUserInfo) {
        console.log("Login successful!");
        this.myStore.isRegister = true;

        Swal.fire({
          title: "Success!",
          text: "Login successful!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // If "Remember Me" is checked, store credentials in cookies
        if (this.rememberMe) {
          Cookies.set("email", email, { expires: 1 }); // Expire in 7 days
          Cookies.set("password", password, { expires: 1 }); // Expire in 7 days
        } else {
          sessionStorage.setItem("loggedInUser", JSON.stringify(this.user));
        }

        // Redirect to home page
        // this.$router.push("/home");
        this.$router.push("/product");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Invalid email or password. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      }
    },
    goBackToSignUp() {
      console.log("go back.....");
      this.myStore.isRegister = false;
      this.$router.push("/signup");
    },

    handleLoginWithGoogle() {
      console.log("The login with google button is clicked");
    },
    forgotPass() {
      console.log("Someone forgot him/her password!");
    },
  },
  mounted() {
    // Check if user credentials exist in cookies
    const savedEmail = Cookies.get("email");
    const savedPassword = Cookies.get("password");

    if (savedEmail && savedPassword) {
      // Simulate automatic login
      this.user.email = savedEmail;
      this.user.password = savedPassword;
      this.autoLogin();
    }
  },
  autoLogin() {
    // automatically login using stored credentials

    console.log("Auto-login successfully!");

    Swal.fire({
      title: "Welcome Back!",
      text: "You are logged in automatically.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Redirect to home page.
    this.$router.push("/home");
  },
  handleLoginWithGoogle() {
    alert("Login with google clicked...");
  },
  forgotPass() {
    alert("Forgot password clicked...");
  },
};
</script>

<style scoped>
.password {
  width: 100%;
}
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
}

.divider hr {
  flex: 1;
  height: 1px;
  background: #ccc;
  border: none;
}
.title {
  font-weight: 500;
  font-size: 50px;
}
.divider span {
  margin: 0 10px;
}
.back {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  color: #af47d2;
  cursor: pointer;
}
.rememberme {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: gray;
}
.back a {
  color: #af47d2;
}
.loginForm-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  margin-top: 1rem;
}
.loginForm-wrapper {
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  background-color: #f0dff5;
}
.more-option {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.forgotpassword {
  font-weight: bold;
  color: #af47d2;
  cursor: pointer;
  border: none;
  background-color: #f0dff5;
}
.loginDetails {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}
.loginForm-wrapper img {
  width: 40rem;
  height: 40rem;
}
.loginPage {
  display: flex;
  justify-content: center;
  align-items: center;
}
.password-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.password-wrapper input {
  flex: 1;
}

.password-wrapper i {
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #af47d2;
  font-size: 1.2rem;
}

.password-wrapper i:hover {
  color: #7a2eb5;
}
</style>
