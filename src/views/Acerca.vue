<template>
	<div class="about">
		<h1>Acerca</h1>
		<Columns1 title="Columna 1" />
		<Columns2 title="Columna 2" />
		<Columns3 title="Columna 3" />
	</div>
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
