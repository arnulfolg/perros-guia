<template>
	<section class="section_container_row">
		<section class="section_container_row--content">
			<section class="section_container_row--content--title content-title">
				<h2>Solicita un Perro Guía</h2>
			</section>
			<section class="section_container_row--content--columns content-left">
				<img src="../assets/logo.png" alt="" />
			</section>
			<section class="section_container_row--content--columns content-right">
				<p>
					Si te encuentras interesado en solicitar un Perro Guía, puedes
					encontrar toda la información detallada en la siguiente página.
				</p>
				<router-link class="global-link" to="/servicios/solicitar">
					Solicita un Perro Guía
				</router-link>
			</section>
		</section>
	</section>
</template>

<script>
export default {
	name: "Banner-Solicitud"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section.section_container_row {
	background-color: var(--main-gray);
}
section.section_container_row--content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(2, auto);
	grid-template-areas:
		"content-title content-title"
		"content-left content-right";
	grid-gap: 16px;

	> .content-title {
		grid-area: content-title;
		justify-self: center;
	}

	> .content-left {
		grid-area: content-left;
		justify-self: center;
		align-self: center;
	}

	> .content-right {
		grid-area: content-right;
		justify-self: center;
		align-self: center;
		text-align: center;
		p {
			margin: 1rem 0;
		}
	}

	@media only screen and (max-width: 640px) {
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-template-areas:
			"content-title"
			"content-left"
			"content-right";
		grid-gap: 2.5rem;
	}
}
</style>
