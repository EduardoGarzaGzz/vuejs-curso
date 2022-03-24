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
	},
	{
		path     : '/users',
		name     : 'Users',
		component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
	},
	{
		path     : '/pokemon-search',
		name     : 'pokemon-search',
		component: () => import(/* webpackChunkName: "about" */ '../views/SearchPokemon.vue')
	},
	{
		path     : '/pokemon/:id',
		name     : 'pokemon-id',
		component: () => import(/* webpackChunkName: "about" */ '../views/Pokemon.vue')
	}
]

const router = createRouter( {
	history: createWebHashHistory(),
	routes
} )

export default router
