<template>
  <div class="account">
    <form class="account-form">
      <div class="form-row">
        <div class="form-group">
          <label for="first-name">First name</label>
          <input id="first-name" type="text" placeholder="John" />
        </div>
        <div class="form-group">
          <label for="last-name">Last name</label>
          <input id="last-name" type="text" placeholder="Smith" />
        </div>
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          id="address"
          type="text"
          placeholder="66 Preah Monivong Blvd (93)"
        />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="postal-code">Postal code</label>
          <input id="postal-code" type="text" placeholder="12345" />
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input id="city" type="text" placeholder="Phnom Penh" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="someone@gmail.com" />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input id="phone" type="tel" placeholder="+88578562489" />
        </div>
      </div>
      <button type="submit" class="update-button">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Account",
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
