<template>
	<main-layout class="work-detail">
		<section class="intro">
			<div class="row center">
				<div class="column small-full medium-16 large-12">
					<p><span>BBB Cycling</span> This is what happens when commerce and emotion collide and come together.</p>
				</div>
			</div>
		</section>
		<section class="intro-image" style="background-image: url('/_nuxt/img/bbb.22d3225.png');">
			<div class="row center">
				<div class="column column-24">
<!-- 					<img src="../assets/images/work/bbb.png"> -->
				</div>
			</div>
		</section>
	</main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout
	}
}
</script>
