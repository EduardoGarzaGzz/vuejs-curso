import { createRouter, createWebHashHistory } from 'vue-router'
import Home                                   from "@/views/Home";

const routes = [
	{
		path     : '/',
		name     : 'Home',
		component: Home
	},
	{
		path     : '/counter',
		name     : 'Counter',
		component: () => import(/* webpackChunkName: "Counter" */ '../views/Counter.vue')
	},
	{
		path     : '/about',
		name     : 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = createRouter( {
	history: createWebHashHistory(),
	routes
} )

export default router
