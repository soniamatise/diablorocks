<template>
	<main-layout class="work-detail">
		<video-player 
			image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
		/>
		<payoff-credits></payoff-credits>
		<one-column></one-column>
		<two-column></two-column>
	</main-layout>
</template>
<script>
import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		VideoPlayer
	}
}
</script>
