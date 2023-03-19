import { createRouter, createWebHistory } from "vue-router";
import Repos from "../components/Repos.vue"
import Home from "../components/Home.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repos",
    name: "Repos",
    component: Repos,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
