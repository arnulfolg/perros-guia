<template>
	<header class="escuela_header">
		<section class="header_logo">
			<router-link to="/">Home</router-link>
			<a href="#"> Solicitar perro guía</a>
		</section>
		<section class="header_navigation--background"></section>
		<nav class="header_navigation">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li>
					<router-link to="/acerca">Acerca</router-link>
					<ul>
						<li><router-link to="/acerca/historia">Historia</router-link></li>
						<li><router-link to="/acerca/mision">Mision</router-link></li>
					</ul>
				</li>
				<li><router-link to="/conocenos">Conócenos</router-link></li>
				<li><router-link to="/servicios">Servicios</router-link></li>
				<li><router-link to="/contacto">Contacto</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss">
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

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-content: stretch;
	}
}
section.header_navigation--background {
	background-color: var(--color-chocolate);
	grid-column: 1 / -1;
	grid-row: 2 / -1;
}
</style>
