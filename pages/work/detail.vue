<template>
	<main-layout class="work-detail">
		<case-heading
			caseName="BBB Cycling"
			caseQuote="This is what happens when commerce and emotion collide and come together."
			caseImage="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
			caseColor="#524d40"
		/>
		<payoff-credits/>
		<icons-caption
		caseColor="#81919a"
		/>
		<!-- :images="icons.images" timeout="1000" limit="8" -->
		<one-column/>
		<two-column/>
		<video-player
			caseName="BBB Cycling"
			caseImage="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
			caseVideo="http://video.dailymail.co.uk/video/mol/2018/02/04/2470370974756523998/1024x576_MP4_2470370974756523998.mp4"
		/>
		<next-case
		leftText="Next case"
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
import IconsCaption from '~/layouts/IconsCaption.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import CaseHeading from '~/components/CaseHeading.vue'
import NextCase from '~/components/NextCase.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
export default {
	data() {
		return{
			// icons: {
			// 	images: [
			// 		{ src: 'https://picsum.photos/200/300/?image=0', title: 'test1' },
			// 		{ src: 'https://picsum.photos/300/300/?image=1', title: 'test2' },
			// 		{ src: 'https://picsum.photos/330/300/?image=2', title: 'test3' },
			// 		{ src: 'https://picsum.photos/220/300/?image=3', title: 'test4' },
			// 		{ src: 'https://picsum.photos/230/300/?image=4', title: 'test5' },
			// 		{ src: 'https://picsum.photos/250/300/?image=5', title: 'test6' },
			// 		{ src: 'https://picsum.photos/210/300/?image=6', title: 'test7' },
			// 		{ src: 'https://picsum.photos/200/310/?image=7', title: 'test8' },
			// 		{ src: 'https://picsum.photos/200/320/?image=8', title: 'test9' },
			// 		{ src: 'https://picsum.photos/200/330/?image=9', title: 'test10' },
			// 		{ src: 'https://picsum.photos/200/340/?image=10', title: 'test11' },
			// 		{ src: 'https://picsum.photos/200/350/?image=11', title: 'test12' },
			// 		{ src: 'https://picsum.photos/330/300/?image=12', title: 'test13' },
			// 		{ src: 'https://picsum.photos/220/300/?image=13', title: 'test14' },
			// 		{ src: 'https://picsum.photos/230/300/?image=14', title: 'test15' },
			// 		{ src: 'https://picsum.photos/250/300/?image=15', title: 'test16' },
			// 		{ src: 'https://picsum.photos/210/300/?image=16', title: 'test17' },
			// 		{ src: 'https://picsum.photos/200/310/?image=17', title: 'test18' },
			// 		{ src: 'https://picsum.photos/200/320/?image=18', title: 'test19' },
			// 		{ src: 'https://picsum.photos/200/330/?image=19', title: 'test20' },
			// 	]
			// }
		}
	},
		components: {
			OneColumn,
			TwoColumn,
			IconsCaption,
			PayoffCredits,
			MainLayout,
			CaseHeading,
			VideoPlayer,
			NextCase,
	}
}
</script>
