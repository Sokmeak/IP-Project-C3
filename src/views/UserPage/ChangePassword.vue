<template>
  <div class="change-password">
    <h1>Change Password</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="current-password">Current Password:</label>
        <div class="password-wrapper">
          <input
            :type="passwordFieldType"
            id="current-password"
            v-model="currentPassword"
            required
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
      <div class="form-group">
        <label for="new-password">New Password:</label>
        <div class="password-wrapper">
          <input
            :type="passwordFieldType"
            id="new-password"
            v-model="newPassword"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm New Password:</label>
        <div class="password-wrapper">
          <input
            :type="passwordFieldType"
            id="confirm-password"
            v-model="confirmPassword"
            required
          />
        </div>
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2"; // Import SweetAlert2 for better alerts
import Cookies from "js-cookie"; // Import js-cookie for cookie management

export default {
  name: "ChangePassword",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      passwordFieldType: "password", // Add this property
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    handleSubmit() {
      // Retrieve the stored users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Find the current user by email (stored in localStorage)
      const currentEmail = localStorage.getItem("currentEmail");
      const currentUser = existingUsers.find(
        (user) => user.email === currentEmail
      );

      // Check if the current password matches
      if (!currentUser || currentUser.password !== this.currentPassword) {
        Swal.fire({
          title: "Error!",
          text: "Current password is incorrect.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      // Check if new password and confirm password match
      if (this.newPassword !== this.confirmPassword) {
        Swal.fire({
          title: "Error!",
          text: "New passwords do not match.",
          icon: "error",
          confirmButtonText: "Retry",
        });
        return;
      }

      // Validate the new password
      const isValidPassword = this.validatePassword(this.newPassword);
      if (!isValidPassword.isValid) {
        Swal.fire({
          title: "Invalid Password!",
          text: isValidPassword.message,
          icon: "error",
          confirmButtonText: "Retry",
        });
        return;
      }

      // Update the password in localStorage
      currentUser.password = this.newPassword;
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // Also update the password in a cookie (optional)
      Cookies.set("userPassword", this.newPassword, { expires: 7 }); // Expires in 7 days

      Swal.fire({
        title: "Success!",
        text: "Password updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Clear the form fields
        this.currentPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
      });
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
.change-password {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.change-password h1 {
  font-size: 3rem;
  text-align: center;
}
.form-group {
  margin: 15px 0;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 5px;
  width: 10rem;
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #a445f7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
  border-radius: 15px;
}

button:hover {
  background-color: #9844d4;
}

.password-wrapper {
  position: relative;
}

.password-wrapper i {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #af47d2;
  font-size: 1.2rem;
}

.password-wrapper i:hover {
  color: #7a2eb5;
}
</style>
