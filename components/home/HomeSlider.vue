<template>
	<div class="home" ref="wrapperFull">
		<!-- <home-intro v-on:typeIt="type()"></home-intro> -->

		<!-- home slider -->
		<div id="home-slider" ref="homeSlider" :style="sliderStyle">
			<div v-swiper:mySwiper="swiperOption" ref="swiperObject">
				<div class="parallax-bg home-bg-parallax" data-swiper-parallax="-280%">
					<type-writer
						heading="Our copy guy was out of office"
						sub=""
					/>
				</div>

				<div class="swiper-wrapper">

					<!-- slider item -->
					<home-slider-item v-for="(value, key) in cases" :key="value.post.id"
						@changeBackground="changeBackground"
						@mouseOver="mouseOver"
						@mouseLeave="mouseLeave"
						:case-name="value.case_fields.client_name"
						:slug="`work/${value.post.post_name}`"
						:case-description="value.case_fields.case_description"
						:case-image="value.case_fields.case_image"
						:case-color="value.case_fields.case_background_color"
						:case-size="value.case_fields.case_size"
						:item-key="key"
					/>
				<!-- end slider item -->

				</div>

				<div class="swiper-pagination"></div>

				<div class="swiper-scrollbar contentDisappear" :class="{show: displayContent}" :style="sliderStyle" ref="scrollbar">
					<span ref="bullet" v-for="value in cases" class="bullet" :key="value.post.id"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HomeSliderItem from '~/components/home/HomeSliderItem.vue';
import TypeWriter from '~/components/animations/TypeWriter.vue';
import HomeIntro from '~/components/home/HomeIntro.vue';

export default {
	head: {
		bodyAttrs: {
			class: '__noscroll white_menu __blackbg'
		}
	},
	components: {
		HomeSliderItem,
		TypeWriter,
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
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
					dragSize: '60',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: 'true',
				},
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
			displayContent: false,
			sliderStyle: {}
		};
	},
	methods: {
		changeBackground: function(data) {
			console.log(data);
		},
		mouseOver: function(caseColor) {
			let wrapperFull = this.$refs.wrapperFull;
			let bullet = this.$refs.bullet;

			TweenLite.to(wrapperFull, .8, {
				backgroundColor: caseColor,
				ease: Power1.easeInOut
			});
			TweenLite.to(bullet, .8, {
				backgroundColor: caseColor,
				ease: Power1.easeInOut
			});
		},
		mouseLeave: function(caseColor) {
			let wrapperFull = this.$refs.wrapperFull;
			let bullet = this.$refs.bullet;

			TweenLite.to(wrapperFull, .8, {
				backgroundColor: '#000',
				ease: Power1.easeInOut
			});
			TweenLite.to(bullet, .8, {
				backgroundColor: '#000',
				ease: Power1.easeInOut
			});
		}
	}
};


</script>
