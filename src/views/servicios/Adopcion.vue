<template>
	<section class="section_container">
		<section class="section_container_row">
			<section class="section_container_row--content">
				<h1>Programas de Adopción</h1>
			</section>
		</section>
		<section class="section_container_row">
			<section class="section_container_row--content">
				<p>
					Nuestros programas de adopción garantizan el cuidado de los cachorros
					que formarán parte del entrenamiento para ser Perros Guía, y tú puedes
					formar parte del crecimiento y cuidado de nuestros cachorros.
				</p>
			</section>
		</section>
		<section class="section_container_row">
			<section
				class="section_container_row--content 
				section_container_row--content--columns"
			>
				<section class="section_container_row--content--columns--element">
					<h2>Adopción Temporal</h2>
					<p>
						Este programa consiste en cuidar a un perro cachorro durante su
						primer año de vida; posterior a este año, el perro deberá regresar a
						la escuela para iniciar con el entrenamiento.
					</p>
					<router-link
						to="/servicios/adopcion/definitiva"
						class="global-link global-link--small"
					>
						Conoce más
					</router-link>
				</section>
				<section class="section_container_row--content--columns--element">
					<h2>Adopción Temporal</h2>
					<p>
						Algunos de los perros que ingresan a la escuela, lamentablemente no
						cumplen con los requisitos y no pueden ser entrenados. Estos perros
						los volvemos a dar en adopción para que una familia cuide de ellos
						definitivamente.
					</p>
					<router-link
						to="/servicios/adopcion/temporal"
						class="global-link global-link--small"
					>
						Conoce más
					</router-link>
				</section>
				<section class="section_container_row--content--columns--element">
					<h2>Adopción Temporal</h2>
					<p>
						Si tienes un perro de raza Labrador o Golden Retriever, puedes
						donarlo a la escuela para ser entrenado.
					</p>
					<router-link
						to="/servicios/adopcion/donacion"
						class="global-link global-link--small"
					>
						Conoce más
					</router-link>
				</section>
			</section>
		</section>
		<BannerSolicitar />
	</section>
</template>

<script>
// @ is an alias to /src
import BannerSolicitar from "@/components/BannerSolicitar.vue"

export default {
	components: {
		BannerSolicitar
	}
}
</script>

<style scoped lang="scss">
section.section_container_row--content--columns {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 16px;
	grid-auto-flow: row;

	@media only screen and (max-width: 640px) {
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-gap: 2.5rem;
	}
}

.section_container_row--content--columns--element {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-content: stretch;
	align-items: center;
	text-align: center;
	background-color: var(--main-gray);
	padding: 20px;
}
</style>
