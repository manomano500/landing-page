import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DestinationView from "@/views/DestinationView.vue";
import CrewView from "@/views/CrewView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {path: '/destination',
    name: 'destination',
    component: () => DestinationView,
  },
  {path: '/crew',
  name: 'crew',
  component: () => CrewView,},
  {
    path: '/',
    component: () => import('../layouts/HomeLayout.vue'),
    children: [


      {

        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../views/ContactView.vue"),

      }

    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
