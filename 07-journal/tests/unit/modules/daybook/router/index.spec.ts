import daybookRouter from '@/modules/daybook/router';


describe( 'Test Router: Daybook index', function() {
	it( 'debe de tener esta configuration', async () => {
		expect( daybookRouter ).toMatchObject( {
			name     : 'DayBook',
			component: expect.any( Function ),
			children : [
				{
					path     : '',
					name     : 'no-entry',
					component: expect.any( Function )
				},
				{
					path     : ':id',
					name     : 'entry',
					component: expect.any( Function ),
					props    : expect.any( Function )
				}
			]
		} );

//		expect( await daybookRouter.children[ 0 ].component().default.name ).toBe( 'NoEntrySelected' );
		const promiseRouter: Promise<any>[] = [];
		daybookRouter.children.forEach( ( child: any ) => promiseRouter.push( child.component() ) );

		const router = ( await Promise.all( promiseRouter ) ).map( ( component: any ) => component.default.name );

		expect( router ).toContain( 'EntryView' );
		expect( router ).toContain( 'NoEntrySelected' );
	} );

	it( 'debe de retornar el id de la ruta', () => {
		const router = {
			params: {
				id: 'ABC-123'
			}
		};

		const entryRoute = daybookRouter.children.find( ( child: any ) => child.name === 'entry' );
		expect( entryRoute.props( router ) ).toEqual( { id: 'ABC-123' } );
	} );
} );
