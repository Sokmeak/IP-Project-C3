<template>
  <div class="change-password">
    <h1>Change Password</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="current-password">Current Password:</label>
        <input
          type="password"
          id="current-password"
          v-model="currentPassword"
          required
        />
      </div>
      <div class="form-group">
        <label for="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          v-model="newPassword"
          required
        />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm New Password:</label>
        <input
          type="password"
          id="confirm-password"
          v-model="confirmPassword"
          required
        />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.newPassword !== this.confirmPassword) {
        alert("New passwords do not match.");
        return;
      }
      alert("Password updated successfully.");
      // Logic to update the password can be added here.
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
</style>
