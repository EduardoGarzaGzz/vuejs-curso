//import uploadImage from '@/modules/daybook/helpers/uploadImage';
//import axios       from 'axios';
//
//const cloudinary = require( 'cloudinary' ).v2;
//
//cloudinary.config = ( {
//	cloud_name: 'elsheimus',
//	api_key   : '886477385839374',
//	api_secret: '6QllXrY68u91pvjFgcXkJ0ZBoPk'
//} );
//
//
//describe( 'Test Helper: Upload image', function() {
//	it( 'debe de cargar un archivo y retornar el url', async ( done ) => {
//		const { data } = await axios.get(
//			'https://res.cloudinary.com/elsheimus/image/upload/v1641629502/curso-vue/zxmpenoosnfyr7lw3uin.jpg', {
//				responseType: 'arraybuffer'
//			} );
//
//		const file = new File( [ data ], 'foto.jpg', {
//			type: 'image/jpeg'
//		} );
//
//		const url = await uploadImage( file );
//		expect( typeof url ).toBe( 'string' );
//
//		const segments = url.split( '/' );
//		const imageId  = segments[ segments.length - 1 ].replace( '.jpg', '' );
//
////		cloudinary.uploader.destroy( imageId, () => done() );
//	} );
//} );
