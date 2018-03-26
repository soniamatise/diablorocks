<template>
	<main-layout>
		<h1>Dit is index</h1>
		<home-slider>
			<home-slider-item />
			<home-slider-item />
			<home-slider-item />
			<home-slider-item />
			<home-slider-item />
			<home-slider-item />
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
