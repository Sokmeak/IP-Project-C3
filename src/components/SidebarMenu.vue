<template>
  <div class="sidebar">
    <div class="header">
      <h3>Hi,</h3>
      <h2>{{ username }}</h2>
    </div>
    <ul class="menu">
      <li
        v-for="item in menuItems"
        :key="item.path"
        :class="{ active: isActive(item.path) }"
      >
        <router-link class="link" :to="`/userpage/${userId}${item.path}`">
          <span class="icon"><i :class="`iconImage ` + item.icon"></i></span>
          <span class="label">{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
    <div class="button-container">
      <button class="back-button" @click="goBack">
        <i class="fa-solid fa-arrow-left"></i> Back
      </button>

      <button class="logout-button" @click="confirmLogout">
        <i class="fa-solid fa-right-from-bracket"></i> Logout
      </button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default {
  name: "SidebarMenu",
  props: {
    userId: {
      type: Number,
      required: true, // Ensure userId is required
    },
  },

  setup() {},
  data() {
    return {
      username: "", // Add a username field
      menuItems: [
        {
          label: "My Orders",
          path: "/orders",
          icon: "fa-solid fa-cart-shopping",
        },
        {
          label: "My Favorites",
          path: "/favorites",
          icon: "fa-solid fa-heart",
        },
        {
          label: "Account Overview",
          path: "/account",
          icon: "fa-solid fa-user",
        },
        {
          label: "Change Password",
          path: "/change-password",
          icon: "fa-solid fa-lock",
        },
        {
          label: "Payment Methods",
          path: "/payment-methods",
          icon: "fa-solid fa-credit-card",
        },
      ],
    };
  },
  created() {
    // Retrieve the username from local storage
    this.username = localStorage.getItem("currentUsername") || "Guest";
  },
  methods: {
    isActive(path) {
      const currentPath = this.$route.path;
      const fullPath = `/userpage/${this.userId}${path}`;
      return currentPath === fullPath;
    },
    goBack() {
      this.$router.replace({
        name: "Home", // Refers to the child route
        params: {}, // Add any route parameters here, if needed
        props: true, // Pass props to the component
      });
    },
    confirmLogout() {
      // Show a confirmation dialog
      Swal.fire({
        title: "Logout Confirmation",
        text: "Are you sure you want to logout?",
        showCancelButton: true,
        confirmButtonText: "Logout",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#dc3545", // Red color for the logout button
        cancelButtonColor: "#6c757d", // Gray color for the cancel button
        customClass: {
          popup: "custom-swal-popup", // Custom class for the popup
          title: "custom-swal-title", // Custom class for the title
          content: "custom-swal-content", // Custom class for the content
          confirmButton: "custom-swal-confirm-button", // Custom class for the confirm button
          cancelButton: "custom-swal-cancel-button", // Custom class for the cancel button
        },
      }).then((result) => {
        if (result.isConfirmed) {
          this.handleLogout(); // Proceed with logout if confirmed
        }
      });
    },
    handleLogout() {
      // Clear user-related data from local storage and cookies
      localStorage.removeItem("currentEmail");
      localStorage.removeItem("currentUsername");
      Cookies.remove("email");
      Cookies.remove("username");

      // Show a success message
      Swal.fire({
        title: "Logged Out!",
        text: "You have been logged out successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Redirect to the login page
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f9f3fc;
  padding: 30px;
  border-radius: 10px;
}

.header {
  border-radius: 10px 10px 0 0;
  background-color: white;
  padding-left: 10px;
  margin-bottom: 20px;
  height: 15vh;
}

.header h3 {
  padding-top: 10px;
  font-size: 1rem;
  color: #7e8b99;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.header h2 {
  padding-top: 10px;
  font-size: 1.8rem;
  color: #7e8b99;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.menu {
  flex: 1;
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 10px 0;
}
.menu li.active {
  border-left: 4px solid #9b51e0; /* Purple active indicator */
}
.menu li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #555;
  background-color: #ffffff;
  padding: 12px 15px;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.menu li a .icon {
  font-size: 1rem;
  padding-left: 10px;
  margin-right: 15px;
  color: #2c3e50;
}

/* control the hover and active color */
.menu li a:hover .iconImage,
.menu li a:hover,
.menu li.active a,
.menu li.active .iconImage {
  color: #6c63ff;
}

.menu li a .label {
  font-size: 1rem;
  font-weight: 500;
}

.menu li.active a .label {
  font-weight: bold;
  border-radius: 5px;
}

.back-button {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid transparent;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.logout-button {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid transparent;
  background-color: #f50404;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: #333;
  color: white;
}

.logout-button {
  color: #e9e9e9;
  border-color: #e74c3c;
}

.logout-button:hover {
  background-color: #e74c3c;
  color: white;
}

.custom-swal-popup {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.custom-swal-title {
  color: #343a40;
  font-size: 1.5rem;
  font-weight: 600;
}

.custom-swal-content {
  color: #495057;
  font-size: 1rem;
}

.custom-swal-confirm-button {
  background-color: #dc3545;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
}

.custom-swal-confirm-button:hover {
  background-color: #c82333;
}

.custom-swal-cancel-button {
  background-color: #6c757d;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
}

.custom-swal-cancel-button:hover {
  background-color: #5a6268;
}
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    border-radius: 0;
  }

  .menu li a .label {
    display: none;
  }

  .menu li a {
    justify-content: center;
    padding: 10px;
  }
}
</style>
