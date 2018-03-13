<template>
<div class="row center">
	<div class="column large-14 medium-full small-full">
		<swiper :options="swiperOption">
			<swiper-slide>
				<div class="contentHolder">
					<img src="../../static/img/placeholderMob.png" alt="placeholder">
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="contentHolder">
					<img src="../../static/img/placeholderMob.png" alt="placeholder">
				</div>
			</swiper-slide>
		</swiper>
	</div>
	<div class="column large-12 medium-16 small-16">
		<p><span>Responsive?</span> In the design process we made the choice to kill responsive. A website should be fluid and adapt to all screen sizes from our perspective.</p>
	</div>
</div>
</template>

<style lang="scss" scoped>
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

// require styles for swiper slider
import 'swiper/dist/css/swiper.css'

import {
	swiper,
	swiperSlide
} from 'vue-awesome-swiper'

export default {
	components: {
		VLink,
		MainLayout,
		swiper,
		swiperSlide
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 2,
				touchRatio: 0,
				breakpoints: {
					640: {
						slidesPerView: 'auto',
						spaceBetween: 32,
						touchRatio: 1,
					}
				}
			}
		}
	}
}
</script>
