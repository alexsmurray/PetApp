import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PetView from "@/views/PetView.vue";
import EnclosureView from "@/views/EnclosureView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/pets/:id",
            name: "pets",
            component: PetView
        },
        {
            path: "/enclosures/:id",
            name: "enclosures",
            component: EnclosureView
        }
    ]
})

export default router