import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/components/layout/MainLayout.vue';
import HomeView from '@/views/HomeView.vue';
import StudentsView from '@/views/StudentsView.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomeView,
        meta: {
          title: 'Главная'
        },
      },
      {
        path: '/schedule',
        name: 'Schedule',
        component: HomeView,
        meta: {
          title: 'Расписание'
        },
      },
      {
        path: '/students',
        name: 'Students',
        component: StudentsView,
        meta: {
          title: 'Ученики'
        },
      },
      {
        path: '/teachers',
        name: 'Teachers',
        component: HomeView,
        meta: {
          title: 'Преподаватели'
        },
      },
      {
        path: '/lessons',
        name: 'Lessons',
        component: HomeView,
        meta: {
          title: 'Занятия'
        },
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const baseTitle = 'Моя Учебная Платформа';

router.beforeEach((to, from, next) => {
  const title = to.meta.title ? `${to.meta.title} - ${baseTitle}` : baseTitle;
  document.title = title;
  next();
});

export default router;
