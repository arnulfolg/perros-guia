<template>
	<section class="section_container_row section_container_row--color-chocolate">
		<section class="section_container_row--content">
			<h2>{{ title }}</h2>
			<section v-html="content"></section>
		</section>
	</section>
</template>

<script>
export default {
	name: "One-Column",
	props: {
		title: { type: String, required: true },
		content: { type: String, required: true }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section.section_container_row {
	h2,
	p {
		color: var(--color-white);
	}
}
</style>
