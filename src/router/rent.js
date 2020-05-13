const Rent = r => require.ensure([], () => r(require('../pages/rent/rent/index.vue')), 'Rent');

export default [
    {
        path: '/rent/index',
        name: 'Rent',
        component: Rent
    },
]