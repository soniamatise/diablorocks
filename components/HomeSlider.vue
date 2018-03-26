<template>
<div id="home-slider" class="row center">
	<div class="column large-full medium-full small-full">
		<div v-swiper:mySwiper="swiperOption">
			<div class="swiper-wrapper">
				<slot></slot>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import HomeSliderItem from '~/components/HomeSliderItem.vue'

export default {
	components: {
		HomeSliderItem,
	},
	props: [''],
	data() {
		return {
			swiperOption: {
				slidesPerView: 'auto',
				touchRatio: 1,
				centeredSlides: true,
				spaceBetween: 420,
				parallax: true,
			}
		}
	},
	mounted() {
	},
	methods: {
		typeWriter: function(){

		}
	}
}
</script>
