import {
    createRouter,
    createWebHistory
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Panel from "../views/Panel.vue";
import Dashboard from "../views/Panels/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:catchAll(.*)",
            redirect: "/panel",
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: "/panel",
            name: "Dashboard",
            component: Panel,
            redirect: '/panel/Dashboard',
            children: [
                {
                    name: 'Dashboard',
                    path: 'Dashboard',
                    component: () => import('../views/Panels/Dashboard.vue'),
                },
                {
                    name: 'ISF / POSM',
                    path: 'ISF',
                    // redirect: { name: 'ISF-Delivery-Execution' },
                    component: () => import('../views/Panels/ISF/ISF.vue'),
                    children: [
                        // {
                        //     name: 'ISF-Delivery-Execution',
                        //     path: 'Equipment',
                        //     component: () => import('../views/Panels/ISF/ISF-Delivery-Execution.vue')
                        // },
                        // {
                        //     name: 'ISF-Comparison',
                        //     path: 'Comparison',
                        //     component: () => import('../views/Panels/ISF/ISF-Comparison.vue')
                        // },
                        // {
                        //     name: 'ISF-Progress',
                        //     path: 'Progress',
                        //     component: () => import('../views/Panels/ISF/ISF-Progress.vue')
                        // },
                        {
                            name: 'CycleMaterials',
                            path: 'CycleMaterials',
                            redirect: '/panel/ISF/CycleMaterials/Delivery-Execution',
                            // redirect: { name: 'CycleMaterials-Delivery-Execution' },
                            component: () => import('../views/Panels/CycleMaterials/CycleMaterials.vue'),
                            children: [
                                {
                                    name: 'CycleMaterials Delivery Execution',
                                    meta: {
                                        label: 'Delivery Execution',
                                    },
                                    path: 'Delivery-Execution',
                                    component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Delivery-Execution.vue')
                                },
                                {
                                    name: 'CycleMaterials Comparison',
                                    meta: {
                                        label: 'Comparison',
                                    },
                                    path: 'Comparison',
                                    component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Comparison.vue')
                                },
                                // {
                                //     name: 'CycleMaterials Progress',
                                //     meta: {
                                //         label: 'Progress',
                                //     },
                                //     path: 'Progress',
                                //     component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Progress.vue')
                                // },
                            ],
                        },
                        {
                            name: 'Semi-permanentMaterials',
                            path: 'Semi-permanentMaterials',
                            // redirect: { name: 'Semi-permanentMaterials-Delivery-Execution' },
                            redirect: '/panel/ISF/Semi-permanentMaterials/Delivery-Execution',
                            component: () => import('../views/Panels/Semi-permanentMaterials/Semi-permanentMaterials.vue'),
                            children: [
                                {
                                    name: 'Semi-permanentMaterials Delivery Execution',
                                    meta: {
                                        label: 'Delivery Execution',
                                    },
                                    path: 'Delivery-Execution',
                                    component: () => import('../views/Panels/Semi-permanentMaterials/Semi-permanentMaterials-Delivery-Execution.vue')
                                },
                                {
                                    name: 'Semi-permanentMaterials Comparison',
                                    meta: {
                                        label: 'Comparison',
                                    },
                                    path: 'Comparison',
                                    component: () => import('../views/Panels/Semi-permanentMaterials/Semi-permanentMaterials-Comparison.vue')
                                },
                                {
                                    name: 'Semi-permanentMaterials Progress',
                                    meta: {
                                        label: 'Progress',
                                    },
                                    path: 'Progress',
                                    component: () => import('../views/Panels/Semi-permanentMaterials/Semi-permanentMaterials-Progress.vue')
                                },
                            ],
                        },
                        {
                            name: 'Headers',
                            path: 'Headers',
                            redirect: '/panel/ISF/Headers/Delivery-Execution',
                            // params: true,
                            component: () => import('../views/Panels/Headers/Headers.vue'),
                            children: [
                                {
                                    name: 'Headers Delivery Execution',
                                    meta: {
                                        label: 'Delivery Execution',
                                    },
                                    path: 'Delivery-Execution',
                                    component: () => import('../views/Panels/Headers/Headers-Delivery-Execution.vue')
                                },
                                {
                                    name: 'Headers Comparison',
                                    meta: {
                                        label: 'Comparison',
                                    },
                                    path: 'Comparison',
                                    component: () => import('../views/Panels/Headers/Headers-Comparison.vue')
                                },
                                {
                                    name: 'Headers Progress',
                                    meta: {
                                        label: 'Progress',
                                    },
                                    path: 'Progress',
                                    component: () => import('../views/Panels/Headers/Headers-Progress.vue')
                                },
                            ],
                        },
                        {
                            name: 'Equipment',
                            path: 'Equipment',
                            redirect: '/panel/ISF/Equipment/Delivery-Execution',
                            params: true,
                            component: () => import('../views/Panels/ISF/ISF-layout.vue'),
                            children: [
                                {
                                    name: 'Equipment Delivery Execution',
                                    path: 'Delivery-Execution',
                                    meta: {
                                        label: 'Delivery Execution',
                                    },
                                    component: () => import('../views/Panels/ISF/ISF-Delivery-Execution.vue')
                                },
                                {
                                    name: 'Equipment Comparison',
                                    meta: {
                                        label: 'Comparison',
                                    },
                                    path: 'Comparison',
                                    component: () => import('../views/Panels/ISF/ISF-Comparison.vue')
                                },
                                {
                                    name: 'Equipment Progress',
                                    meta: {
                                        label: 'Progress',
                                    },
                                    path: 'Progress',
                                    component: () => import('../views/Panels/ISF/ISF-Progress.vue')
                                },
                            ],
                        },
                        {
                            name: 'Premium Partners',
                            path: 'PremiumPartners',
                            redirect: '/panel/ISF/PremiumPartners/Delivery-Execution',
                            params: true,
                            component: () => import('../views/Panels/Equipment/Equipment.vue'),
                            children: [
                                {
                                    name: 'PremiumPartners Delivery Execution',
                                    path: 'Delivery-Execution',
                                    meta: {
                                        label: 'Delivery Execution',
                                    },
                                    component: () => import('../views/Panels/Equipment/Equipment-Delivery-Execution.vue')
                                },
                                {
                                    name: 'PremiumPartners Comparison',
                                    meta: {
                                        label: 'Comparison',
                                    },
                                    path: 'Comparison',
                                    component: () => import('../views/Panels/Equipment/Equipment-Comparison.vue')
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'POSM Balance',
                    path: 'POSM',
                    // redirect: { name: 'POSM-CAPEX-Depts' },
                    params: true,
                    component: () => import('../views/Panels/POSM/POSM.vue'),
                    children: [
                        {
                            name: 'CAPEX-Depts',
                            path: 'CAPEX-Depts',
                            component: () => import('../views/Panels/POSM/POSM-CAPEX-Depts.vue')
                        },
                        {
                            name: 'OPEX-Depts',
                            path: 'OPEX-Depts',
                            component: () => import('../views/Panels/POSM/POSM-OPEX-Depts.vue')
                        },
                        {
                            name: 'Stock',
                            path: 'Stock',
                            component: () => import('../views/Panels/POSM/POSM-Stock.vue')
                        },
                        {
                            name: 'Transits',
                            path: 'Transits',
                            component: () => import('../views/Panels/POSM/POSM-Transits.vue')
                        },
                    ],
                },
                {
                    name: 'Projects',
                    path: 'Projects',
                    // redirect: { name: 'Projects-Catalog' },
                    params: true,
                    component: () => import('../views/Panels/Projects/Projects.vue'),
                    children: [
                        {
                            name: 'Projects-Catalog',
                            path: 'Catalog',
                            params: true,
                            component: () => import('../views/Panels/Projects/Projects-Catalog.vue')
                        },
                        {
                            name: 'Projects-Delivery-Execution',
                            path: 'Delivery-Execution',
                            component: () => import('../views/Panels/Projects/Projects-Delivery-Execution.vue')
                        },
                        {
                            name: 'Projects-Comparison',
                            path: 'Comparison',
                            component: () => import('../views/Panels/Projects/Projects-Comparison.vue')
                        },
                        {
                            name: 'Projects-Progress',
                            path: 'Progress',
                            component: () => import('../views/Panels/Projects/Projects-Progress.vue')
                        },
                    ],
                },
            ]
        },
    ],
});

export default router;