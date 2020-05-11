<template>
	<section class="section_container_row">
		<section class="section_container_row--content">
			<h2>{{ title }}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis
				tempore nisi debitis id vel, explicabo error beatae est porro deleniti
				excepturi ipsum ex praesentium unde inventore repellat? Debitis, qui!
			</p>
		</section>
	</section>
</template>

<script>
export default {
	name: "C1",
	props: {
		title: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section.section_container_row {
	background-color: gray;
}
</style>
