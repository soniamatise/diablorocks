<template>
	<main-layout class="work">
		<div class="row center textCenter intro">
			<div class="column column-8">
				<!-- <type-writer delay="250">Work</type-writer> -->
				<h1>Work</h1>
				<p class="content">Our latest and greatest for brands we believe in.</p>
			</div>
		</div>
	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
// import TypeWriter from '~/components/TypeWriter.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		// TypeWriter
	}
}
</script>
