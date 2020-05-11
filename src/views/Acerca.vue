<template>
	<section class="section_container">
		<section class="section_container_row">
			<section class="section_container_row--content">
				<h1>Acerca</h1>
			</section>
		</section>
		<Columns1 title="Columna 1" />
		<Columns2 title="Columna 2" />
		<Columns3 title="Columna 3" />
	</section>
</template>

<script>
// @ is an alias to /src
import Columns1 from "@/components/Columns1.vue"
import Columns2 from "@/components/Columns2.vue"
import Columns3 from "@/components/Columns3.vue"

export default {
	name: "Inicio",
	components: {
		Columns1,
		Columns2,
		Columns3
	}
}
</script>

<style lang="scss"></style>
