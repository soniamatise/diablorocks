<template>
<div class="row center">
	<div class="column large-14 medium-20 small-full">
		<!-- Slider main container -->
		<div class="swiper-container">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			<!-- If we need pagination -->
			<div class="swiper-pagination"></div>
			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			<!-- If we need scrollbar -->
			<div class="swiper-scrollbar"></div>
		</div>
		<!-- <carousel :mouseDrag="false">
			<slide>
				<img src="../../static/img/placeholderMob.png" alt="placeholder">
			</slide>
			<slide>
				<img src="../../static/img/placeholderMob.png" alt="placeholder">
			</slide>
		</carousel> -->
	</div>
	<div class="column large-12 medium-16 small-16">
		<h4><span>Responsive?</span>In the design process we made the choice to kill responsive. A website should be fluid and adapt to all screen sizes from our perspective.</h4>
	</div>
</div>
</template>

<style lang="scss">
@import '../assets/scss/app.scss';
// .VueCarousel-inner{
// 	.VueCarousel-slide{ border: solid 1px red; width: grid(6); height: 100%;
// 		img{ width: grid(6); height: 100%; }
// 	}
// }
</style>

<script>
import VLink from '../components/VLink.vue'
import MainLayout from '../layouts/MainLayout.vue'

// import {
// 	Carousel,
// 	Slide
// } from 'vue-carousel';

export default {
	components: {
		VLink,
		MainLayout,
		// Carousel,
		// Slide
	},
}


// swiper slider
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

</script>
