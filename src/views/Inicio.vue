<template>
	<section class="section_container">
		<section class="section_container_row">
			<section class="section_container_row--content">
				<img alt="Vue logo" src="../assets/logo.png" />
			</section>
		</section>
		<Columns3
			title="¿Quiénes Somos?"
			column1_content="Institución de Asistencia Privada fundada para criar, educar, entrenar y donar Perros Guía para Ciegos."
			column2_content="Brindamos rehabilitación Inclusiva a personas con discapacidad visual."
			column3_content="La primera escuela de perros guía en México y América Latina."
			column1_image_src="/school.svg"
			column2_image_src="/blind.svg"
			column3_image_src="/medal.svg"
			v-bind:column_links="false"
			v-bind:column_image="true"
		/>
		<Columns1
			title="¿Dónde estamos?"
			content="<p class='cambio_blanco'>A pesar de ser Labrador Reviever o Golden Retriever, los perros necesitan tener ciertas características para ser candidatos al trabajo de perro guía. Estas características son:</p><ul><li>Tamaño aproximado de 55 cm</li><li>Alto grado de vivacidad cerebral</li><li>Ser sociable hacia los hombres y animales</li></ul>"
		/>
		<Columns3
			title="¿Qué hacemos?"
			column1_content="Adoptamos perros para posteriormente entrenarlos en ser un Perro Guía."
			column2_content="Donamos Perros Guía a lass personas necesitadas, y los capacitamos para saber cómo vivir con un Perro Guía."
			column3_content="Cuando los Perros Guía cumplen su tiempo de servicio, los volvemos a dar en adopción para que una familia cuide de ellos."
			v-bind:column_links="true"
			v-bind:column_image="false"
			column1_link="/servicios/adopcion/definitiva"
			column2_link="/servicios/adopcion/temporal"
			column3_link="/servicios/adopcion/donacion"
		/>
	</section>
</template>

<script>
// @ is an alias to /src
import Columns1 from "@/components/Columns1.vue"
import Columns3 from "@/components/Columns3.vue"

export default {
	name: "Inicio",
	components: {
		Columns1,
		Columns3
	}
}
</script>
