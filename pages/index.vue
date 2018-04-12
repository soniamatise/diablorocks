<template>
	<main>
		<input id="menu-trigger" type="checkbox"/>
		<logo/>
		<top-nav/>
		<home-slider >
			<home-slider-item
				caseName="Kalkhoff Bikes"
				slug="kalkhoff"
				caseDescription="When your bikes are eye-catchers, your website should be too."
				:caseImage="images.kalkhoff"
				case_image_size="large_image"
				case_content_size="large_block"
			/>
			<home-slider-item
				caseName="Sony Music Netherlands"
				slug="nielson"
				caseDescription="A new digital home for Nielson, an artist that reinvented himself."
				:caseImage="images.nielson"
				case_image_size="small_image"
				case_content_size="small_block"
			/>
			<home-slider-item
				caseName="BBB Cycling"
				slug="bbbcycling"
				caseDescription="This is what happens when commerce and emotion collide and come together."
				:caseImage="images.bbb"
				case_image_size="medium_image"
				case_content_size="medium_block"
			/>
			<home-slider-item
				caseName="Aangenaam Bergen op Zoom"
				slug="aangenaam"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				:caseImage="images.boz"
				case_image_size="medium_image"
				case_content_size="medium_block"
			/>
			<home-slider-item
				caseName="Sony Music Netherlands &amp; DVLM"
				slug="ticketchaser"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				:caseImage="images.ticketchaser"
				case_image_size="large_image"
				case_content_size="large_block"
			/>
			<home-slider-item
				caseName="Viacom Out of Office"
				slug="viacom"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				:caseImage="images.viacom"
				case_image_size="small_image"
				case_content_size="small_block"
			/>
			<home-slider-item
				caseName="Expeditie Wadden"
				slug="expeditiewadden"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				:caseImage="images.expeditiewadden"
				case_image_size="medium_image"
				case_content_size="medium_block"
			/>
		</home-slider>
	</main>
</template>

<script>
import TopNav from '~/layouts/TopNav';
import Logo from '~/layouts/Logo';
import HomeSlider from '~/components/HomeSlider';
import HomeSliderItem from '~/components/HomeSliderItem';
import axios from 'axios'


export default {
	asyncData ({ params }) {
    return axios.get(`http://api.matise.nl/wp-json/wp/v2/pages/54`)
    .then((res) => {
			// console.log(res.data);
    })
  },
	components: {
		HomeSlider,
		HomeSliderItem,
		TopNav,
		Logo
	},
	data(){
		return {
			images: {
				kalkhoff: require('~/assets/img/home/Hero_Kalkhoff.jpg'),
				nielson: require('~/assets/img/home/Hero_Nielsonair.jpg'),
				bbb: require('~/assets/img/home/Hero_BBB.jpg'),
				boz: require('~/assets/img/home/Hero_BoZ.jpg'),
				ticketchaser: require('~/assets/img/home/Hero_TicketChaser.jpg'),
				viacom: require('~/assets/img/home/Hero_Viacom.jpg'),
				expeditiewadden: require('~/assets/img/home/Hero_ExpeditieWadden.jpg')
			}
		}
	},
	mounted(){
		// console.log(this);
	},
	watch: {
		slideIn: function(){
			// console.log('change');
		}
	},
}
</script>
