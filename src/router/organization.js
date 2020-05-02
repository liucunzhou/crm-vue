const DepartmentList = r => require.ensure([], () => r(require('../pages/organization/department/index.vue')), 'DepartmentList');
const DepartmentCreate = r => require.ensure([], () => r(require('../pages/organization/department/index.vue')), 'DepartmentCreate');
const DepartmentEdit = r => require.ensure([], () => r(require('../pages/organization/department/index.vue')), 'DepartmentEdit');

const UserList = r => require.ensure([], () => r(require('../pages/organization/department/index.vue')), 'UserList');
const UserCreate = r => require.ensure([], () => r(require('../pages/organization/department/index.vue')), 'UserCreate');
const UserEdit = r => require.ensure([], () => r(require('../pages/organization/department/index.vue')), 'UserEdit');

export default [
    {
        path: '/department/index',
        name: 'DepartmentList',
        component: DepartmentList
    },
    {
        path: '/department/create',
        name: 'DepartmentCreate',
        component: DepartmentCreate
    },
    {
        path: '/department/edit',
        name: 'DepartmentEdit',
        component: DepartmentEdit
    },
    {
        path: '/user/index',
        name: 'UserList',
        component: UserList
    },
    {
        path: '/user/create',
        name: 'UserCreate',
        component: UserCreate
    },
    {
        path: '/user/edit',
        name: 'UserEdit',
        component: UserEdit
    },
]