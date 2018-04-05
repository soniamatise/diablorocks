<template>
<main-layout class="work-detail">
	<case-heading caseName="BBB Cycling" caseQuote="This is what happens when commerce and emotion collide and come together." caseImage="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg" caseColor="#524d40" />
	<one-column/>
	<two-column/>
	<payoff-credits/>
	<video-player rightText="Release video" caseImage="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg" caseVideo="http://video.dailymail.co.uk/video/mol/2018/02/04/2470370974756523998/1024x576_MP4_2470370974756523998.mp4"
	/>
	<next-case leftText="Next case" caseName="Aangenaam Bergen op Zoom" image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg" caseColor="#81919a" />
</main-layout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import CaseHeading from '@/components/CaseHeading.vue'
import NextCase from '~/components/NextCase.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		CaseHeading,
		VideoPlayer,
		NextCase,
	}
}
</script>
