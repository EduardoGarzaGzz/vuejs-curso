import ListPage                               from "@/modules/pokemon/pages/ListPage";
import AboutPage                              from "@/modules/pokemon/pages/AboutPage";
import PokemonPage                            from "@/modules/pokemon/pages/PokemonPage";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{ path: '/', component: ListPage },
	{ path: '/about', component: AboutPage },
	{ path: '/id', component: PokemonPage },
];

const router = createRouter( {
	history: createWebHashHistory(),
	routes
} );

export default router;
