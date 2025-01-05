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
        <router-link :to="`/userpage/${userId}${item.path}`">
          <span class="icon"><i :class="item.icon"></i></span>
          <span class="label">{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
    <div class="button-container">
      <button class="back-button" @click="goBack">
        <i class="fa-solid fa-arrow-left"></i> Back
      </button>
      <button class="logout-button" @click="handleLogout">
        <i class="fa-solid fa-right-from-bracket"></i> Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
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
    logout() {
      console.log("Logging out...");
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
  padding-top:10px;
  font-size: 1rem;
  color: #7e8b99;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.header h2 {
  padding-top:10px;
  font-size: 1.8rem;
  color: #7e8b99;
  font-family: Georgia, 'Times New Roman', Times, serif;
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
.menu li a:hover,
.menu li.active a {
  color: #6c63ff;
}

.menu li a .icon {
  font-size: 1rem;
  padding-left:10px;
  margin-right: 15px;
  color: #2c3e50;
}

.menu li a .label {
  font-size: 1rem;
  font-weight: 500;
}

.menu li.active a .label {
  font-weight: bold; 
  
  border-radius: 5px;
}

.back-button{
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
