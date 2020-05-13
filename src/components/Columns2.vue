<template>
	<section class="section_container_row">
		<section class="section_container_row--content">
			<section class="section_container_row--content--text text">
				<h2>{{ title }}</h2>
				<section v-html="content"></section>
			</section>
			<section
				class="section_container_row--content--image image"
				:class="image_pos"
			>
				<img :src="image_src" :alt="image_alt" loading="lazy" />
			</section>
		</section>
	</section>
</template>

<script>
export default {
	name: "Two-Column",
	props: {
		title: { type: String, required: true },
		content: { type: String, required: true },
		image_src: { type: String, required: true },
		image_alt: { type: String, required: true },
		image_pos: { type: String, required: false }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section_container_row--content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: "content-left content-right";
	grid-gap: 16px;

	> .left {
		grid-area: content-left;
		justify-self: center;
		align-self: center;
	}

	> .right {
		grid-area: content-right;
		justify-self: center;
		align-self: center;
	}

	@media only screen and (max-width: 640px) {
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-template-areas: "content-up" "content-down";

		> .text {
			grid-area: content-up;
		}
		> .image {
			grid-area: content-down;
		}
	}
}
</style>
