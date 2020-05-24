<template>
	<section class="section_container">
		<section class="section_container_row">
			<section class="section_container_row--content">
				<h1>Acerca</h1>
			</section>
		</section>
		<Columns2
			title="La raza es importante"
			content="<p>Los primeros perros guía que se entrenaron fueron de raza pastor alemán. Las diferentes razas de perros tienen características especiales que hacen que cada una de ellas puedan ser útiles al hombre.</p><p>El Labrador Retriever y el Golden Retriever, demostraron poseer cualidades excepcionales. De carácter dócil, facilmente adiestrables, sin timidez ni cobardía, demuestran seguridad ante circunstancias extrañas y poseen una gran agilidad mental que les permiten tomar decisiones. Valoran muy especialmente todas las demostraciones de afecto de los humanos.</p>"
			image_src="/logo.png"
			image_alt="Imagen feliz"
			image_pos="right"
		/>
		<Columns1
			title="Características para ser un Perro Guía"
			content="<p class='cambio_blanco'>A pesar de ser Labrador Reviever o Golden Retriever, los perros necesitan tener ciertas características para ser candidatos al trabajo de perro guía. Estas características son:</p><ul><li>Tamaño aproximado de 55 cm</li><li>Alto grado de vivacidad cerebral</li><li>Ser sociable hacia los hombres y animales</li></ul>"
		/>
		<Columns2
			title="Antes del entrenamiento"
			content="<p>Antes de que un perro entre al entrenamiento, una familia cuida de él en sus primeros meses de vida. Aquí es donde tú puedes apoyarnos en cuidar de un cachorro.</p><p>Aunque existen otras escuelas de perros guía tienen su propio programa de crianza,  nosotros nos valemos de la ayuda de familias adoptivas.</p><p>Una vez que ha sido cuidado por una familia adoptiva, al año de edad aproximadamente, el perro debe ingresar a las instalaciones de la Escuela, donde empieza su entrenamiento especializado como perro guía.</p>"
			image_src="/logo.png"
			image_alt="Imagen feliz"
			image_pos="left"
		/>
		<Columns1
			title="¿Qué aprenden los perros en el entrenamiento?"
			content="<p>Una vez que el perro ingresa a la escuela,  aprenderá a obedecer comandos, a caminar del lado izquierdo desviando todos los obstáculos, y a portar su arnés, indispensable para su trabajo y que lo distinguirá de los demás perros. Además, el arnés es el medio de comunicación entre el perro y su dueño; la persona ciega siente a través del arnés los movimientos que hace el perro guía.</p><p>El perro guía aprende además la desobediencia inteligente: decidir no obedecer una orden de su amo si ésta puede ponerlos en peligro.</p><p>Lo siguiente que aprenderá el perro será a subir a transportes públicos, encontrar puertas, escaleras, banquetas, sillas, y tener un comportamiento  ejemplar en lugares públicos.</p>"
		/>
		<Columns2
			title="Creación del Binomio"
			content="<p>Después del entrenamiento, el perro está listo para empezar a trabajar como perro guía, pero antes falta crear el Binomio: la relación humano-perro. </p><p>Para esto, una persona ciega llegará a la escuela a pedir un perro guía.</p><p>Una vez que su solicitud se aceptada, se le llamará al Curso de Capacitación en el Manejo del Perro Guía, en las instalaciones de la Escuela, donde permanecerá por un mes. </p><p>Durante este tiempo, la persona ciega y el perro guía vivirán juntos y se convertirán en un binomio: un equipo maravilloso en el que uno verá por el otro.</p>"
			image_src="/logo.png"
			image_alt="Imagen feliz"
			image_pos="left"
		/>
	</section>
</template>

<script>
// @ is an alias to /src
import Columns1 from "@/components/Columns1.vue"
import Columns2 from "@/components/Columns2.vue"

export default {
	name: "Inicio",
	components: {
		Columns1,
		Columns2
	}
}
</script>

<style lang="scss"></style>
