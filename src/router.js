import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import CategoryPage from './pages/CategoryPage.vue';
import ProductPage from './pages/ProductPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';

//categories
import EarphonesView from './components/category/EarphonesView.vue';
import SpeakersView from './components/category/SpeakersView.vue';
import HeadphonesView from './components/category/HeadphonesView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    {
      path: '/category',
      component: CategoryPage,
      children: [
        {
          path: 'headphones',
          component: HeadphonesView,
        },
        {
          path: 'speakers',
          component: SpeakersView,
        },
        {
          path: 'earphones',
          component: EarphonesView,
        },
      ],
    },
    {
      path: '/product/:id',
      component: ProductPage,
      props: true,
    },
    {
      path: '/checkout',
      component: CheckoutPage,
    },
  ],
});

export default router;
