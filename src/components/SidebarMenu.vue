<template>
  <div class="sidebar">
    <div class="header">
      <h3>Hi,</h3>
      <h2>Somebody</h2>
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
      <button class="logout-button" @click="showLogoutConfirmation">
        <i class="fa-solid fa-right-from-bracket"></i> Logout
      </button>
    </div>
    <!-- Logout Confirmation Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h3>Logout confirmation</h3>
        <p>Are you sure you want to logout?</p>
        <div class="modal-buttons">
          <button class="confirm-button" @click="logout">Logout</button>
          <button class="cancel-button" @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  props: {
    // userId: {
    //   type: String,
    //   required: true,
    // },
    userId: Number,
  },
  data() {
    return {
      userId: 1,
      showModal: false,
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
  methods: {
    isActive(path) {
      const currentPath = this.$route.path;
      const fullPath = `/userpage/${this.userId}${path}`;
      return currentPath === fullPath;
    },
    goBack() {
      this.$router.go(-1);
    },
    showLogoutConfirmation() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    logout() {
      this.showModal = false;
      console.log("Logged out");
      // Add your logout logic here
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
  /* color:yellow; */
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
  /* color: #171363; */
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal h3 {
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #333;
}

.modal p {
  margin-bottom: 20px;
  font-size: 1rem;
  color: #666;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.confirm-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button {
  background-color: #ddd;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.confirm-button:hover {
  background-color: #c0392b;
}

.cancel-button:hover {
  background-color: #bbb;
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
