const ucenter = r => require.ensure([], () => r(require('../pages/organization/user/ucenter.vue')), 'ucenter')

export default [
    {
        path: '',
        name: 'default',
        component: ucenter
    }
]