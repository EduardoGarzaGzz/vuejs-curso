import store         from '@/store';
import { createApp } from 'vue';
import App           from './App.vue';
import router        from './router';
import './styles/styles.scss';

createApp( App )
    .use( store )
    .use( router )
    .mount( '#app' );
