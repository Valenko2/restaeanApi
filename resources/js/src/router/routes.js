import Menu from "@/pages/Menu.vue"
import About from "@/pages/About.vue";
import Reservation from "@/pages/Reservation.vue";

const routes = [
    { path: '/menu', component: Menu},
    {path: '/about', component: About},
    {path: '/reservation', component: Reservation}
];
export default routes
