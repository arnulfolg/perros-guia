import Vue from "vue"
import VueRouter from "vue-router"
import Inicio from "../views/Inicio.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Inicio",
		component: Inicio
	},
	{
		path: "/Acerca",
		name: "Acerca",
		component: () => import("../views/Acerca.vue")
	},
	{
		path: "/Servicios",
		name: "Servicios",
		component: () => import("../views/Servicios.vue")
	},
	{
		path: "/Conocenos",
		name: "Conocenos",
		component: () => import("../views/Conocenos.vue")
	},
	{
		path: "/Contacto",
		name: "Contacto",
		component: () => import("../views/Contacto.vue")
	}
]

const router = new VueRouter({
	routes
})

export default router
