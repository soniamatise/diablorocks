<template>
	<main-layout class="work-detail">
		<case-heading
			:caseName="client"
			:caseQuote="description"
			:caseImage="image"
			:caseColor="color"
		/>

		<div v-for="value in layout" :key="value.id">
			<payoff-credits v-if="value.acf_fc_layout==='info_table'"
				:intro="value.info_table_intro"
				:credits="value.info_table_row"
				:footer="value.info_table_footer"
			/>

			<title-text v-if="value.acf_fc_layout==='simple_text'" >
				<h3 slot="header">{{value.simple_text_title}}</h3>
				<div v-html="value.simple_text_content"></div>
			</title-text>

			<one-column v-if="value.acf_fc_layout==='big_image_video'" :img="value" />

			<two-column v-if="value.acf_fc_layout==='2_column_images'" :imgOne="value.left_image"  :imgTwo="value.right_image" />

			<video-player
			 	v-if="value.acf_fc_layout==='video'"
				:caseName="value.overlay_text"
				caseImage="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
				:caseVideo="value.video.url"
			/>
		</div>

		<next-case
		caseName="Aangenaam Bergen op Zoom"
		image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
		:caseColor="color"
		/>

	</main-layout>
</template>

<script>
import axios from 'axios'

import MainLayout from '~/layouts/MainLayout.vue'
import TitleText from '~/layouts/TitleText.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import CaseHeading from '@/components/CaseHeading.vue'
import NextCase from '~/components/NextCase.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
	components: {
		TitleText,
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		CaseHeading,
		VideoPlayer,
		NextCase,
	},
	asyncData ({ params }) {
    return axios.get(`${process.env.baseUrl}/case?slug=${params.detail}&_embed`)
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
