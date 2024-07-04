import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DestinationView from "@/views/DestinationView.vue";
import CrewView from "@/views/CrewView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination",
    name: "destination",
    component: DestinationView, // No need for lazy loading here if it's a direct import
  },
  {
    path: "/crew",
    name: "crew",
    component: CrewView, // No need for lazy loading here if it's a direct import
  },
  {
    path: '/',
    component: () => import('../layouts/HomeLayout.vue'),
    children: [
      {
        path: "about", // No leading slash for nested routes
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "contact", // No leading slash for nested routes
        name: "contact",
        component: () => import("../views/ContactView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
