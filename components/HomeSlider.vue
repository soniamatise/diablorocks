<template>
	<div class="home">
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
		<div id="home-slider" ref="homeSlider" class="row center">
			<!--  wat doet dit?
			<div class="column small-16 large-20 column-20 home-cover" ref="homeCover">
		</div> -->
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
			<div class="swiper-wrapper contentDisappear" v-bind:class="{show: displayContent}">
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
				slidesPerView: 'auto',
				direction: 'horizontal',
				touchRatio: 1,
				centeredSlides: true,
				spaceBetween: 420,
				parallax: true,
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
					dragSize: '70',
				},
				mousewheel: {
					invert: true,
					sensitivity: 10,
				},
				breakpoints: {

					2000: {
						slidesPerView: 'auto',
						direction: 'horizontal',
						touchRatio: 1,
						centeredSlides: true,
						spaceBetween: 420,
						parallax: true,
						scrollbar: {
							el: '.swiper-scrollbar',
							draggable: true,
							dragSize: '70',
						},
						mousewheel: {
							invert: true,
							sensitivity: 4,
						},
					},
					750: {
						slidesPerView: 'auto',
						direction: 'vertical',
						touchRatio: 1,
						centeredSlides: true,
						spaceBetween: 90,
						parallax: true,
						scrollbar: {
							el: '.swiper-scrollbar',
							draggable: true,
							dragSize: '70',
						},
						mousewheel: {
							invert: true,
							sensitivity: 10,
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
				bullet.className = 'bullet';
				scrollBar.appendChild(bullet);
			}
			scrollBar.removeChild(scrollBar.lastChild);
		}
		createBullets();
	},
	methods: {
		showContent: function(){

		},
		showSlides: function(){
			let self = this;
			let content = document.querySelectorAll('.swiper-slide');
			let i = 0;
			let interval = setInterval(function() {
				content[i++].classList.add('show', 'jumpUp');
				if (i === content.length) {
					clearInterval(interval);
				}
			}, 200);
		},
		type: function(){
			var self = this;
			this.displayContent = true;

			self.showSlides();
				self._data.wait = false;
		}
	}

}


</script>
