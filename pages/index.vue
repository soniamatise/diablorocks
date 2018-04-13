<template>
	<main>
		<input id="menu-trigger" type="checkbox"/>
		<logo/>
		<top-nav/>
		<home-slider >

			<!-- <home-slider-item
				caseName="Kalkhoff Bikes"
				slug="kalkhoff"
				caseDescription="When your bikes are eye-catchers, your website should be too."
				caseColor="#787069"
				:caseImage="images.kalkhoff"
				case_image_size="large_image"
				case_content_size="large_block"
			/>
			<home-slider-item
				caseName="Sony Music Netherlands"
				slug="nielson"
				caseDescription="A new digital home for Nielson, an artist that reinvented himself."
				caseColor="#400c0e"
				:caseImage="images.nielson"
				case_image_size="small_image"
				case_content_size="small_block"
			/>
			<home-slider-item
				caseName="BBB Cycling"
				slug="bbbcycling"
				caseDescription="This is what happens when commerce and emotion collide and come together."
				caseColor="#524d40"
				:caseImage="images.bbb"
				case_image_size="medium_image"
				case_content_size="medium_block"
			/>
			<home-slider-item
				caseName="Aangenaam Bergen op Zoom"
				slug="aangenaam"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				caseColor="#81919a"
				:caseImage="images.boz"
				case_image_size="medium_image"
				case_content_size="medium_block"
			/>
			<home-slider-item
				caseName="Sony Music Netherlands &amp; DVLM"
				slug="ticketchaser"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				caseColor="#747577"
				:caseImage="images.ticketchaser"
				case_image_size="large_image"
				case_content_size="large_block"
			/>
			<home-slider-item
				caseName="Viacom Out of Office"
				slug="viacom"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				caseColor="#9fc1c1"
				:caseImage="images.viacom"
				case_image_size="small_image"
				case_content_size="small_block"
			/>
			<home-slider-item
				caseName="Expeditie Wadden"
				slug="expeditiewadden"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				caseColor="#a8a59c"
				:caseImage="images.expeditiewadden"
				case_image_size="medium_image"
				case_content_size="medium_block"
			/> -->


			<home-slider-item v-for="value in cases" :key="value.post.id"
				:caseName="value.case_fields.client_name"
				:slug="`work/${value.post.post_name}`"
				:caseDescription="value.case_fields.case_description"
				:caseImage="value.case_fields.case_image"
				:caseColor="value.case_fields.case_background_color"
				case_image_size="medium_image"
				case_content_size="medium_block"
			/>


		</home-slider>
	</main>
</template>

<script>
import axios from 'axios'

import TopNav from '~/layouts/TopNav';
import Logo from '~/layouts/Logo';
import HomeSlider from '~/components/HomeSlider';
import HomeSliderItem from '~/components/HomeSliderItem';

export default {
	asyncData ({ params }) {
    return axios.get(`${process.env.baseUrl}/page/homepage`)
    .then((res) => {
			console.log(res.data.cases);
			return {
				cases: res.data.cases
			}
    })
  },
	components: {
		HomeSlider,
		HomeSliderItem,
		TopNav,
		Logo
	},
	watch: {
		slideIn: function(){
			// console.log('change');
		}
	},
}
</script>
