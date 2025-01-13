<template>
  <div class="popup-overlay" @click.self="onClose">
    <div class="popup-content">
      <button class="close-button" @click="onClose" aria-label="Close">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
      <div class="brand-name">
        <span :style="{ color: fontColor1 }">Angkor </span>
        <span :style="{ color: fontColor2 }">Apparel</span>
      </div>
      <p class="description">Login or create an account</p>
      <div class="button-group">
        <button class="action-button" @click="goToLogin">Login</button>
        <div class="divider">
          <span>Or</span>
        </div>
        <button class="action-button" @click="goToSignup">
          Create an account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fontColor1: String,
    fontColor2: String,
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
.popup-overlay {
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

.popup-content {
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  height: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.brand-name {
  position: absolute;
  top: 20px;
  left: 50px;
  font-family: "Sansita", sans-serif;
  font-size: 40px;
  font-weight: 800;
  color: #26355d;
  font-style: italic;
}

.description {
  font-size: 1rem;
  margin: 10px 0;
}
.close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  color: black;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 70%;
}

.action-button {
  width: 100%;
  padding: 15px;
  background-color: #ca10f8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.action-button:hover {
  background-color: #b11b98;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #ccc;
}

.divider span {
  padding: 0 10px;
  color: #666;
  font-size: 14px;
}
</style>
