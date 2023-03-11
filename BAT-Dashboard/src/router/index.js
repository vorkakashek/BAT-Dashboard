import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Panel from "../views/Panel.vue";
import Dashboard from "../views/Panels/Dashboard.vue";

const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: "/:catchAll(.*)",
        redirect: { name: 'panel' },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: "/panel",
        name: "panel",
        component: Panel,
        redirect: { name: 'Dashboard' },
        children: [
            {
                name: 'Dashboard',
                path: 'Dashboard',
                component: () => import('../views/Panels/Dashboard.vue'),
            },
            {
                name: 'ISF',
                path: 'ISF',
                redirect: { name: 'ISF-Delivery-Execution' },
                component: () => import('../views/Panels/ISF/ISF.vue'),
                children: [
                    {
                        name: 'ISF-Delivery-Execution',
                        path: 'Delivery-Execution',
                        component: () => import('../views/Panels/ISF/ISF-Delivery-Execution.vue')
                    },
                    {
                        name: 'ISF-Comparison',
                        path: 'Comparison',
                        component: () => import('../views/Panels/ISF/ISF-Comparison.vue')
                    },
                    {
                        name: 'ISF-Progress',
                        path: 'Progress',
                        component: () => import('../views/Panels/ISF/ISF-Progress.vue')
                    },
                ],
            },
            {
                name: 'CycleMaterials',
                path: 'CycleMaterials',
                redirect: { name: 'CycleMaterials-Delivery-Execution' },
                component: () => import('../views/Panels/CycleMaterials/CycleMaterials.vue'),
                children: [
                    {
                        name: 'CycleMaterials-Delivery-Execution',
                        path: 'Delivery-Execution',
                        component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Delivery-Execution.vue')
                    },
                    // {
                    //     name: 'CycleMaterials-Execution',
                    //     path: 'Execution',
                    //     component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Execution.vue')
                    // }, 
                    {
                        name: 'CycleMaterials-Comparison',
                        path: 'Comparison',
                        component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Comparison.vue')
                    },
                    // {
                    //     name: 'CycleMaterials-Progress',
                    //     path: 'Progress',
                    //     component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Progress.vue')
                    // }, 
                ],
            },
            {
                name: 'Semi-permanentMaterials',
                path: 'Semi-permanentMaterials',
                redirect: { name: 'Semi-permanentMaterials-Delivery-Execution' },
                component: () => import('../views/Panels/Semi-permanentMaterials/Semi-permanentMaterials.vue'),
                children: [
                    {
                        name: 'Semi-permanentMaterials-Delivery-Execution',
                        path: 'Delivery-Execution',
                        component: () => import('../views/Panels/Semi-permanentMaterials/Semi-permanentMaterials-Delivery-Execution.vue')
                    },
                    {
                        name: 'Semi-permanentMaterials-Comparison',
                        path: 'Comparison',
                        component: () => import('../views/Panels/Semi-permanentMaterials/Semi-permanentMaterials-Comparison.vue')
                    },
                    {
                        name: 'Semi-permanentMaterials-Progress',
                        path: 'Progress',
                        component: () => import('../views/Panels/Semi-permanentMaterials/Semi-permanentMaterials-Progress.vue')
                    },
                ],
            },
            {
                name: 'Headers',
                path: 'Headers',
                redirect: { name: 'Headers-Delivery-Execution' },
                params: true,
                component: () => import('../views/Panels/Headers/Headers.vue'),
                children: [
                    {
                        name: 'Headers-Delivery-Execution',
                        path: 'Delivery-Execution',
                        component: () => import('../views/Panels/Headers/Headers-Delivery-Execution.vue')
                    },
                    {
                        name: 'Headers-Comparison',
                        path: 'Comparison',
                        component: () => import('../views/Panels/Headers/Headers-Comparison.vue')
                    },
                    {
                        name: 'Headers-Progress',
                        path: 'Progress',
                        component: () => import('../views/Panels/Headers/Headers-Progress.vue')
                    },
                ],
            },
            {
                name: 'Equipment',
                path: 'Equipment',
                redirect: { name: 'Equipment-Delivery-Execution' },
                params: true,
                component: () => import('../views/Panels/Equipment/Equipment.vue'),
                children: [
                    {
                        name: 'Equipment-Delivery-Execution',
                        path: 'Delivery-Execution',
                        component: () => import('../views/Panels/Equipment/Equipment-Delivery-Execution.vue')
                    },
                    {
                        name: 'Equipment-Comparison',
                        path: 'Comparison',
                        component: () => import('../views/Panels/Equipment/Equipment-Comparison.vue')
                    },
                    // {
                    //     name: 'Equipment-Progress',
                    //     path: 'Progress',
                    //     component: () => import('../views/Panels/Equipment/Equipment-Progress.vue')
                    // },
                ],
            },
            {
                name: 'Projects',
                path: 'Projects',
                redirect: { name: 'Projects-Catalog' },
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