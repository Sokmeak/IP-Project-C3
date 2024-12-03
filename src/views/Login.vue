<template>
  <div class="loginPage">
    <form class="loginForm-container" @submit.prevent="handleLogin">
      <DefaultBranch />
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
            <label for="email">Email</label>
            <InputField
              id="email"
              type="email"
              v-model="user.email"
              place-holder="johnsmith123@gmail.com"
              required
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
            <i class="fa-solid fa-arrow-left"></i>
            <a href="#">Back</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Cookies from "js-cookie";

import { useRouter } from "vue-router";
import DefaultBranch from "@/components/Brands/DefaultBrand.vue";
import InputField from "@/components/InputField.vue";
import IconButton from "@/components/Buttons/IconButton.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";

export default {
  components: {
    DefaultBranch,
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
        password: "",
      },
      passwordFieldType: "password",
    };
  },
  // created() {
  //   const router = useRouter();
  //   // Check for existing session cookies
  //   const savedEmail = Cookies.get("email");
  //   const savedPassword = Cookies.get("password");

  //   if (savedEmail && savedPassword) {
  //     // Redirect to home page if cookies are valid
  //     router.redirect("/home");
  //   }
  // },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },

    // handleLogin() {
    //   // use the data from the database in stead
    //   const email = this.user.email; // Example bound value
    //   const password = this.user.password; // Example bound value

    //   if (email === "saroussokmeak721@gmail.com" && password === "123456") {
    //     console.log("Correct info");
    //     this.$router.push("/home"); //Redirect to home
    //     Cookies.set("email", this.user.email, { expires: 1 });
    //     Cookies.set("password", this.user.password, { expires: 1 });
    //   }

    // if (this.rememberMe) {
    //   // Save email and password in cookies with a 3-day expiration
    //   // save
    //   Cookies.set("email", this.user.email, { expires: 1 });
    //   Cookies.set("password", this.user.password, { expires: 1 });
    // }

    //       logout() {
    // // Remove cookies for email and password
    // Cookies.remove("email");
    // Cookies.remove("password");

    // console.log("User has been logged out. Cookies cleared.");

    // // Optionally redirect to the login page
    // const router = useRouter();
    // router.push("/login");
    //}
    // else {

    // clear the user credecials  after they logout if the use didn't check remember me
    // otherwise we save them with 1 day expire

    // can i remove after
    // Cookies.remove("email");
    // Cookies.remove("password");
    // }
    //   else {
    //     alert("Invalid credentials");
    //   }

    //   // Redirect to home page after login
    // },

    handleLogin() {
      const email = this.user.email;
      const password = this.user.password;

      // Simulate checking credentials (replace with actual database/API logic)
      if (email === "saroussokmeak721@gmail.com" && password === "123456") {
        console.log("Correct info");

        // If "Remember Me" is checked, store credentials in cookies
        if (this.rememberMe) {
          Cookies.set("email", email, { expires: 3 }); // Expire in 3 days
          Cookies.set("password", password, { expires: 3 }); // Expire in 3 days
        } else {
          // Otherwise, use session storage for temporary storage
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("password", password);
        }

        // Redirect to home page
        this.$router.push("/home");
      } else {
        alert("Invalid credentials");
      }
    },

    handleLoginWithGoogle() {
      console.log("The login with google button is clicked");
    },
    forgotPass() {
      console.log("Someone forgot him/her password!");
    },
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
  gap: 0.5rem;
  color: #af47d2;
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
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
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
