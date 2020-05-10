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
		path: "/acerca",
		name: "Acerca",
		component: () => import("../views/Acerca.vue")
		// children: [
		// 	{
		// 		path: "/acerca/historia",
		// 		name: "Mi verdadera Historia",
		// 		component: () => import("../views/Historia.vue")
		// 	},
		// 	{
		// 		path: "/acerca/mision",
		// 		name: "Misión - Visión - Valores",
		// 		component: () => import("../views/Mision.vue")
		// 	}
		// ]
	},
	{
		path: "/acerca/historia",
		name: "Mi verdadera Historia",
		component: () => import("../views/Historia.vue")
	},
	{
		path: "/acerca/mision",
		name: "Misión - Visión - Valores",
		component: () => import("../views/Mision.vue")
	},
	{
		path: "/Servicios",
		name: "Buenos Servicios",
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
