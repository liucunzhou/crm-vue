const MemberList = r => require.ensure([], () => r(require('../pages/customer/member/index.vue')), 'MemberList');
const MemberCreate = r => require.ensure([], () => r(require('../pages/customer/member/create.vue')), 'MemberCreate');
const MemberEdit = r => require.ensure([], () => r(require('../pages/customer/member/edit.vue')), 'MemberEdit');
const MemberSchedule = r => require.ensure([], () => r(require('../pages/customer/member/schedule.vue')), 'MemberSchedule');

const VisitList = r => require.ensure([], () => r(require('../pages/customer/visit/index.vue')), 'VisitList');
const VisitCreate = r => require.ensure([], () => r(require('../pages/customer/visit/create.vue')), 'VistCreate');

const IntoList = r => require.ensure([], () => r(require('../pages/customer/visit/index.vue')), 'IntoList');
const IntoCreate = r => require.ensure([], () => r(require('../pages/customer/visit/create.vue')), 'IntoCreate');
const IntoEdit = r => require.ensure([], () => r(require('../pages/customer/visit/create.vue')), 'IntoEdit');

export default [
    {
        path: '/customer/index',
        name: 'MemberList',
        component: MemberList
    },
    {
        path: '/customer/create',
        name: 'MemberCreate',
        component: MemberCreate
    },
    {
        path: '/customer/schedule',
        name: 'MemberSchedule',
        component: MemberSchedule
    },
    {
        path: '/customer/edit',
        name: 'MemberEdit',
        component: MemberEdit
    },

    {
        path: '/visit/index',
        name: 'VisitList',
        component: VisitList
    },
    {
        path: '/visit/create',
        name: 'VisitCreate',
        component: VisitCreate
    },

    {
        path: '/into/index',
        name: 'IntoList',
        component: IntoList
    },
    {
        path: '/into/create',
        name: 'IntoCreate',
        component: IntoCreate
    },
    {
        path: '/into/edit',
        name: 'IntoEdit',
        component: IntoEdit
    },
]