<template>
	<main-layout class="work-detail" v-bind:class="{scroll: scrollable}">
		<case-heading
			:caseName="client"
			:caseQuote="description"
			:caseImage="image"
			:caseColor="color"
			v-on:doneAnimation="doneIntro"
		/>

		<section v-for="value in layout" :key="value.id" :class="value.acf_fc_layout">
			<payoff-credits v-if="value.acf_fc_layout==='info_table'"
				:intro="value.info_table_intro"
				:credits="value.info_table_row"
				:footer="value.info_table_footer"
			/>

			<title-text v-if="value.acf_fc_layout==='simple_text'" >
				<h3 v-if="value.simple_text_title" slot="header">{{value.simple_text_title}}</h3>
				<div class="simple_text_content" v-html="value.simple_text_content"></div>
			</title-text>

			<one-column v-if="value.acf_fc_layout==='boxed_image_video'" :img="value" />

			<two-column v-if="value.acf_fc_layout==='two_column_images'"
				:leftColKind="value.left_column_kind"
				:rightColKind="value.right_column_kind"
				:imgOne="value.left_image"
				:imgTwo="value.right_image"
				:videoOne="value.left_video"
				:videoTwo="value.right_video"
				/>

			<icons-caption v-if="value.acf_fc_layout==='icon_block'"
				:gridColor="value.icon_background"
				:gridIcons="value.icons"
			/>

			<video-player
			 	v-if="value.acf_fc_layout==='video'"
				:caseName="value.overlay_text"
				:caseImage="value.poster.url"
				:caseVideo="value.video.url"
			/>
		</section>

		<next-case
		:caseName="nextCase.post_title"
		image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
		:caseColor="color"
		:slug="nextCase.post_name"
		/>

	</main-layout>
</template>

<script>
import axios from 'axios'

import MainLayout from '~/layouts/MainLayout.vue'
import TitleText from '~/layouts/TitleText.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import IconsCaption from '~/layouts/IconsCaption.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import CaseHeading from '@/components/CaseHeading.vue'
import NextCase from '~/components/NextCase.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
	components: {
		TitleText,
		OneColumn,
		TwoColumn,
		IconsCaption,
		PayoffCredits,
		MainLayout,
		CaseHeading,
		VideoPlayer,
		NextCase,
	},
	data() {
		return { scrollable: false }
	},
	asyncData ({ params }) {
    return axios.get(`${process.env.baseUrl}/wp/v2/case?slug=${params.detail}&_embed`)
    .then((res) => {
			return {
				layout: res.data[0].layout,
				client: res.data[0].client_name,
				description: res.data[0].case_description,
				color: res.data[0].case_background_color,
				image: res.data[0]._embedded['wp:featuredmedia'][0].source_url,
				nextCase: res.data[0].next_case
			}
    })
  },
	methods: {
		doneIntro: function(){
			this.scrollable = true;
		}
	}

}



</script>
