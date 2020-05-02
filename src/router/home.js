const Main = r => require.ensure([], () => r(require('../pages/main.vue')), 'main')
const Form = r => require.ensure([], () => r(require('../pages/form.vue')), 'form')

export default [
    {
        path: '',
        name: 'default',
        component: Main
    },
    {
        path: '/form',
        name: 'form',
        component: Form
    }
]