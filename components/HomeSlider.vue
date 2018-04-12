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
		<div id="home-slider" ref="homeSlider" class="row center">
		<div class="column large-full medium-full small-full">
			<div v-swiper:mySwiper="swiperOption">
				<div class="parallax-bg home-bg-parallax"
				data-swiper-parallax="-300%">
				<type-writer
				heading="Our copy guy was out of office"
				:wait="wait"
				sub=""
				/>
			</div>
			<div class="swiper-wrapper" v-bind:class="{show: displayContent}">
				<slot></slot>
			</div>
			<div class="swiper-scrollbar contentDisappear" v-bind:class="{show: displayContent}" ref="scrollbar"></div>
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
			class: 'one-page scroll-disable white-menu'
		}
	},
	components: {
		HomeSliderItem,
		TypeWriter
	},
	props: [''],
	data() {
		return {
			texts: ['Empathic Branding', 'Creative Strategy', 'Innovative Digital', 'Aspiring rental box mogul'],
			text: '',
			wait: true,
			activeIndex: null,
			go: false,
			headingText: '',
			Velocity: this.$velocity,
			swiperOption: {
				headingText: '',
				slidesPerView: '1',
				direction: 'horizontal',
				touchRatio: 1,
				centeredSlides: true,
				parallax: true,
				lazy: {
					loadPrevNext: true,
					loadPrevPrev: true,
				},
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
					dragSize: '70',
				},
				mousewheel: {
					// invert: true,
					// sensitivity: 10,
				},
				breakpoints: {

					2000: {
						slidesPerView: '1',
						direction: 'horizontal',
						touchRatio: 1,
						centeredSlides: true,
						parallax: true,
						lazy: {
							loadPrevNext: true,
							loadPrevPrev: true,
						},
						scrollbar: {
							el: '.swiper-scrollbar',
							draggable: true,
							dragSize: '70',
						},
						mousewheel: {
							// invert: true,
							// sensitivity: 4,
						},
					},
					750: {
						slidesPerView: '1',
						direction: 'vertical',
						touchRatio: 1,
						centeredSlides: true,
						parallax: true,
						lazy: {
							loadPrevNext: true,
							loadPrevPrev: true,
						},
						scrollbar: {
							el: '.swiper-scrollbar',
							draggable: true,
							dragSize: '70',
						},
						mousewheel: {
							// invert: true,
							// sensitivity: 10,
						},
					},
				}
			},
			displayContent: false,
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
							document.getElementById(i).classList.add('active--last');
							setTimeout(function(){
								self._data.go = true;
							}, 1900);
							setTimeout(function(){
								document.querySelector('.nav__logo').classList.add('high-z');
							}, 4200);
							setTimeout(function(){
								whiteIntro.classList.add('low-z-white');
								blackIntro.classList.add('low-z-black');
								self.type();
							}, 4900);
						} else {
							self._data.activeIndex = i;
							self._data.text = self._data.texts[i];
						}
						document.getElementById(i).classList.add('active');
					}, i * 1900);
				})(i);
			}
		}
		setTimeout(function() {
			changeText();
		}, 100);

		function createBullets() {
			let slides = document.getElementsByClassName('swiper-slide');
			let scrollBar = self.$refs.scrollbar;
			for (var index = 0; index < slides.length; index++){
				let bullet = document.createElement('span');
				bullet.className = ('bullet bg-black');
				scrollBar.appendChild(bullet);
			}
			scrollBar.removeChild(scrollBar.lastChild);
		}
		createBullets();
	},
	methods: {
		showSlides: function(){
			let self = this;
			let content = document.querySelectorAll('.swiper-slide');
			for (let i = 0; i < content.length; i++){
				(function(index) {
					setTimeout(function() {
						content[index].classList.add('show');
						self.Velocity(content[index], { top: '0' }, 600, [180, 16]);
					}, i * 200)
				})(i);
			}

		},
		type: function(){
			var self = this;
			this.displayContent = true;
			setTimeout(function () {
				self.showSlides();
			}, 1800);
			self._data.wait = false;
		}
	}

}


</script>
