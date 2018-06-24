<template>
	<div class="home" ref="wrapperFull">

		<div class="home-slider" ref="homeSlider">
			<div v-swiper:mySwiper="swiperOption">

				<div class="swiper-wrapper">
					<!-- slider item -->
					<home-slider-item v-for="(item, index) in cases" :key="item.post.id"
						:data="item"
						:case-index="index"
						:case-size="item.case_fields.case_size"
						ref="allCards"
					/>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import HomeSliderItem from '~/components/home/HomeSliderItem.vue';
import HomeIntro from '~/components/home/HomeIntro.vue';

export default {
	head: {
		bodyAttrs: {
			class: '__noscroll white_menu __blackbg'
		}
	},
	components: {
		HomeSliderItem,
		HomeIntro
	},
	props: ['cases'],

	data() {
		return {
			wait: true,
			swiperOption: {
				slidesPerView: 'auto',
				centeredSlides: true,
				speed: 600,
				parallax: true,
				grabCursor: true,
				preventIntercationOnTransition: true,
				mousewheel: {
					invert: false,
					sensitivity: 25,
					releaseOnEdges: true,
				},
				keyboard: {
					enabled: true,
					onlyInViewport: false,
				},
				// breakpoints
				breakpoints: {
					9999: {
						parallax: true,
					},
					750: {
						direction: 'vertical',
						parallax: true,
						speed: 400,
					},
				},
			},
			displayContent: false
		};
	},
	mounted() {
		this.allCards = this.$refs.allCards;
	},
	methods: {

	}
};

</script>
