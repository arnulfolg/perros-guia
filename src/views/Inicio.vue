<template>
	<section class="section_container">
		<section class="section_container_row">
			<section class="section_container_row--content">
				<Carousel
					:autoplay="true"
					:autoplayTimeout="10000"
					:autoplayHoverPause="false"
					:perPage="1"
					:scrollPerPage="true"
					:navigationEnabled="true"
					:paginationActiveColor="color_active"
					:paginationColor="color_default"
				>
					<Slide>
						<img
							src="../assets/images/banner_perro_guia_con_dueño.png"
							alt="Perro guía con su dueño, en un atardecer"
						/>
					</Slide>
					<Slide>
						<img
							src="../assets/images/pareja_ciegos.png"
							alt="Pareja de personas mayores con impedimentos visuales"
						/>
					</Slide>
					<Slide>
						<img
							src="../assets/images/perro_observando_izquierda.png"
							alt="Perro observando al lado izquierdo"
						/>
					</Slide>
					<Slide>
						<img
							src="../assets/images/super_perro.png"
							alt="Perro vestido con camisa de superman"
						/>
					</Slide>
				</Carousel>
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
		<section
			class="section_container_row section_container_row--color-chocolate"
		>
			<section class="section_container_row--content section_map">
				<h2 class="section_map--title">¿Dónde estamos?</h2>
				<section class="section_map--info">
					<section class="section_map--info--item">
						<img src="../assets/map.svg" alt="" />
						<p class="title">Dirección:</p>
						<p class="description">
							Avenida Canal Nacional número 1075, Colonia Villa Quietud,
							Coyoacán, Ciudad de México, Código Postal 04960
						</p>
					</section>
					<section class="section_map--info--item">
						<img src="../assets/phone.svg" alt="" />
						<p class="title">Teléfonos:</p>
						<p class="description">55 5673 1587 y 55 5673 6464</p>
					</section>
					<section class="section_map--info--item">
						<img src="../assets/envelope.svg" alt="" />
						<p class="title">Escríbenos:</p>
						<p class="description">perrosguiaparaciegos@perrosguia.org.mx</p>
					</section>
				</section>
				<section class="section_map--image">
					<img src="../assets/images/map.png" alt="" class="image" />
				</section>
			</section>
		</section>
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
		<BannerSolicitar />
	</section>
</template>

<script>
// @ is an alias to /src
import Columns3 from "@/components/Columns3.vue"
import BannerSolicitar from "@/components/BannerSolicitar.vue"
import { Carousel, Slide } from "vue-carousel"

export default {
	name: "Inicio",
	components: {
		Columns3,
		BannerSolicitar,
		Carousel,
		Slide
	},
	props: {
		color_default: { type: String, default: "#c7c2b3" },
		color_active: { type: String, default: "#191110" }
	}
}
</script>

<style lang="scss">
section.section_map {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(2, auto);
	grid-template-areas:
		"content-title content-title"
		"content-info content-image";
	grid-gap: 16px;

	> .section_map--title {
		grid-area: content-title;
		justify-self: center;
	}

	> .section_map--info {
		grid-area: content-info;
	}

	> .section_map--image {
		grid-area: content-image;
		place-self: center;
		min-width: 0;
	}

	@media only screen and (max-width: 820px) {
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-template-areas:
			"content-title"
			"content-info"
			"content-image";
	}
}

section.section_map--info--item {
	display: grid;
	grid-template-columns: 0.1fr 1fr;
	grid-template-rows: repeat(2, auto);
	grid-template-areas:
		"info-img info-title"
		". info-description";
	grid-gap: 1px 10px;
	margin-bottom: 16px;

	img {
		grid-area: info-img;
		place-self: center;
	}

	p.title {
		grid-area: info-title;
		place-self: center stretch;
		margin: 0;
	}

	p.description {
		grid-area: info-description;
	}
}
section.section_container_row section.section_container_row--content {
	padding-left: 0;
	padding-right: 0;
}
.VueCarousel {
	img {
		width: 100%;
	}

	.VueCarousel-dot-container {
		margin: 0 !important;
	}

	.VueCarousel-navigation-prev {
		transform: translateY(-150%) translateX(50%);
		background-color: var(--main-gray);
		border-radius: 4px;
		color: var(--color-chocolate);
	}
	.VueCarousel-navigation-next {
		transform: translateY(-150%) translateX(-50%);
		background-color: var(--main-gray);
		border-radius: 4px;
		color: var(--color-chocolate);
	}
}
</style>
