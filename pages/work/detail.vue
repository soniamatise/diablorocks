<template>
	<main-layout class="work-detail">
		<case-heading
			:caseName="client"
			:caseQuote="description"
			:caseImage="image"
			:caseColor="color"
		/>
		<one-column/>
		<two-column/>
		<payoff-credits/>
		<next-case
		caseName="Aangenaam Bergen op Zoom"
		image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
		caseColor="#81919a"
		/>
		<video-player
			caseName="BBB Cycling"
			caseImage="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
			caseVideo="http://video.dailymail.co.uk/video/mol/2018/02/04/2470370974756523998/1024x576_MP4_2470370974756523998.mp4"
		/>
	</main-layout>
</template>

<script>
import axios from 'axios'

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
	},
	asyncData ({ params }) {
    return axios.get(`${process.env.baseUrl}/case?slug=bbb-cycling-magento2&_embed`)
    .then((res) => {
			return {
				layout: res.data[0].layout,
				client: res.data[0].client_name,
				description: res.data[0].case_description,
				color: res.data[0].case_background_color,
				image: res.data[0]._embedded['wp:featuredmedia'][0].source_url
			}
    })
  },

}



</script>
