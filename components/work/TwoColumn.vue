<template>
  <div class="row center">
    <div class="column large-14 medium-full small-full">

      <!-- holder -->
      <div v-swiper:mySwiper="swiperOption" class="holder">

        <!-- swiper wrapper -->
        <div class="swiper-wrapper">

          <!-- imgOne -->
          <div class="swiper-slide">
            <div class="content_holder">
              <div class="real_holder">
                {{ leftColKind }}
                <div v-if="leftColKind==='image'">
                  <img :src="imgOne.url" :alt="imgOne.alt" >
                </div>
                <div v-if="leftColKind==='video'">
                  <video ref="video" playsinline class="video" autoplay loop preload>
                    <source :src="videoOne.url " type="video/mp4">
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
                  <img :src="imgTwo.url" :alt="imgTwo.alt" >
                </div>
                <div v-if="rightColKind==='video'">
                  <video ref="video" playsinline class="video" autoplay loop preload>
                    <source :src="videoTwo.url " type="video/mp4">
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

<script>
export default {
  props: {
    imgOne: {
      type: Object,
      default: () => ({})
    },
    imgTwo: {
      type: Object,
      default: () => ({})
    },
    leftColKind: {
      type: String,
      default: ""
    },
    rightColKind: {
      type: String,
      default: ""
    },
    videoOne: {
      type: Object,
      default: () => ({})
    },
    videoTwo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        touchRatio: 0,
        breakpoints: {
          640: {
            slidesPerView: "auto",
            spaceBetween: 32,
            touchRatio: 1
          }
        }
      }
    }
  }
}
</script>
