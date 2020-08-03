<template>
	<section class="section_container_row">
		<section class="section_container_row--content">
			<section class="section_container_row--content--title content-title">
				<h2>{{ title }}</h2>
			</section>
			<section class="section_container_row--content--columns content-left">
				<img
					v-if="column_image"
					:src="require('@/assets/icons/medal.svg')"
					alt=""
				/>
				<p>
					{{ column1_content }}
				</p>
				<router-link v-if="column_links" :to="column1_link">
					Conoce más
				</router-link>
			</section>
			<section class="section_container_row--content--columns content-center">
				<img v-if="column_image" :src="column2_image_src" alt="" />
				<p>
					{{ column2_content }}
				</p>
				<router-link v-if="column_links" :to="column2_link">
					Conoce más
				</router-link>
			</section>
			<section class="section_container_row--content--columns content-right">
				<img v-if="column_image" :src="column3_image_src" alt="" />
				<p>
					{{ column3_content }}
				</p>
				<router-link v-if="column_links" :to="column3_link">
					Conoce más
				</router-link>
			</section>
		</section>
	</section>
</template>

<script>
export default {
	name: "C3",
	props: {
		title: { type: String, required: true },
		column_links: { type: Boolean, required: true },
		column_image: { type: Boolean, required: true },
		column1_title: { type: String, required: false },
		column1_content: { type: String, required: true },
		column1_image_src: { type: String, required: false },
		column1_link: { type: String, required: false },
		column2_title: { type: String, required: false },
		column2_content: { type: String, required: true },
		column2_image_src: { type: String, required: false },
		column2_link: { type: String, required: false },
		column3_title: { type: String, required: false },
		column3_content: { type: String, required: true },
		column3_image_src: { type: String, required: false },
		column3_link: { type: String, required: false }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section.section_container_row--content {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: repeat(2, auto);
	grid-template-areas:
		"content-title content-title content-title"
		"content-left content-center content-right";
	grid-gap: 16px;

	> .content-title {
		grid-area: content-title;
		justify-self: center;
	}

	> .content-left {
		grid-area: content-left;
		p {
			margin: 1rem 0;
			text-align: center;
		}
	}

	> .content-center {
		grid-area: content-center;
		p {
			margin: 1rem 0;
			text-align: center;
		}
	}

	> .content-right {
		grid-area: content-right;
		p {
			margin: 1rem 0;
			text-align: center;
		}
	}

	@media only screen and (max-width: 640px) {
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
		grid-template-areas:
			"content-title"
			"content-left"
			"content-center"
			"content-right";
		grid-gap: 2.5rem;
	}
}

.section_container_row--content--columns {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-content: stretch;
	align-items: center;
}
</style>
