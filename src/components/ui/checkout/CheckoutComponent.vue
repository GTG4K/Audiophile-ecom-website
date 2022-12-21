<template>
  <div class="checkout-card">
    <h2>CHECKOUT</h2>
    <div class="form-component">
      <h2>BILLING DETAILS</h2>
      <div class="form-duo">
        <input-text type="text" placeholder="Saiki kusuo" title="Name"></input-text>
        <input-text
          type="email"
          placeholder="teruhashi@que.en"
          title="Email Address"
        ></input-text>
        <input-text
          type="number"
          placeholder="+1 222-555-0136"
          title="Phone number"
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
        ></input-text>
      </div>
      <div class="form-duo">
        <input-text type="text" placeholder="10001" title="ZIP Code"></input-text>
        <input-text type="text" placeholder="New York" title="City"></input-text>
        <input-text type="text" placeholder="United States" title="Country"></input-text>
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
      <div class="form-duo">
        <input-text
          type="number"
          placeholder="238521993"
          title="e-Money Number"
        ></input-text>
        <input-text type="number" placeholder="6891" title="e-Money PIN"></input-text>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from './forms/InputText.vue';
import InputRadio from './forms/InputRadio.vue';
import { ref } from 'vue';

const payment = ref('emoney');
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
</style>
