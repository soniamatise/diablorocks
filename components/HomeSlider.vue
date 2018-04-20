<template>
	<div class="home">

		<!-- intro home animation -->
		<section class="home-intro">
			<div class="bg-white white-intro" ref="whiteIntro">
				<div class="white-intro--text">
					<h2 class="medium">Not your average Agency</h2>
				</div>
			</div>
			<div :class="['bg-black', 'black-intro', {flowAway: go}]" ref="blackIntro">
				<div v-for="(text, index) in texts" :class="['black-intro--overflow', {'active--last': go}] " :id="index" :key="index">
					<h2 :class="['medium', 'text-' + index, 'text-white']">{{ text }}</h2>
				</div>
			</div>
		</section>

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

export default {
	head: {
		bodyAttrs: {
			class: '__noscroll white-menu __blackbg'
		}
	},
	components: {
		HomeSliderItem,
		TypeWriter
	},
	props: ['cases'],
	data() {
		return {
			texts: ['Empathic Branding', 'Creative Strategy', 'Innovative Digital', 'Aspiring rental box mogul'],
			text: '',
			wait: true,
			activeIndex: null,
			go: false,
			headingText: '',
			slideIn: '',
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
	mounted: function() {
		const self = this;
		const whiteIntro = this.$refs.whiteIntro;
		const blackIntro = this.$refs.blackIntro;
		const homeSlider = document.getElementById('home-slider');
		let changeText = function(){
			for(let i = 0; i < self._data.texts.length; i++){
				(function(index) {
					setTimeout( function(){
						if (index == (self._data.texts.length - 1)){
							document.getElementById(index).classList.add('active--last');
							setTimeout(function(){
								self._data.go = true;
							}, 1400);
							setTimeout(function(){
								whiteIntro.classList.add('low-z');
								blackIntro.classList.add('go-now');
							}, 3900);
							setTimeout(function(){
								blackIntro.classList.add('low-z');
								document.querySelector('.nav__logo').classList.add('high-z');
							}, 4100);
							setTimeout(function() {
							 	self.type();
								self._data.slideIn = true;
							}, 5100);
						} else {
							self._data.activeIndex = i;
							self._data.text = self._data.texts[i];
						}
						document.getElementById(index).classList.add('active');
					}, i * 1400);
				})(i);
			}
		}
		setTimeout(function() {
			changeText();
		}, 100);
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
			this.displayContent = true;
			setTimeout(function () {
				self.showSlides();
			}, 2000);
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
