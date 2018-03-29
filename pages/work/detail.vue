<template>
	<main-layout class="work-detail">
		<case-heading
			caseName="BBB Cycling"
			caseQuote="This is what happens when commerce and emotion collide and come together."
			caseImage="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
			caseColor="#524d40"
		/>
		<one-column/>
		<two-column/>
		<payoff-credits/>
		<next-case
		caseName="Aangenaam Bergen op Zoom"
		image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
		caseColor="#81919a"
		/>
	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import CaseHeading from '@/components/CaseHeading.vue'
import NextCase from '~/components/NextCase.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		CaseHeading,
		NextCase

	}
}
</script>
