<template>
<div id="home-slider" ref="homeSlider" class="row center">
	<div class="column large-full medium-full small-full">
		<div v-swiper:mySwiper="swiperOption">
			<div
		        class="parallax-bg home-bg-parallax"
		        data-swiper-parallax="-300%">
		        <span><p>Our copy guy was out of office</p></span>
		    </div>
			<div class="swiper-wrapper">
				<slot></slot>
			</div>
			<div class="swiper-scrollbar" ref="scrollbar"></div>
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
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
					dragSize: '70',
				},
				mousewheel: {
					invert: true,
				},
			}
		}
	},
	mounted: function() {
		let self = this;
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
		
	}
}
</script>
