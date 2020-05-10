<template>
	<header class="escuela_header">
		<section class="header_logo">
			<router-link to="/">Home</router-link>
			<a href="#"> Solicitar perro guía</a>
		</section>
		<section class="header_navigation--background"></section>
		<nav class="header_navigation">
			<router-link to="/">Home</router-link> |
			<router-link to="/acerca">Acerca</router-link> |
			<router-link to="/conocenos">Conócenos</router-link> |
			<router-link to="/servicios">Servicios</router-link> |
			<router-link to="/contacto">Contacto</router-link>
		</nav>
	</header>
</template>

<style>
header.escuela_header {
	display: grid;
	grid-template-rows: 160px 50px;
	grid-template-columns: subgrid;
	/* grid-template-columns: 1fr 960px 1fr; */
	grid-template-areas:
		". header_logo ."
		". header_navigation .";
	align-items: stretch;
	justify-items: stretch;
}

section.header_logo {
	grid-area: header_logo;
}
nav.header_navigation {
	background-color: var(--color-chocolate);
	grid-area: header_navigation;
}
section.header_navigation--background {
	background-color: var(--color-chocolate);
	grid-column: 1 / -1;
	grid-row: 2 / -1;
}
</style>
