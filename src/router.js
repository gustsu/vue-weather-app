import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Locations from './views/Locations.vue';
import About from './views/About.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/locations',
			name: 'locations',
			component: Locations
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/settings',
			name: 'settings',
			component: Settings
		}
	]
});
