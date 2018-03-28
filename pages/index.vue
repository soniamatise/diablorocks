<template>
	<main-layout>
		<home-slider>
			<home-slider-item 
				caseName="Kalkhoff Bikes"
				caseDescription="When your bikes are eye-catchers, your website should be too."
				caseImage="/_nuxt/img/Hero_Kalkhoff.2c75bd4.jpg"
				caseColor="#787069"
				caseImageHeight="full-height"
			/>
			<home-slider-item 
				caseName="Sony Music Netherlands"
				caseDescription="A new digital home for Nielson, an artist that reinvented himself."
				caseImage="/_nuxt/img/Hero_Kalkhoff.2c75bd4.jpg"
				caseColor="#400c0e"
				caseImageHeight="small-height"
			/>
			<home-slider-item 
				caseName="BBB Cycling"
				caseDescription="This is what happens when commerce and emotion collide and come together."
				caseImage="/_nuxt/img/Hero_Kalkhoff.2c75bd4.jpg"
				caseColor="#524d40"
				caseImageHeight="medium-height"
			/>
			<home-slider-item 
				caseName="Aangenaam Bergen op Zoom"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				caseImage="/_nuxt/img/Hero_Kalkhoff.2c75bd4.jpg"
				caseColor="#81919a"
				caseImageHeight="medium-height"
			/>
			<home-slider-item 
				caseName="Sony Music Netherlands & DVLM"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				caseImage="/_nuxt/img/Hero_Kalkhoff.2c75bd4.jpg"
				caseColor="#747577"
				caseImageHeight="small-height"
			/>
			<home-slider-item 
				caseName="Viacom Out of Office"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				caseImage="/_nuxt/img/Hero_Kalkhoff.2c75bd4.jpg"
				caseColor="#9fc1c1"
				caseImageHeight="full-height"
			/>
			<home-slider-item 
				caseName="Expeditie Wadden"
				caseDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				caseImage="/_nuxt/img/Hero_Kalkhoff.2c75bd4.jpg"
				caseColor="#a8a59c"
				caseImageHeight="small-height"
			/>
		</home-slider>
	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout.vue'
import HomeSlider from '~/components/HomeSlider.vue'
import HomeSliderItem from '~/components/HomeSliderItem.vue'

export default {
	components: {
		MainLayout,
		HomeSlider,
		HomeSliderItem,
	},
}
</script>
