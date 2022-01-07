const daybookRouter = {
	name: 'DayBook',
	component: () => import(/* webpackChunkName: "DayBookLayout" */ '@/modules/daybook/layouts/DayBookLayout'),
	children: [
	
	]
};

export default daybookRouter;
