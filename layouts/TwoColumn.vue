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
							<div class="real_holder">
								{{leftColKind}}
								<div v-if="leftColKind==='image'">
									<img :src="imgOne.url" :alt="imgOne.alt" />
								</div>
								<div v-if="leftColKind==='video'">
									<video playsinline class="video" ref="video" autoplay loop preload>
										<source v-bind:src="videoOne.url " type="video/mp4">
									</video>
								</div>
							</div>
						</div>
		      </div>
					<!-- end imgOne -->

					<!-- imgTwo -->
					<div class="swiper-slide">
						<div class="content_holder">
							<div class="real_holder">
								<div v-if="rightColKind==='image'">
									<img :src="imgTwo.url" :alt="imgTwo.alt" />
								</div>
								<div v-if="rightColKind==='video'">
									<video playsinline class="video" ref="video" autoplay loop preload>
										<source v-bind:src="videoTwo.url " type="video/mp4">
									</video>
								</div>
							</div>
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
		props: ['imgOne', 'imgTwo', 'leftColKind', 'rightColKind', 'videoOne', 'videoTwo'],
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
