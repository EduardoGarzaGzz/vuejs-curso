import axios from 'axios';

const uploadImage = async ( file: File = null ): Promise<any> => {
    if ( !file ) {
        return null;
    }

    try {
        const url      = 'https://api.cloudinary.com/v1_1/elsheimus/image/upload';
        const formData = new FormData();
        formData.append( 'upload_preset', 'curso-vue' );
        formData.append( 'file', file );

        const { data } = await axios.post( url, formData );

        return data.secure_url;
    } catch ( err ) {
        console.error( err );
        return null;
    }
};

export default uploadImage;
