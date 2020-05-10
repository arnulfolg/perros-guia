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
	},
	{
		path: "/acerca/historia",
		name: "Mi verdadera Historia",
		component: () => import("../views/acerca/Historia.vue")
	},
	{
		path: "/acerca/mision",
		name: "Misión - Visión - Valores",
		component: () => import("../views/acerca/Mision.vue")
	},
	{
		path: "/servicios",
		name: "Buenos Servicios",
		component: () => import("../views/Servicios.vue")
	},
	{
		path: "/servicios/entranamiento",
		name: "Buenos Servicios",
		component: () => import("../views/servicios/Entrenamiento.vue")
	},
	{
		path: "/servicios/solicitar",
		name: "Buenos Servicios",
		component: () => import("../views/servicios/Solicitar.vue")
	},
	{
		path: "/servicios/adopcion",
		name: "Buenos Servicios",
		component: () => import("../views/servicios/Adopcion.vue")
	},
	{
		path: "/servicios/adopcion/definitiva",
		name: "Buenos Servicios",
		component: () => import("../views/servicios/adopcion/Definitiva.vue")
	},
	{
		path: "/servicios/adopcion/temporal",
		name: "Buenos Servicios",
		component: () => import("../views/servicios/adopcion/Temporal.vue")
	},
	{
		path: "/servicios/adopcion/donacion",
		name: "Buenos Servicios",
		component: () => import("../views/servicios/adopcion/Donacion.vue")
	},
	{
		path: "/servicios/rehabilitacion",
		name: "Buenos Servicios",
		component: () => import("../views/servicios/Rehabilitacion.vue")
	},
	{
		path: "/Conocenos",
		name: "Conocenos",
		component: () => import("../views/Conocenos.vue")
	},
	{
		path: "/Conocenos/voluntariado",
		name: "Conocenos",
		component: () => import("../views/conocenos/Voluntariado.vue")
	},
	{
		path: "/Conocenos/donativos",
		name: "Conocenos",
		component: () => import("../views/conocenos/Donativos.vue")
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
