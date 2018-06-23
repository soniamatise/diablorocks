<template>
	<main-layout :class="{scroll: scrollable}" class="work-detail">
		<case-heading
			:case-name="client"
			:case-quote="description"
			:case-image="image"
			:case-color="color"
			@doneAnimation="doneIntro"
		/>

		<section v-for="value in layout" :key="value.id" :class="value.acf_fc_layout">
			<payoff-credits v-if="value.acf_fc_layout==='info_table'"
				:intro="value.info_table_intro"
				:credits="value.info_table_row"
				:footer="value.info_table_footer"
			/>

			<title-text v-if="value.acf_fc_layout==='simple_text'" >
				<h3 v-if="value.simple_text_title" slot="header">{{ value.simple_text_title }}</h3>
				<div class="simple_text_content" v-html="value.simple_text_content"/>
			</title-text>

			<one-column v-if="value.acf_fc_layout==='boxed_image_video'" :img="value" />

			<two-column v-if="value.acf_fc_layout==='two_column_images'"
				:left-col-kind="value.left_column_kind"
				:right-col-kind="value.right_column_kind"
				:img-one="value.left_image"
				:img-two="value.right_image"
				:video-one="value.left_video"
				:video-two="value.right_video"
			/>

			<full-photo v-if="value.acf_fc_layout==='full_photo'"
				:image-full="value.image"
				:image-text="value.photo_information"
			/>

			<icons-caption v-if="value.acf_fc_layout==='icon_block'"
				:grid-color="value.icon_background"
				:grid-icons="value.icons"
			/>

			<video-player
				v-if="value.acf_fc_layout==='video'"
				:case-name="value.overlay_text"
				:case-image="value.poster.url"
				:case-video="value.video.url"
			/>
		</section>

		<next-case
			:case-name="nextCase.post.post_title"
			:image="nextCase.case_image"
			:case-color="nextCase.case_background_color"
			:slug="nextCase.post.post_name"
		/>

	</main-layout>
</template>

<script>
import axios from 'axios';

import MainLayout from '~/layouts/body/MainLayout.vue';
import TitleText from '~/components/work/detail/TitleText.vue';
import OneColumn from '~/components/work/OneColumn.vue';
import TwoColumn from '~/components/work/TwoColumn.vue';
import IconsCaption from '~/components/work/detail/IconsCaption.vue';
import PayoffCredits from '~/components/work/PayoffCredits.vue';
import CaseHeading from '~/components/work/detail/CaseHeading.vue';
import NextCase from '~/components/work/NextCase.vue';
import VideoPlayer from '~/components/work/detail/VideoPlayer.vue';
import FullPhoto from '~/components/work/detail/FullPhoto.vue';

export default {
	head() {
		return {
			title: this.client + ' | Diablo Rocks',
			bodyAttrs: {
				class: 'white_menu'
			}
		};
	},
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
		FullPhoto
	},
	data() {
		return { scrollable: false };
	},
	transition: {
		css: false
	},
	asyncData({ params }) {
		return axios
			.get(`${process.env.baseUrl}/wp/v2/case?slug=${params.detail}&_embed`)
			.then(res => {
				return {
					layout: res.data[0].layout,
					client: res.data[0].client_name,
					description: res.data[0].case_description,
					color: res.data[0].case_background_color,
					image: res.data[0]._embedded['wp:featuredmedia'][0].source_url,
					nextCase: res.data[0].next_case
				};
			});
	},
	methods: {
		doneIntro: function() {
			this.scrollable = true;
		}
	}
};
</script>
