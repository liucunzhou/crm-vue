const Dress = r => require.ensure([], () => r(require('../pages/dress/dress/index.vue')), 'Dress');
const DressCategory = r => require.ensure([], () => r(require('../pages/dress/category/index.vue')), 'DressCategory');
const DressPackage = r => require.ensure([], () => r(require('../pages/dress/package/index.vue')), 'DressPackage');
const DressSupplier = r => require.ensure([], () => r(require('../pages/dress/supplier/index.vue')), 'DressSupplier');

export default [
    {
        path: '/dress/index',
        name: 'Dress',
        component: Dress
    },
    {
        path: '/dress/category',
        name: 'DressCategory',
        component: DressCategory
    },
    {
        path: '/dress/package',
        name: 'DressPackage',
        component: DressPackage
    },
    {
        path: '/dress/supplier',
        name: 'DressSupplier',
        component: DressSupplier
    }
]