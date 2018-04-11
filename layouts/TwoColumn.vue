<template>
	<div class="row center">
		<div class="column large-14 medium-full small-full">

			<!-- holder -->
			<div class="holder" v-swiper:mySwiper="swiperOption">

				<!-- swiper wrapper -->
				<div class="swiper-wrapper">

					<!-- imgOne -->
					<div class="swiper-slide">
						<div class="content_holder">
							<img :src="imgOne.url" :alt="imgOne.alt" />
						</div>
		      </div>
					<!-- end imgOne -->

					<!-- imgTwo -->
					<div class="swiper-slide">
						<div class="content_holder">
							<img :src="imgTwo.url" :alt="imgTwo.alt" />
						</div>
		      </div>
					<!-- end imgTwo -->

		    </div>
				<!-- end swiper wrapper -->

	  	</div>
			<!-- end holder -->

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
