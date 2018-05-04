<template>
	<div class="home">

		<home-intro @typeIt="type()"/>

		<!-- home slider -->
		<div id="home-slider" ref="homeSlider" :style="sliderStyle">
			<div v-swiper:mySwiper="swiperOption" ref="swiperObject">
				<div class="parallax-bg home-bg-parallax" data-swiper-parallax="-280%">
					<type-writer
						:wait="wait"
						heading="Our copy guy was out of office"
						sub=""
					/>
				</div>

				<div :class="{show: displayContent}" class="swiper-wrapper">

					<!-- slider item -->
					<home-slider-item v-for="value in cases" :key="value.post.id"
						:case-name="value.case_fields.client_name"
						:slug="`work/${value.post.post_name}`"
						:case-description="value.case_fields.case_description"
						:case-image="value.case_fields.case_image"
						:case-color="value.case_fields.case_background_color"
						:case-size="value.case_fields.case_size"
						@onEnter="onEnter"
						@onLeave="onLeave"
					/>
					<!-- end slider item -->

				</div>

				<div class="swiper-pagination"/>

				<div ref="scrollbar" :class="{show: displayContent}" :style="sliderStyle" class="swiper-scrollbar contentDisappear">
					<span v-for="value in cases" :key="value.post.id" class="bullet"/>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import HomeSliderItem from "~/components/home/HomeSliderItem.vue"
import TypeWriter from "~/components/animations/TypeWriter.vue"
import HomeIntro from "~/components/home/HomeIntro.vue"

export default {
  head: {
    bodyAttrs: {
      class: "__noscroll white_menu __blackbg"
    }
  },
  components: {
    HomeSliderItem,
    TypeWriter,
    HomeIntro
  },
  // props: ["cases"],
  props: {
    cases: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      wait: true,
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        speed: 600,
        parallax: true,
        grabCursor: true,
        preventIntercationOnTransition: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          dragSize: "60"
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: "true"
        },
        mousewheel: {
          invert: false,
          sensitivity: 2,
          releaseOnEdges: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        // breakpoints
        breakpoints: {
          9999: {
            parallax: true
          },
          750: {
            direction: "vertical",
            parallax: true,
            speed: 400
          }
        }
      },
      displayContent: false,
      sliderStyle: {}
    }
  },
  methods: {
    showSlides: function() {
      let content = document.querySelectorAll(".swiper-slide")
      for (let i = 0; i < content.length; i++) {
        ;(function(index) {
          setTimeout(function() {
            content[index].classList.add("show")
          }, i * 200)
        })(i)
      }
    },
    type: function() {
      var self = this
      console.log("done")
      self.displayContent = true
      self.showSlides()
      self._data.wait = false
    },
    onEnter: function(color) {
      this.sliderStyle = { "--caseColor": color }
    },
    onLeave: function() {
      this.sliderStyle = {}
    }
  }
}
</script>
