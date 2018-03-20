<template>
<div id="twoCol" class="row center">
	<div class="column large-14 medium-full small-full">
		<div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
				<div class="contentHolder">
					<img src="~assets/img/placeholderMob.png" alt="placeholder">
				</div>
      </div>
			<div class="swiper-slide">
				<div class="contentHolder">
					<img src="~/static/img/placeholderMob.png" alt="placeholder">
				</div>
      </div>
    </div>
  </div>
	</div>
	<div class="column large-12 medium-16 small-16">
		<p><span>Responsive?</span> In the design process we made the choice to kill responsive. A website should be fluid and adapt to all screen sizes from our perspective.</p>
	</div>
</div>
</template>

<style lang="scss" scoped>
// .VueCarousel-inner{
// 	.VueCarousel-slide{ border: solid 1px red; width: grid(6); height: 100%;
// 		img{ width: grid(6); height: 100%; }
// 	}
// }
</style>


<script>
	export default {
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
