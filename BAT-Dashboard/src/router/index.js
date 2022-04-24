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
                    redirect: { name: 'CycleMaterials-Delivery' },
                    component: () => import('../views/Panels/CycleMaterials/CycleMaterials.vue'),
                    children: [
                        {
                            name: 'CycleMaterials-Delivery',
                            path: 'Delivery',
                            component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Delivery.vue')
                        }, 
                        {
                            name: 'CycleMaterials-Execution',
                            path: 'Execution',
                            component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Execution.vue')
                        }, 
                        {
                            name: 'CycleMaterials-Comparison',
                            path: 'Comparison',
                            component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Comparison.vue')
                        }, 
                        {
                            name: 'CycleMaterials-Progress',
                            path: 'Progress',
                            component: () => import('../views/Panels/CycleMaterials/CycleMaterials-Progress.vue')
                        }, 
                    ],
                },
                {
                    name: 'Touchpoints',
                    path: 'Touchpoints',
                    redirect: { name: 'Touchpoints-Delivery-Execution' },
                    component: () => import('../views/Panels/Touchpoints/Touchpoints.vue'),
                    children: [
                        {
                            name: 'Touchpoints-Delivery-Execution',
                            path: 'Delivery-Execution',
                            component: () => import('../views/Panels/Touchpoints/Touchpoints-Delivery-Execution.vue')
                        }, 
                        {
                            name: 'Touchpoints-Comparison',
                            path: 'Comparison',
                            component: () => import('../views/Panels/Touchpoints/Touchpoints-Comparison.vue')
                        }, 
                        {
                            name: 'Touchpoints-Progress',
                            path: 'Progress',
                            component: () => import('../views/Panels/Touchpoints/Touchpoints-Progress.vue')
                        }, 
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