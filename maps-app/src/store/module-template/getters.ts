import { IState }        from '@/store';
import { IExampleState } from '@/store/module-template/state';
import { GetterTree }    from 'vuex';

const getters: GetterTree<IExampleState, IState> = {};

export default getters;
