<template>
  <div class="account">
    <form class="account-form" @submit.prevent="updateUserInfo">
      <div class="form-row">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            v-model="user.username"
            placeholder="Username"
            required
          />
        </div>
        <div class="form-group">
          <label for="first-name">First name</label>
          <input
            id="first-name"
            type="text"
            v-model="user.firstName"
            placeholder="John"
            required
          />
        </div>
        <div class="form-group">
          <label for="last-name">Last name</label>
          <input
            id="last-name"
            type="text"
            v-model="user.lastName"
            placeholder="Smith"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          id="address"
          type="text"
          v-model="user.address"
          placeholder="66 Preah Monivong Blvd (93)"
          required
        />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="postal-code">Postal code</label>
          <input
            id="postal-code"
            type="text"
            v-model="user.postalCode"
            placeholder="12345"
            required
          />
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input
            id="city"
            type="text"
            v-model="user.city"
            placeholder="Phnom Penh"
            required
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            v-model="user.email"
            placeholder="someone@gmail.com"
            required
            disabled
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            v-model="user.phone"
            placeholder="+88578562489"
            required
          />
        </div>
      </div>
      <button type="submit" class="update-button">Update</button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2"; // Import SweetAlert2 for better alerts

export default {
  name: "Account",
  data() {
    return {
      user: {
        username: "", // Username field
        password: "", // Password field
        firstName: "",
        lastName: "",
        address: "",
        postalCode: "",
        city: "",
        email: "", // Email will be populated from localStorage
        phone: "",
      },
    };
  },

  methods: {
    updateUserInfo() {
      // Validate required fields
      if (
        !this.user.username ||
        !this.user.firstName ||
        !this.user.lastName ||
        !this.user.address ||
        !this.user.postalCode ||
        !this.user.city ||
        !this.user.phone
      ) {
        Swal.fire({
          title: "Error!",
          text: "Please fill out all required fields.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      // Save the updated user info to localStorage
      localStorage.setItem("user", JSON.stringify(this.user));

      // Show a success message
      Swal.fire({
        title: "Success!",
        text: "User information updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
  },
  created() {
    // Load the current user's email, username, and password from localStorage
    const currentEmail = localStorage.getItem("currentEmail");
    const currentUsername = localStorage.getItem("currentUsername");

    if (currentEmail) {
      this.user.email = currentEmail;
    }
    if (currentUsername) {
      this.user.username = currentUsername;
    }



    // Load saved user info from localStorage (if available)
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // If the saved user's email matches the current email, load the saved data
    if (savedUser && savedUser.email === this.user.email) {
      this.user = { ...this.user, ...savedUser }; // Merge saved data with current email and username
    } else {
      // If the email doesn't match, reset all fields to their initial state
      this.user = {
        username: currentUsername || "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        postalCode: "",
        city: "",
        email: currentEmail || "",
        phone: "",
      };
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #555;
}

.account-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-row {
  display: flex;
  gap: 15px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #333;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.update-button {
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

.update-button:hover {
  background-color: #892ddf;
}
</style>
