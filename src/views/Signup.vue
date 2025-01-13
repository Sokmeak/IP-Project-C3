<template>
  <div class="signupPage">
    <form class="signupForm-container" @submit.prevent="handleSignUp">
      <DefaultBranch />
      <div class="signupForm-wrapper">
        <img src="../../public/images/OAuth/temple1.png" alt="temple" />
        <div class="signupDetails">
          <div class="head">
            <h1 class="title">Create new Account</h1>
            <p>See what is going on with your business</p>
          </div>
          <div class="basic-info">
            <div class="email-field">
              <label for="email">Email</label>
              <InputField
                id="email"
                type="email"
                v-model="userSignUP.email"
                required
                place-holder="johnsmith123@gmail.com"
              ></InputField>
            </div>
            <div class="username-field">
              <label for="username">Username</label>
              <InputField
                id="username"
                type="text"
                v-model="userSignUP.username"
                place-holder="John"
                required
              ></InputField>
            </div>
          </div>
          <div class="password">
            <label for="password">Password</label>
            <div class="password-wrapper">
              <InputField
                id="password"
                :type="passwordFieldType"
                place-holder="6+ characters"
                v-model="userSignUP.password"
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

          <PrimaryButton type="submit" content="Signup"></PrimaryButton>

          <div class="divider">
            <hr />
            <span>Or</span>
            <hr />
          </div>

          <IconButton @click="handleSignUpWithGoogle"></IconButton>

          <div class="more-option">
            <span>Have an account? </span>
            <span class="loginOption" @click="goToLogin">Login</span>
          </div>
          <div class="back">
            <i class="fa-solid fa-angle-left"></i>
            <a href="#">Back</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DefaultBranch from "@/components/Brands/DefaultBrand.vue";
import InputField from "@/components/InputField.vue";
import IconButton from "@/components/Buttons/IconButton.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import Swal from "sweetalert2";

export default {
  components: {
    DefaultBranch,
    InputField,
    PrimaryButton,
    IconButton,
  },
  data() {
    return {
      userSignUP: {
        username: "",
        email: "",
        password: "",
      },
      passwordFieldType: "password",
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    goToLogin() {
      this.$router.push("/login");
    },
    handleSignUp() {
      const email = this.userSignUP.email.trim();
      const username = this.userSignUP.username.trim();
      const password = this.userSignUP.password.trim();

      if (!email || !username || !password) {
        Swal.fire({
          title: "Error!",
          text: "All fields are required.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      const userKey = `user_${email}`;
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      if (existingUsers.some((user) => user.email === email)) {
        Swal.fire({
          title: "Error!",
          text: "Email is already registered!",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      const isValidPassword = this.validatePassword(password);

      if (!isValidPassword.isValid) {
        Swal.fire({
          title: "Invalid Password!",
          text: isValidPassword.message,
          icon: "error",
          confirmButtonText: "Retry",
        });
        return;
      }

      // Store user data (plain text password - not recommended for production)
      const userData = { email, username, password };
      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      Swal.fire({
        title: "Success!",
        text: "You have signed up successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        this.$router.push("/login");
      });

      console.log("Stored users: ", localStorage.getItem("users"));
    },
    
    validatePassword(password) {
      if (password.length < 6) {
        return {
          isValid: false,
          message: "Password must be at least 6 characters long.",
        };
      }

      const hasLetter = /[a-zA-Z]/.test(password);
      const hasNumber = /\d/.test(password);

      if (!hasLetter || !hasNumber) {
        return {
          isValid: false,
          message: "Password must contain at least one letter and one number.",
        };
      }

      return { isValid: true };
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
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  color: #af47d2;
}
.back a {
  color: #af47d2;
}
.basic-info {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}
.signupForm-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  margin-top: 1rem;
}
.signupForm-wrapper {
  display: flex;
  flex-direction: row;

  /* padding: 2rem; */
  border-radius: 1rem;

  background-color: #f0dff5;
}
.more-option {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.more-option .loginOption {
  font-weight: bold;
  color: #af47d2;
  cursor: pointer;
}

.signupDetails {
  /* margin-top: 1.5rem; */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center;*/
  gap: 0.5rem;
}
.signupForm-wrapper img {
  width: 40rem;
  height: 40rem;
}
.signupPage {
  display: flex;
  justify-content: center;
  align-items: center;
}
.password-wrapper {
  display: flex;
  align-items: center;
  position: relative;
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

<!-- get user input and store them in database -->

<!-- after save with valid info navigate to the login page**d -->
