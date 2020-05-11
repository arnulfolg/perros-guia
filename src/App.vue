<template>
	<section class="container">
		<AppHeader />
		<main class="escuela_main">
			<router-view />
		</main>
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

html {
	box-sizing: border-box;
}
*,
*:before,
*:after {
	box-sizing: inherit;
}

.container {
	display: grid;
	grid-template-rows: 210px 1fr 350px;
	grid-template-columns: 1fr 960px 1fr;
	grid-template-areas:
		"escuela_header escuela_header escuela_header"
		"escuela_main escuela_main escuela_main"
		"escuela_footer escuela_footer escuela_footer";
	align-items: stretch;
	justify-items: stretch;
}

header.escuela_header {
	grid-area: escuela_header;
}

main.escuela_main {
	grid-area: escuela_main;

	.section_container {
		display: grid;
		grid-gap: 16px;
	}

	.section_container_row--content {
		padding: 40px 10px;
	}
}

footer.escuela_footer {
	grid-area: escuela_footer;
}

h1 {
	font-family: Helvetica;
	font-style: normal;
	font-weight: 600;
	font-size: 61.0352px;
	line-height: 84px;
}
h2 {
	font-family: Helvetica;
	font-style: normal;
	font-weight: 600;
	font-size: 48.8281px;
	line-height: 56px;
}
h3 {
	font-family: Helvetica;
	font-style: normal;
	font-weight: 600;
	font-size: 39.0625px;
	line-height: 56px;
}
h4 {
	font-family: Helvetica;
	font-style: normal;
	font-weight: 600;
	font-size: 31.25px;
	line-height: 56px;
}
h5 {
	font-family: Helvetica;
	font-style: normal;
	font-weight: 600;
	font-size: 25px;
	line-height: 28px;
}
h6 {
	font-family: Helvetica;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 28px;
}
p {
	font-family: Helvetica;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 28px;
}
a {
	font-family: Helvetica;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 28px;
}
</style>
