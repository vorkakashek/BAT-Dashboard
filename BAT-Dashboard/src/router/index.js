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
                    component: () => import('../views/Panels/ISF.vue'),
                    children: [
                        {
                            name: 'ISF-Delivery-Execution',
                            path: 'Delivery-Execution',
                            component: () => import('../views/Panels/ISF-Delivery-Execution.vue')
                        }, 
                        {
                            name: 'ISF-Comparison',
                            path: 'Comparison',
                            component: () => import('../views/Panels/ISF-Comparison.vue')
                        }, 
                    ],
                },
            ]
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
    ],
});

export default router;