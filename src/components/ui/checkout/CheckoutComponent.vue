<template>
  <div class="checkout-card">
    <h2>CHECKOUT</h2>
    <div class="form-component">
      <h2>BILLING DETAILS</h2>
      <div class="form-duo">
        <input-text
          type="text"
          placeholder="Saiki kusuo"
          title="Name"
          v-model="inputName.value"
          :error="inputName.error"
        ></input-text>
        <input-text
          type="email"
          placeholder="teruhashi@que.en"
          title="Email Address"
          v-model="inputEmail.value"
          :error="inputEmail.error"
        ></input-text>
        <input-text
          type="number"
          placeholder="+1 222-555-0136"
          title="Phone number"
          v-model="inputMobile.value"
          :error="inputMobile.error"
        ></input-text>
      </div>
    </div>
    <div class="form-component">
      <h2>SHIPPING INFO</h2>
      <div class="form-solo">
        <input-text
          type="text"
          placeholder="1137 Williams Avenue"
          title="Address"
          v-model="inputAddress.value"
          :error="inputAddress.error"
        ></input-text>
      </div>
      <div class="form-duo">
        <input-text
          type="text"
          placeholder="10001"
          title="ZIP Code"
          v-model="inputZip.value"
          :error="inputZip.error"
        ></input-text>
        <input-text
          type="text"
          placeholder="New York"
          title="City"
          v-model="inputCity.value"
          :error="inputCity.error"
        ></input-text>
        <input-text
          type="text"
          placeholder="United States"
          title="Country"
          v-model="inputCountry.value"
          :error="inputCountry.error"
        ></input-text>
      </div>
    </div>
    <div class="form-component">
      <h2>PAYMENT DETAILS</h2>
      <div class="form-duo">
        <h2 class="title">Payment Method</h2>
        <input-radio
          :values="[
            { title: 'e-Money', value: 'emoney' },
            { title: 'Cash on Delivery', value: 'cash' },
          ]"
          v-model="payment"
        ></input-radio>
      </div>
      <div class="form-duo" v-if="payment === 'emoney'">
        <input-text
          type="number"
          placeholder="238521993"
          title="e-Money Number"
          v-model="inputEmoney.value"
          :error="inputEmoney.error"
        ></input-text>
        <input-text
          type="number"
          placeholder="6891"
          title="e-Money PIN"
          v-model="inputEpin.value"
          :error="inputEpin.error"
        ></input-text>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from './forms/InputText.vue';
import InputRadio from './forms/InputRadio.vue';
import { ref, reactive, watch } from 'vue';

const inputName = reactive({ value: '', valid: null, error: null });
const inputEmail = reactive({ value: '', valid: null, error: null });
const inputMobile = reactive({ value: '', valid: null, error: null });
const inputAddress = reactive({ value: '', valid: null, error: null });
const inputZip = reactive({ value: '', valid: null, error: null });
const inputCity = reactive({ value: '', valid: null, error: null });
const inputCountry = reactive({ value: '', valid: null, error: null });
const inputEmoney = reactive({ value: '', valid: null, error: null });
const inputEpin = reactive({ value: '', valid: null, error: null });

const payment = ref('emoney');

const validateFilled = function (input) {
  if (input.value.length > 0) {
    input.valid = true;
    input.error = null;
  } else {
    input.valid = false;
    input.error = 'Make sure to fill in the form';
  }
};
const validateEmail = function (input) {
  if (input.valid) {
    // check the amount of @ Symbols
    let atAmount = 0;
    for (let i = 0; i < input.value.length; i++) {
      if (input.value[i] === '@') {
        atAmount++;
      }
    }
    if (atAmount != 1) {
      input.valid = false;
      input.error = 'make sure the email is formatted correctly';
      return;
    } else {
      input.valid = true;
      input.error = null;
    }

    //Check for correct formatting
    const [name, at] = input.value.split('@');
    if (name.length === 0 || at.length === 0) {
      input.valid = false;
      input.error = 'make sure the email is formatted correctly';
    } else {
      input.valid = true;
      input.error = null;
    }

    //check for dot after 2 sign
    let containsDot = false;
    for (let i = 0; i < at.length; i++) {
      if (at[i] === '.') {
        containsDot = true;
      }
    }
    if (containsDot === false) {
      input.valid = false;
      input.error = 'make sure the email is formatted correctly';
    } else {
      input.valid = true;
      input.error = null;
    }
  }
};

// watch input changes
watch(inputName, () => {
  validateFilled(inputName);
});
watch(inputEmail, () => {
  validateFilled(inputEmail);
  validateEmail(inputEmail);
});
watch(inputMobile, () => {
  validateFilled(inputMobile);
});
watch(inputAddress, () => {
  validateFilled(inputAddress);
});
watch(inputZip, () => {
  validateFilled(inputZip);
});
watch(inputCity, () => {
  validateFilled(inputCity);
});
watch(inputCountry, () => {
  validateFilled(inputCountry);
});
watch(inputEmoney, () => {
  validateFilled(inputEmoney);
});
watch(inputEpin, () => {
  validateFilled(inputEpin);
});
</script>

<style scoped>
.checkout-card {
  background-color: var(--card-color);
  box-shadow: 0 0 5px var(--color-black-200-shadow);
  border-radius: 8px;
  padding: 2rem;
}
h2 {
  font-size: 28px;
  letter-spacing: 3px;
}
.form-component {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-component h2 {
  font-size: 13px;
  letter-spacing: 3px;
  font-weight: 700;
  color: var(--color-main-100);
}
.form-solo {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6rem 1.2rem;
}
.form-duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem 1.2rem;
}

h2.title {
  color: hsl(0, 0%, 0%);
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 700;
}
@media only screen and (max-width: 600px) {
  .form-duo {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.6rem 1.2rem;
  }
}
</style>
