<template>
	<main-layout class="work-detail">
		<NextCase 
			caseName="BBB Cycling" 
			image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
			caseColor="#524d40"
		/>
	</main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue'
import NextCase from '@/components/NextCase'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		NextCase
	},
	methods: {
	}
}
</script>
