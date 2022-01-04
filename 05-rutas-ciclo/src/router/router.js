import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard                   from "@/router/auth-guard";

const routes = [
	{
		path     : '/pokemon',
		name     : 'pokemon',
		component: () => import( /* webpackChunkName: "PokemonLayout"  */ '@/modules/pokemon/layouts/PokemonLayout'),
		children : [
			{
				path     : '',
				name     : 'home',
				component: () => import( /* webpackChunkName: "ListPage"  */ '@/modules/pokemon/pages/ListPage')
			},
			{
				path     : 'about',
				name     : 'about',
				component: () => import( /* webpackChunkName: "AboutPage"  */ '@/modules/pokemon/pages/AboutPage')
			},
			{
				path     : 'pokemon/:id',
				name     : 'pokemon-id',
				component: () => import( /* webpackChunkName: "PokemonPage"  */ '@/modules/pokemon/pages/PokemonPage'),
				props    : ( route ) => {
					const id = Number( route.params.id );
					return isNaN( id ) ? { id: 1 } : { id };
				}
			},
		]
	},
	{
		path       : '/dbz',
		name       : 'dbz',
		beforeEnter: [
			isAuthenticatedGuard
		],
		component  : () => import( /* webpackChunkName: "DragonBallLayout"  */ '@/modules/dbz/layouts/DragonBallLayout'),
		children   : [
			{
				path     : 'characters',
				name     : 'dbz-characters',
				component: () => import( /* webpackChunkName: "Characters"  */ '@/modules/dbz/pages/Characters'),
			},
			{
				path     : 'about',
				name     : 'dbz-about',
				component: () => import( /* webpackChunkName: "About"  */ '@/modules/dbz/pages/About'),
			},
			{
				path    : '',
				redirect: { name: 'dbz-characters' }
			}
		]
	},
	{
		path     : '/:pathMatch(.*)*',
		component: () => import( /* webpackChunkName: "NoPageFound"  */ '@/modules/shared/pages/NoPageFound')
	},
];

const router = createRouter( {
	history: createWebHashHistory(),
	routes
} );

// router.beforeEach( ( to, from, next ) => {
// 	const random = Math.random() * 100;
// 	if ( random > 50 ) {
// 		console.log( 'Autenticado: ', random );
// 		next();
// 	} else {
// 		console.log( 'Bloqueado por el beforeEach Guard', random );
// 		next( { name: 'pokemon-id' } );
// 	}
// } );
// const canAccess = () => new Promise( (
// 	( resolve, reject ) => {
// 		const random = Math.random() * 100;
// 		if ( random > 50 ) {
// 			console.log( 'Autenticado: ', random );
// 			resolve( true );
// 		} else {
// 			console.log( 'Bloqueado por el beforeEach Guard', random );
// 			resolve( false );
// 		}
// 	}
// ) );
//
// router.beforeEach( async ( to, from, next ) => {
// 	const authorized = await canAccess();
// 	authorized
// 		? next()
// 		: next( { name: 'pokemon-id' } );
// } );

export default router;
