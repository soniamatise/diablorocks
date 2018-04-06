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
				caseImageHeight="full-height"
			/>
			<home-slider-item
				caseName="Sony Music Netherlands"
				slug="nielson"
				caseDescription="A new digital home for Nielson, an artist that reinvented himself."
				:caseImage="images.nielson"
				caseImageHeight="small-height"
			/>
			<home-slider-item
				caseName="BBB Cycling"
				slug="bbbcycling"
				caseDescription="This is what happens when commerce and emotion collide and come together."
				:caseImage="images.bbb"
				caseImageHeight="medium-height"
			/>
			<home-slider-item
				caseName="Aangenaam Bergen op Zoom"
				slug="aangenaam"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				:caseImage="images.boz"
				caseImageHeight="medium-height"
			/>
			<home-slider-item
				caseName="Sony Music Netherlands &amp; DVLM"
				slug="ticketchaser"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				:caseImage="images.ticketchaser"
				caseImageHeight="small-height"
			/>
			<home-slider-item
				caseName="Viacom Out of Office"
				slug="viacom"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				:caseImage="images.viacom"
				caseImageHeight="full-height"
			/>
			<home-slider-item
				caseName="Expeditie Wadden"
				slug="expeditiewadden"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				:caseImage="images.expeditiewadden"
				caseImageHeight="small-height"
			/>
		</home-slider>
	</main>
</template>

<script>
import TopNav from '~/layouts/TopNav';
import Logo from '~/layouts/Logo';
import HomeSlider from '~/components/HomeSlider';
import HomeSliderItem from '~/components/HomeSliderItem';

export default {
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
