<template>
  <div class="userpage">
    <div class="sidebar-container">
      <SidebarMenu class="sidebar-menu" :user-id="1" />
    </div>
    <div class="main-content">
      <h2 class="content-heading">{{ pageTitle }}</h2>
      <div class="content-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu.vue";
export default {

 
  name: "UserPage",
  components: {
    SidebarMenu,
  },

  
  computed: {
    pageTitle() {
      const routeName = this.$route.name || "Home";
      return routeName.replace(/([A-Z])/g, " $1").trim();
    },
  },
};
</script>

<style scoped>
.userpage {
  display: flex;
  height: 100vh;
  background-color: white;
  padding: 20px;
}

.sidebar-container {
  height: 95%;
  flex: 0 0 280px;
  margin: 20px 50px 10px;
  background-color: #f9f3fc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 95%;
}

.content-heading {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
}

.content-container {
  flex: 1;
  width: 90%;
  background-color: #f9f3fc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
}
</style>
