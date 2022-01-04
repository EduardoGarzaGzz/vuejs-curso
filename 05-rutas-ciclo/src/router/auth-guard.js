const isAuthenticatedGuard = ( to, from, next ) => new Promise( ( resolve, reject ) => {
	const random = Math.random() * 100;
	if ( random > 50 ) {
		console.log( 'Autenticado: ', random );
		resolve( next() );
	} else {
		console.log( 'Bloqueado por el beforeEach Guard', random );
		resolve( next( { name: 'pokemon-id' } ) );
	}
} );

export default isAuthenticatedGuard;
