import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ShopCart from '../views/ShopCart.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/shopCart',
		name: 'ShopCart',
		component: ShopCart,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
