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
	grid-template-columns: minmax(10px, 1fr) minmax(auto, 960px) minmax(10px, 1fr);
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
	flex-wrap: nowrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;
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
div.header_navigation--background {
	background-color: var(--color-chocolate);
	grid-column: 1 / -1;
	grid-row: 2 / -1;
}
</style>
