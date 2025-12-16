import Home from './components/Home.vue';
import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [{ path: '/', component: Home }];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
