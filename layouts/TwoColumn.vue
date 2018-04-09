<template>
<div id="twoCol" class="row center">
	<div class="column large-14 medium-full small-full">
		<div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
				<div class="contentHolder">
					<img :src="imgOne.url" :alt="imgOne.alt" />
				</div>
      </div>
			<div class="swiper-slide">
				<div class="contentHolder">
					<img :src="imgTwo.url" :alt="imgTwo.alt" />
				</div>
      </div>
    </div>
  </div>
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
		props: ['imgOne', 'imgTwo'],
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
