import { ref } from "vue";
import axios   from "axios";

const useUser = () => {
    const users       = ref( [] );
    const isLoading   = ref( true );
    const currentPage = ref( 1 );
    const errorMsg    = ref( '' );
    
    const getUsers = async ( page = 1 ) => {
        if ( page <= 0 ) page = 1;
        
        isLoading.value = true;
        
        const resp = await axios.get( `https://reqres.in/api/users`, {
            params: {
                page
            }
        } );
        
        const data = resp.data.data;
        if ( data.length > 0 ) {
            users.value       = data;
            currentPage.value = page;
            errorMsg.value    = '';
        } else {
            errorMsg.value = 'No hay mas usuarios';
        }
        
        isLoading.value = false;
    }
    
    getUsers();
    
    return {
        users,
        isLoading,
        currentPage,
        errorMsg,
        nextPage: () => getUsers( currentPage.value + 1 ),
        lastPage: () => getUsers( currentPage.value - 1 ),
    }
}

export default useUser;
