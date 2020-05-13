const Sale = r => require.ensure([], () => r(require('../pages/sale/sale/index.vue')), 'Sale');

export default [
    {
        path: '/sale/index',
        name: 'Sale',
        component: Sale
    },
]