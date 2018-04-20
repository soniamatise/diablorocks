<template>
	<div class="home">

		<home-intro v-on:typeIt="type()"></home-intro>

		<!-- home slider -->
		<div id="home-slider" ref="homeSlider" :style="sliderStyle">
			<div v-swiper:mySwiper="swiperOption" ref="swiperObject">
				<div class="parallax-bg home-bg-parallax" data-swiper-parallax="-280%">
					<type-writer
					heading="Our copy guy was out of office"
					:wait="wait"
					sub=""
					/>
			</div>

			<div class="swiper-wrapper" v-bind:class="{show: displayContent}">

				<!-- slider item -->
				<home-slider-item v-for="value in cases" :key="value.post.id"
					:caseName="value.case_fields.client_name"
					:slug="`work/${value.post.post_name}`"
					:caseDescription="value.case_fields.case_description"
					:caseImage="value.case_fields.case_image"
					:caseColor="value.case_fields.case_background_color"
					:caseSize="value.case_fields.case_size"
					v-on:onEnter="onEnter"
					v-on:onLeave="onLeave"
				/>
				<!-- end slider item -->

			</div>

			<div class="swiper-pagination"></div>

			<div class="swiper-scrollbar contentDisappear" v-bind:class="{show: displayContent}" :style="sliderStyle" ref="scrollbar">
				<span v-for="value in cases" class="bullet" v-bind:key="value.post.id"></span>
			</div>
		</div>

</div>
</div>
</template>

<script>
import HomeSliderItem from '~/components/HomeSliderItem.vue'
import TypeWriter from '~/components/TypeWriter.vue'
import HomeIntro from '~/components/HomeIntro.vue'

export default {
	head: {
		bodyAttrs: {
			class: '__noscroll white-menu __blackbg'
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
					sensitivity: 2,
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
		}
	},
	methods: {
		showSlides: function(){
			let self = this;
			let content = document.querySelectorAll('.swiper-slide');
			for (let i = 0; i < content.length; i++){
				(function(index) {
					setTimeout(function() {
						content[index].classList.add('show');
					}, i * 200)
				})(i);
			}

		},
		type: function(){
			var self = this;
			console.log('done');
			self.displayContent = true;
			self.showSlides();
			self._data.wait = false;
		},
		onEnter: function(color){
			this.sliderStyle = {'--caseColor': color};
		},
		onLeave: function(){
			this.sliderStyle = {};
		}
	}
}


</script>
