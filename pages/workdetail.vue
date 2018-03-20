<template>
	<main-layout>
		<div class="row center">
			<div class="column column-12">
				<p>BBB Cycling — This is what happens when commerce and emotion collide and come together.</p>
			</div>
		</div>
		<div class="row center">
			<div class="column column-24">
				<p>ik ben een work detail page</p>
			</div>
		</div>
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
