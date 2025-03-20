import { createRouter, createWebHistory } from 'vue-router';
import Today from '../pages/Today.vue';
import Calendar from '../pages/Calendar.vue';
import AddEvent from '../pages/AddEvent.vue';
import Overview from '../pages/Overview.vue';
import Profile from '../pages/Profile.vue';

const routes = [
    { path: '/', component: Today },
    { path: '/calendar', component: Calendar },
    { path: '/add-event', component: AddEvent },
    { path: '/overview', component: Overview },
    { path: '/profile', component: Profile },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
