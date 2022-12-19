import { createApp } from 'vue';
import router from './router.js';
import store from './data/index.js';
import './style.css';
import App from './App.vue';

//Base Components
import BaseButton from './components/base/BaseButton.vue';
import BaseNumber from './components/base/BaseNumber.vue';

//Frequent Components
import TheDescription from './components/ui/TheDescription.vue';
import FiltersComponent from './components/ui/Filters/FiltersComponent.vue';

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('base-number', BaseNumber);
app.component('the-description', TheDescription);
app.component('filters-component', FiltersComponent);
app.use(router);
app.use(store);
app.mount('#app');
