<template>
	<section class="section_container">
		<section class="section_container_row">
			<section class="section_container_row--content">
				<h1>Contacto</h1>
			</section>
		</section>
		<Columns2
			title="Características para ser un Perro Guía"
			content="<p class='cambio_blanco'>A pesar de ser Labrador Reviever o Golden Retriever, los perros necesitan tener ciertas características para ser candidatos al trabajo de perro guía. Estas características son:</p><ul><li>Tamaño aproximado de 55 cm</li><li>Alto grado de vivacidad cerebral</li><li>Ser sociable hacia los hombres y animales</li></ul>"
		/>
	</section>
</template>

<script>
// @ is an alias to /src
import Columns2 from "@/components/Columns2.vue"

export default {
	name: "Inicio",
	components: {
		Columns2
	}
}
</script>
