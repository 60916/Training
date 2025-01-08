import { createRouter, createWebHistory } from "vue-router";
import LogView from "../views/LogView.vue";
import LogBookView from "../views/LogBookView.vue";
import ActivitiesView from "../views/ActivitiesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "log",
            component: LogView,
        },
        {
            path: "/showlog",
            name: "logbook",
            component: LogBookView,
        },
        {
            path: "/statistics",
            name: "statistict",
            component: () => import("@/views/StatisticsView.vue"),
        },
        {
            path: "/activities",
            name: "activities",
            component: ActivitiesView,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/AboutView.vue"),
            meta: {
                title: "About",
            },
        },
        // Catcher in the rye
        {
            path: "/:catchAll(.*)",
            component: () => import("@/views/NoShow.vue"),
            meta: {
                title: "404",
            },
        },
    ],
});

export default router;
