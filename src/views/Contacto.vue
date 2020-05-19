<template>
	<section class="section_container">
		<section class="section_container_row">
			<section class="section_container_row--content">
				<h1>Contacto</h1>
			</section>
			<section class="section_container_row--content">
				<h2>Teléfonos</h2>
				<p>55 5673 1587</p>
				<p>55 5673 6464</p>
				<h2>Dirección</h2>
				<p>
					Avenida Canal Nacional número 1075, Colonia Villa Quietud, alcaldía
					Coyoacán, Ciudad de México, Código Postal 04960, Ciudad de México,
					México
				</p>
			</section>
			<section class="section_container_row--content">
				<form action="#">
					<section class="form_item">
						<label for="nombre">Nombre:</label>
						<input id="nombre" type="text" required />
					</section>
					<section class="form_item">
						<label for="correo">Correo:</label>
						<input id="correo" type="email" required />
					</section>
					<section class="form_item">
						<label for="asunto">Asunto:</label>
						<input id="asunto" type="text" required />
					</section>
					<section class="form_item">
						<label for="mensaje">Mensaje:</label><br />
						<textarea
							id="mensaje"
							autocomplete="street-address"
							required
						></textarea>
					</section>
					<section class="form_button">
						<button class="global_button">Enviar</button>
					</section>
				</form>
			</section>
		</section>
	</section>
</template>

<style lang="scss">
form {
	width: 100%;
}
label,
input,
textarea,
button {
	color: var(--color-chocolate);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 28px;
}
button.global_button {
	background-color: var(--color-chocolate);
	color: var(--color-white);
	border: none;
	height: 44px;
	padding: 0 3rem;
	display: inline-flex;
	align-items: center;
}
.form_item {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-content: stretch;
	align-items: stretch;
	margin-bottom: 2rem;

	input,
	textarea {
		width: 100%;
		padding: 1rem;
		resize: none;
		border: 1px solid var(--color-chocolate);
		border-radius: 8px;

		&:focus {
			border: 2.5px solid var(--color-chocolate);
			border-radius: 8px;
		}
	}

	input {
		height: 44px;
	}
	textarea {
		height: 200px;
	}

	label,
	input {
		order: 0;
		flex: 0 1 auto;
		align-self: auto;
	}
}
</style>
