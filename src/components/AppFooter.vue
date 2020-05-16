<template>
	<footer class="escuela_footer section_container_row--color-chocolate">
		<section class="footer_content">
			<section class="footer_content--titles">
				<h5>Escuela para Entrenamiento de Perros Guía para Ciegos, I.A.P.</h5>
			</section>
			<section class="footer_content--items">
				<p>Acerca de Nosotros</p>
				<ul>
					<li>
						<router-link to="/acerca/historia">
							Misión, Visión y Valores
						</router-link>
					</li>
					<li>
						<router-link to="/acerca/mision">
							Nuestra historia
						</router-link>
					</li>
				</ul>
			</section>
			<section class="footer_content--items">
				<p>Conócenos</p>
				<ul>
					<li>
						<router-link to="/servicios/adopcion/definitiva">
							Reclutamiento
						</router-link>
					</li>
					<li>
						<router-link to="/servicios/adopcion/temporal">
							Perros en Servicio
						</router-link>
					</li>
					<li>
						<router-link to="/servicios/adopcion/donacion">
							Retiro
						</router-link>
					</li>
				</ul>
			</section>
			<section class="footer_content--items">
				<p>Entrenamiento</p>
				<ul>
					<li>
						<router-link to="/conocenos/voluntariado">
							Visitas
						</router-link>
					</li>
					<li>
						<router-link to="/conocenos/donativos">
							Donaciones
						</router-link>
					</li>
					<li>
						<router-link to="/contacto">
							¿Cómo puedo ayudar?
						</router-link>
					</li>
				</ul>
			</section>
		</section>
	</footer>
</template>

<style lang="scss">
footer.escuela_footer {
	padding: 2rem;
	background-color: var(--color-chocolate);
	display: grid;
	grid-template-columns: minmax(10px, 1fr) minmax(auto, 960px) minmax(10px, 1fr);
	grid-template-areas: ". footer_content .";
	align-items: stretch;
	justify-items: stretch;

	.footer_content {
		grid-area: footer_content;
		display: grid;
		grid-template-rows: 1fr 2fr;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 16px;

		.footer_content--titles {
			grid-column: 1 / -1;
			place-self: center baseline;
		}

		.footer_content--items {
			p {
				font-weight: bold;
			}
		}

		@media only screen and (max-width: 640px) {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			grid-gap: 16px;
		}
	}
}
</style>
