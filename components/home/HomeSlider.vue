<template>
	<div class="home" ref="wrapperFull">
		<!-- <home-intro v-on:typeIt="type()"></home-intro> -->

		<!-- home slider -->
		<div class="home-slider" ref="homeSlider">
			<div v-swiper:mySwiper="swiperOption">
				<div class="home-slider__typewriter" data-swiper-parallax="-280%">
					<type-writer
						heading="Our copy guy was out of office"
						sub=""
					/>
				</div>

				<div class="swiper-wrapper">
					<!-- slider item -->
					<home-slider-item v-for="(item, index) in cases" :key="item.post.id"
						@changeBackground="changeBackground"
						:data="item"
						:case-index="index"
						:case-size="item.case_fields.case_size"
						ref="allCards"
					/>
				</div>

				<div class="background__canvas" ref="backgroundCanvas"></div>


				<div class="swiper-pagination"></div>

				<div class="swiper-scrollbar contentDisappear" :class="{show: displayContent}" ref="scrollbar">
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
			displayContent: false
		};
	},
	mounted() {
		this.backgroundCanvas = this.$refs.backgroundCanvas;
		this.allCards = this.$refs.allCards;
	},
	methods: {
		changeBackground: function(key, caseColor, mouseEvent) {
			// Function for animating the background element based on the event
			if(mouseEvent === 'mouseover') {
				TweenMax.to(this.backgroundCanvas, 1.5, {
					backgroundColor: caseColor,
					opacity: .9
				});
			}	else if(mouseEvent === 'mouseleave') {
				TweenMax.to(this.backgroundCanvas, 2, {
					opacity: 0,
					clearProps: 'backgroundColor'
				});
			} else if(mouseEvent === 'pageTransition') {

				// Fade out all case items expect the one clicked on
				this.allCards.forEach(function(card) {
					if (card.caseIndex !== key) {
						TweenMax.to(card.$el, 1, {
								opacity: 0
							});
					}
				});
				TweenMax.to(this.backgroundCanvas, 1, {
					backgroundColor: caseColor,
					opacity: 1
				});
			}
		}
	}
};

</script>
<style lang="scss">
@import "~henris/ext";

.home-slider {
	&__typewriter {
		height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;

		@media #{$small-only} {
      height: 100%;
    }

		.typeWriterTitle {
			position: absolute;
			white-space: nowrap;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			@media #{$small-only} {
				transform: rotate(90deg) translate(0, -50vw);
				transform-origin: 0 50%;
				top: 0;
			}
			h1 {
				width: max-content;
				padding: 0 grid(2);
				height: grid(6);

				@media #{$medium-only} {
					padding: 0 grid(4);
				}
				@media #{$small-only} {
					padding: 0;
					left: -240px;
					top: -16px;
				}
			}
		}
	}
}
</style>
