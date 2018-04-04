<template>
<div id="home-slider" ref="homeSlider" class="row center">
	<div class="column small-16 large-20 column-20 home-cover" ref="homeCover">
		
	</div>
	<div class="column large-full medium-full small-full">
		<div v-swiper:mySwiper="swiperOption">
			<div
		        class="parallax-bg home-bg-parallax"
		        data-swiper-parallax="-300%">
		        <div class="typestroke"></div>
		        <span class="cooleText"><h6>Our copy guy was out of office</h6></span>

		    </div>
			<div class="swiper-wrapper contentDisappear" v-bind:class="{show: displayContent}">
				<slot></slot>
			</div>
			<div class="swiper-scrollbar contentDisappear" v-bind:class="{show: displayContent}" ref="scrollbar"></div>
		</div>
	</div>
</div>
</template>

<script>
import HomeSliderItem from '~/components/HomeSliderItem.vue'

export default {
	head: {
		bodyAttrs: {
			class: 'one-page scroll-disable white-menu'
		}
	},
	components: {
		HomeSliderItem,
	},
	props: [''],
	data() {
		return {
			Velocity: this.$velocity,
			swiperOption: {
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
		let self = this;
		self.typeAnimation();

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
			this.displayContent = true;
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
		typeAnimation: function(){
			var self = this;
			setTimeout(function() {
				self.showContent();
			}, 12000);
			setTimeout(function() {
				self.showSlides();
			}, 12000);
			setTimeout(function() {
				let content = document.getElementsByClassName('show');
				for (var index = 0; index < content.length; index++){
					content[index].classList.remove('contentDisappear');
				}
			}, 13000);
		},
	}
}


</script>
