import counterStore    from '@/store/counter';
import { createStore } from 'vuex';

const store = createStore( {
    modules: {
        counter: counterStore
    }
} );

export default store;
