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
import Swal from "sweetalert2";

export default {
  components: {
    DefaultBrand,
    InputField,
    PrimaryButton,
    IconButton,
  },
  data() {
    return {
      user: {
        email: "",

        password: "",
      },
      rememberMe: false,
      passwordFieldType: "password",
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    handleLogin() {
    const email = this.user.email.trim();
    const password = this.user.password.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userData = users.find(
        (user) => user.email === email || user.username === email
      );

    if (userData && userData.password === password) {
      // Save current user's email and username
      localStorage.setItem("currentEmail", userData.email);
      localStorage.setItem("currentUsername", userData.username);

      if (this.rememberMe) {
        Cookies.set("email", userData.email, { expires: 7, secure: true });
        Cookies.set("username", userData.username, { expires: 7, secure: true });
      }

      Swal.fire({
        title: "Success!",
        text: "Login successful!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        this.$router.push("/product/home"); // Redirect to product/home after login
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid email or password.",
        icon: "error",
        confirmButtonText: "Retry",
      });
      }
    },
    handleLoginWithGoogle() {
      alert("Login with Google clicked...");
    },
    forgotPass() {
      alert("Forgot password clicked...");
    },
  },
  mounted() {
    const savedEmail = Cookies.get("email");
    const savedUsername = Cookies.get("username");

    if (savedEmail && savedUsername) {
      this.user.email = savedEmail;
      this.rememberMe = true;
    }
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
