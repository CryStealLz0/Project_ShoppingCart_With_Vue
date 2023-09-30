import Home from "./components/ShoppingCartComponent.vue";
import Chart from "./components/HalamanKeranjangComponent.vue";

export const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/",
        redirect: "home",
    },
    {
        path: "/chart",
        name: "chart",
        component: Chart,
    },
];
