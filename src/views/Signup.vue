<template>
  <div class="signupPage">
    <div class="signupForm-container">
      <DefaultBranch />
      <div class="signupForm-wrapper">
        <img src="../../public/images/OAuth/temple1.png" alt="temple" />
        <div class="signupDetails">
          <div class="head">
            <h1 class="title">Create new Account</h1>
            <p>See what is going on with your business</p>
          </div>

          <div class="basic-info">
            <div class="name-field">
              <span>Name</span>
              <InputField type="text" place-holder="John Smith"></InputField>
              <!-- input -->
            </div>
            <div class="username-field">
              <span>Username</span>
              <!-- input -->
              <InputField type="text" place-holder="John"></InputField>
            </div>
          </div>
          <div class="password">
            <span>Password</span>

            <!-- input -->
            <InputField
              type="password"
              place-holder="6+ characters"
            ></InputField>
          </div>

          <!-- button -primary -->
          <PrimaryButton content="Signup" @click="handleSignUp"></PrimaryButton>

          <div class="divider">
            <hr />
            <span>Or</span>
            <hr />
          </div>

          <!-- or -->

          <!-- Google button -->

          <IconButton @click="handleSignUpWithGoogle"></IconButton>

          <div class="more-option">
            <span>Have an account? </span>
            <span class="loginOption">Login</span>
          </div>
          <div class="back">
            <i class="fa-solid fa-arrow-left"></i>
            <a href="#">Back</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
}

.signupDetails {
  /* margin-top: 1.5rem; */
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center;*/
  gap: 1rem;
}
.signupForm-wrapper img {
  width: 40rem;
}
.signupPage {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
