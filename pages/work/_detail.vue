<template>
	<main-layout class="work-detail">
		<case-heading 
			caseName="BBB Cycling"
			caseQuote="This is what happens when commerce and emotion collide and come together."
			image="/_nuxt/img/bbb.22d3225.png"
		/>
	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import CaseHeading from '@/components/CaseHeading.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		CaseHeading
	}
}
</script>
