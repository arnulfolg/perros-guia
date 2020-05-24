<template>
	<header class="escuela_header">
		<section class="header_logo">
			<router-link to="/">
				<img src="../assets/logo/logo-blue.png" alt="" />
			</router-link>
			<router-link to="/servicios/solicitar" class="global-link">
				Solicitar Perro Guía
			</router-link>
		</section>
		<div class="header_navigation--background"></div>
		<nav class="header_navigation">
			<router-link to="#" class="menu_link">Menú</router-link>
			<ul>
				<li><router-link class="nav_link" exact to="/">Home</router-link></li>
				<li>
					<router-link class="nav_link" to="/acerca">Acerca</router-link>
					<ul>
						<li>
							<router-link class="nav_link" to="/acerca/historia"
								>Historia</router-link
							>
						</li>
						<li>
							<router-link class="nav_link" to="/acerca/mision"
								>Misión</router-link
							>
						</li>
					</ul>
				</li>
				<li>
					<router-link class="nav_link" to="/servicios">Servicios</router-link>
					<ul>
						<li>
							<router-link class="nav_link" to="/servicios/entranamiento">
								Entranamiento
							</router-link>
						</li>
						<li>
							<router-link class="nav_link" to="/servicios/solicitar">
								Solicitar
							</router-link>
						</li>
						<li>
							<router-link class="nav_link" to="/servicios/adopcion"
								>Adopción</router-link
							>
							<ul>
								<li>
									<router-link
										class="nav_link"
										to="/servicios/adopcion/definitiva"
									>
										Definitiva
									</router-link>
								</li>
								<li>
									<router-link
										class="nav_link"
										to="/servicios/adopcion/temporal"
									>
										Temporal
									</router-link>
								</li>
								<li>
									<router-link
										class="nav_link"
										to="/servicios/adopcion/donacion"
									>
										Donación
									</router-link>
								</li>
							</ul>
						</li>
						<li>
							<router-link class="nav_link" to="/servicios/rehabilitacion">
								Rehabilitación
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link class="nav_link" to="/conocenos">Conócenos</router-link>
					<ul>
						<li>
							<router-link class="nav_link" to="/conocenos/voluntariado">
								Voluntariado
							</router-link>
						</li>
						<li>
							<router-link class="nav_link" to="/conocenos/donativos"
								>Donativos</router-link
							>
						</li>
					</ul>
				</li>
				<li>
					<router-link class="nav_link" to="/contacto">Contacto</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss">
header.escuela_header {
	position: static;
	z-index: 100;
	display: grid;
	grid-template-rows: 160px 50px;
	grid-template-columns: minmax(10px, 1fr) minmax(auto, var(--container-size)) minmax(
			10px,
			1fr
		);
	grid-template-areas:
		". header_logo ."
		". header_navigation .";
	align-items: stretch;
	justify-items: stretch;
}

section.header_logo {
	grid-area: header_logo;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;

	@media only screen and (max-width: 640px) {
		justify-content: center;
	}
}
nav.header_navigation {
	background-color: var(--color-chocolate);
	grid-area: header_navigation;

	.menu_link {
		display: none;
		position: relative;
		height: 50px;
		align-content: center;
		align-items: center;
		color: var(--color-white);
		text-decoration: none;
		width: 100%;
		justify-content: center;
	}

	ul {
		width: min-content;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-content: stretch;
		align-items: center;
		background-color: var(--color-chocolate);

		@media only screen and (max-width: 750px) {
			flex-direction: column;
		}

		li {
			width: 100%;
			justify-content: center;
			position: relative;
			height: 50px;
			display: inline-flex;
			align-content: center;
			align-items: center;

			a {
				height: 50px;
				padding: 0 3rem;
				color: var(--color-white);
				text-decoration: none;
				display: inline-flex;
				align-content: center;
				align-items: center;
			}

			&:hover,
			&:focus,
			&:focus-within {
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

				@media only screen and (max-width: 750px) {
					left: 100%;
					top: 0;
				}
			}
		}
	}

	@media only screen and (max-width: 750px) {
		width: 100px;

		.menu_link {
			display: inline-flex;
			justify-content: center;
		}

		ul {
			display: none;
			width: min-content;
		}

		&:hover,
		&:focus,
		&:focus-within {
			background-color: var(--color-dark-red);

			> ul {
				display: flex;
			}
		}
	}
}
div.header_navigation--background {
	background-color: var(--color-chocolate);
	grid-column: 1 / -1;
	grid-row: 2 / -1;
}

a.router-link-active.nav_link {
	background-color: var(--color-dark-red);
}
</style>
