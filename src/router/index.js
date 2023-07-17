import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '../views/pages/home/Home.vue';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/single-news',
      name: 'single-news',
      component: () => import('../views/pages/home/news/SingleNews.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/pages/service/Service.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/pages/about/About.vue')
    },
    {
      path: '/sponsor-location',
      name: 'sponsor-location',
      component: () => import('../views/pages/sponsor/SponsorLocation.vue')
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: () => import('../views/pages/sponsor/Sponsor.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/pages/donate/Donate.vue')
    },
    {
      path: '/work-result',
      name: 'work-result',
      component: () => import('../views/pages/work-result/StoryGallery.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/pages/contact/Contact.vue')
    },

    {
      path: '/spark-project',
      name: 'spark-project',
      component: () => import('../views/pages/spark-project/SparkProject.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/pages/login/Login.vue')
    },
    {
      path: '/donate-checkout',
      name: 'donate-checkout',
      component: () => import('../views/pages/donate/DonateCheckout.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../templates/Test.vue')
    },
  ]
})

export default router