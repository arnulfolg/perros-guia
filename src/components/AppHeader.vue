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
				<li>
					<router-link to="/servicios">Servicios</router-link>
					<ul>
						<li>
							<router-link to="/servicios/entranamiento">
								Entranamiento
							</router-link>
						</li>
						<li>
							<router-link to="/servicios/solicitar">
								Solicitar
							</router-link>
						</li>
						<li>
							<router-link to="/servicios/adopcion">Adopcion</router-link>
							<ul>
								<li>
									<router-link to="/servicios/adopcion/definitiva">
										Definitiva
									</router-link>
								</li>
								<li>
									<router-link to="/servicios/adopcion/temporal">
										Temporal
									</router-link>
								</li>
								<li>
									<router-link to="/servicios/adopcion/donacion">
										Donacion
									</router-link>
								</li>
							</ul>
						</li>
						<li>
							<router-link to="/servicios/rehabilitacion">
								Rehabilitación
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link to="/conocenos">Conócenos</router-link>
					<ul>
						<li>
							<router-link to="/conocenos/voluntariado">
								Voluntariado
							</router-link>
						</li>
						<li>
							<router-link to="/conocenos/donativos">Donativos</router-link>
						</li>
					</ul>
				</li>
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
		align-items: center;
		background-color: var(--color-chocolate);

		li {
			position: relative;
			height: 50px;
			padding: 15px;

			a {
				color: var(--color-white);
				text-decoration: none;
			}

			&:hover {
				background-color: var(--color-dark-red);

				> ul {
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					justify-content: flex-start;
					align-content: stretch;
					align-items: center;
				}
			}

			ul {
				/* Hidden by default */
				display: none;

				/* Absolute position */
				left: 0;
				position: absolute;
				top: 100%;

				ul {
					left: 100%;
					position: absolute;
					top: 0;
				}
			}
		}
	}
}
section.header_navigation--background {
	background-color: var(--color-chocolate);
	grid-column: 1 / -1;
	grid-row: 2 / -1;
}

/* The root */
.p-nested-dropdowns {
	/* Border */
	border: 1px solid rgba(0, 0, 0, 0.3);
	display: flex;

	/* Reset list styles */
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.p-nested-dropdowns li {
	/* Spacing */
	padding: 8px;

	/* Used to position the sub dropdown */
	position: relative;
}

/* The sub dropdown */
.p-nested-dropdowns ul {
	/* Border */
	border: 1px solid rgba(0, 0, 0, 0.3);

	/* Hidden by default */
	display: none;

	/* Absolute position */
	left: 0;
	position: absolute;
	top: 100%;

	/* Reset styles */
	list-style-type: none;
	margin: 0;
	padding: 0;

	/* Width */
	width: 200px;
}

/* The second level sub dropdown */
.p-nested-dropdowns ul ul {
	left: 100%;
	position: absolute;
	top: 0;
}

/* Change background color of list item when being hovered */
.p-nested-dropdowns li:hover {
	background-color: rgba(0, 0, 0, 0.1);
}

/* Show the direct sub dropdown when hovering the list item */
.p-nested-dropdowns li:hover > ul {
	display: block;
}
</style>
