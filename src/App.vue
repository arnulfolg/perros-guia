<template>
	<section class="container">
		<AppHeader />
		<section class="escuela_main">
			<router-view />
		</section>
		<AppFooter />
	</section>
</template>

<script>
// @ is an alias to /src
import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

export default {
	components: {
		AppFooter,
		AppHeader
	}
}
</script>

<style lang="scss">
:root {
	--main-app-color: #191110;
	--color-chocolate: #191110;
	--color-dark-red: #53131e;
	--color-white: #fffffc;
	--main-heading-color: #42b983;
}

.container {
	display: grid;
	grid-template-rows: 210px 1fr 350px;
	grid-template-columns: 1fr 960px 1fr;
	grid-template-areas:
		"escuela_header escuela_header escuela_header"
		". escuela_main ."
		"escuela_footer escuela_footer escuela_footer";
	grid-gap: 16px;
	align-items: stretch;
	justify-items: stretch;
}

header.escuela_header {
	grid-area: escuela_header;
}

section.escuela_main {
	grid-area: escuela_main;
}

footer.escuela_footer {
	grid-area: escuela_footer;
}
</style>
