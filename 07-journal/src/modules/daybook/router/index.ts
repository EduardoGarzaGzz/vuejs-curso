import { RouteComponent } from 'vue-router';

const daybookRouter = {
    name     : 'DayBook',
    component: (): Promise<RouteComponent> => import(/* webpackChunkName: "DayBookLayout" */ '../layouts/DayBookLayout.vue'),
    children : [
        {
            path     : '',
            name     : 'no-entry',
            component: (): Promise<RouteComponent> => import(/* webpackChunkName: "NoEntrySelected" */ '../views/NoEntrySelected.vue')
        },
        {
            path     : ':id',
            name     : 'entry',
            component: (): Promise<RouteComponent> => import(/* webpackChunkName: "EntryView" */ '../views/EntryView.vue')
        }
    ]
};

export default daybookRouter;
