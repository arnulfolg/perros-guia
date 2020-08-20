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
	},
	pages: {
		entry: "main.js",
		title: "Título bonito",
		template: "../public/index.html"
	}
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap");

:root {
	--color-chocolate: #2b1d18;
	--color-dark-red: #a11b20;
	--color-dark-blue: #2134e2;
	--color-white: #f3f3f3;
	--color-black: #141414;
	--main-heading-color: #12d555;
	--main-gray: #cac4b0;
	--container-size: 1024px;

	--title-color: var(--color-dark-blue);
	--headers-color: var(--color-chocolate);
	--text-color: var(--color-black);
	--link-color: var(--color-dark-blue);
}

html {
	box-sizing: border-box;
	font-size: 12px;
}
*,
*:before,
*:after {
	box-sizing: inherit;
}

.container {
	display: grid;
	grid-template-rows: 210px 1fr minmax(350px, auto);
	grid-template-columns: minmax(10px, 1fr) minmax(auto, var(--container-size)) minmax(
			10px,
			1fr
		);
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

	.section_container_row {
		display: grid;
		grid-template-columns: minmax(10px, 1fr) minmax(auto, var(--container-size)) minmax(
				10px,
				1fr
			);
		align-items: stretch;
		justify-items: stretch;

		&--content {
			grid-column: 2 / 3;
		}
	}
}

footer.escuela_footer {
	grid-area: escuela_footer;
}

h1 {
	color: var(--title-color);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 5rem;
	line-height: 84px;
}
h2 {
	color: var(--headers-color);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 3.5rem;
	line-height: 56px;
	margin-bottom: 10px;
}
h3 {
	color: var(--headers-color);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 2.8rem;
	line-height: 56px;
	margin-bottom: 10px;
}
h4 {
	color: var(--headers-color);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 2.5rem;
	line-height: 56px;
	margin-bottom: 10px;
}
h5 {
	color: var(--headers-color);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 2rem;
	line-height: 28px;
	margin-bottom: 10px;
}
h6 {
	color: var(--headers-color);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 28px;
	margin-bottom: 10px;
}
p,
ul {
	color: var(--text-color);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 28px;
	margin-bottom: 10px;

	&:last-child {
		margin-bottom: 0;
	}

	.text_bold {
		font-weight: bold;
	}
}
a {
	color: var(--link-color);
	font-family: "Fira Sans", sans-serif;
	font-style: normal;
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 28px;

	&:hover {
		color: var(--link-color);
	}
}

@media only screen and (max-width: 640px) {
	h1 {
		font-size: 3.5rem;
		line-height: 64px;
	}
	h2 {
		font-size: 3rem;
		line-height: 46px;
		margin-bottom: 10px;
	}
	h3 {
		font-size: 2.5rem;
		line-height: 46px;
		margin-bottom: 10px;
	}
	h4 {
		font-size: 2.2rem;
		line-height: 46px;
		margin-bottom: 10px;
	}
	h5 {
		font-size: 2rem;
		line-height: 28px;
		margin-bottom: 10px;
	}
	h6 {
		font-size: 1.6rem;
		line-height: 28px;
		margin-bottom: 10px;
	}
	p,
	ul {
		font-weight: 300;
		font-size: 1.4rem;
		line-height: 28px;
	}
	a {
		font-weight: 300;
		font-size: 20px;
		line-height: 28px;
	}
}
img.image {
	width: 100%;
}
.section_container_row ul li {
	list-style-position: inside;
	list-style-type: disc;
}
.section_container_row--color-chocolate {
	background-color: var(--color-chocolate);
}
.section_container_row--dark-red {
	background-color: var(--color-dark-red);
}
.section_container_row--color-chocolate,
.section_container_row--dark-red {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a,
	ul {
		color: var(--color-white);
	}
}

a.global-link {
	background-color: var(--color-dark-blue);
	color: var(--color-white);
	height: 44px;
	padding: 0 3rem;
	display: inline-flex;
	align-items: center;
	text-decoration: none;

	&:hover {
		background-color: var(--color-dark-blue);
	}

	&--small {
		height: 40px;
	}
}
</style>
