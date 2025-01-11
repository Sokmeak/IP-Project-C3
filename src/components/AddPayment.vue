<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Add Payment Method</h2>
      <div class="tab-navigation">
        <button
          :class="{ active: activeTab === 'Card' }"
          @click="activeTab = 'Card'"
        >
          Card
        </button>
        <button
          :class="{ active: activeTab === 'Bank' }"
          @click="activeTab = 'Bank'"
        >
          Bank Account
        </button>
      </div>
      <form v-if="activeTab === 'Card'" @submit.prevent="addNewCard">
        <div class="form-row">
          <div class="input-icon">
            <label for="card-number">Card number</label>
            <input
              type="text"
              id="card-number"
              placeholder="1234 1234 1234 1234"
              v-model="newCard.number"
              maxlength="19"
              required
              aria-label="Enter your card number"
              @input="formatCardNumber"
              class="cardinput"
            />
            <img :src="cardIcon" alt="Card Icon" v-if="cardIcon" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="expiry">Expiration</label>
            <input
              type="text"
              id="expiry"
              placeholder="MM / YY"
              v-model="newCard.expiry"
              maxlength="5"
              required
              aria-label="Enter card expiration date"
              @input="formatExpiry"
            />
          </div>
          <div class="form-group">
            <label for="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              placeholder="CVC"
              v-model="newCard.cvc"
              maxlength="3"
              required
              aria-label="Enter card CVC"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="country">Country</label>
            <select id="country" v-model="newCard.country">
              <option value="Cambodia">Cambodia</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>
          <div class="form-group">
            <label for="zip">ZIP</label>
            <input
              type="text"
              id="zip"
              placeholder="ZIP"
              v-model="newCard.zip"
              required
              aria-label="Enter ZIP code"
            />
          </div>
        </div>
        <div class="terms">
          <input type="checkbox" id="terms" v-model="agreedToTerms" required />
          <label for="terms">
            I agree that by saving this payment method it will be available for
            use by all who access this page or process funding
          </label>
        </div>
        <div class="actions">
          <button type="button" class="cancel-button" @click="$emit('close')">
            Cancel
          </button>
          <button type="submit" class="save-button" :disabled="!agreedToTerms">
            Save Payment Method
          </button>
        </div>
        <p class="powered-by">Powered by <strong>Stripe</strong></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "Card",
      newCard: {
        number: "",
        expiry: "",
        cvc: "",
        country: "United States",
        zip: "",
      },
      agreedToTerms: false,
    };
  },
  computed: {
    cardIcon() {
      const cardNumber = this.newCard.number.replace(/\s/g, ""); // Remove spaces
      if (cardNumber.startsWith("4")) {
        return "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"; // Visa
      } else if (cardNumber.match(/^5[1-5]/)) {
        return "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"; // Mastercard
      }
      return;
    },
  },
  methods: {
    addNewCard() {
      const card = {
        id: Date.now(),
        last4: this.newCard.number.slice(-4),
        ...this.newCard,
      };
      this.$emit("add-card", card);
      this.$emit("close");
    },

    formatCardNumber() {
      // Remove non-digit characters
      this.newCard.number = this.newCard.number.replace(/\D/g, "");
      // Add space every 4 digits
      if (this.newCard.number.length > 4) {
        this.newCard.number = this.newCard.number.replace(
          /(\d{4})(?=\d)/g,
          "$1 "
        );
      }
    },
    formatExpiry(event) {
      const cursorPosition = event.target.selectionStart;
      let value = this.newCard.expiry.replace(/\D/g, ""); // Remove non-digits

      // Insert a slash after the first 2 digits (month)
      if (value.length > 2) {
        value = `${value.slice(0, 2)}/${value.slice(2)}`;
      }

      // Ensure the month is not greater than 12
      if (value.length >= 2) {
        const month = value.slice(0, 2);
        if (parseInt(month, 10) > 12) {
          value = "12" + value.slice(2); // Cap the month at 12
        }
      }

      // Limit to 7 characters (MM/YYYY)
      if (value.length > 5) {
        value = value.slice(0, 5);
      }

      this.newCard.expiry = value;

      // Restore the cursor position
      this.$nextTick(() => {
        event.target.setSelectionRange(cursorPosition, cursorPosition);
      });
    },
  },
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 35rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.tab-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 15px;
}

.tab-navigation button {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 3px solid transparent;
}

.tab-navigation button.active {
  color: #5c3b91;
  border-color: #5c3b91;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.input-icon {
  position: relative;
  width: 100%;
}

.input-icon input {
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.input-icon img {
  position: absolute;
  right: 15px;
  top: 60%;
  transform: translateX(-50%);
  width: 20px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #ffffff;
}

.terms {
  text-align: left;
  margin-top: 15px;
}

.terms label {
  font-size: 0.85rem;
  color: #666;
}

.actions {
  display: flex;
  justify-content: end;
  margin-top: 20px;
}

.cancel-button {
  background: #ffffff;
  color: #d81616;
  padding: 10px 20px;
  border: none;
  border-radius: 2rem;
  border: 1px solid #ddd;
  cursor: pointer;
}

.save-button {
  background: #b32027;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  margin-left: 1rem;
}

.save-button:disabled {
  background: #ffffff;
  cursor: not-allowed;
  color: #5a40b8;
  border: 1px solid #ddd;
}

.powered-by {
  font-size: 0.75rem;
  margin-top: 20px;
  color: #5a40b8;
}
</style>
