<template>
	<!-- swiper slide -->
	<div class="swiper-slide" ref="checkActive">

		<!-- content container -->
		<div class="content_container" ref="content_container_active" :class="blockClass">

			<!-- case name -->
			<div class="content name" ref="mobilebox">
				<p>{{ caseName }}</p>
			</div>
			<!-- end case name -->

			<!-- image -->
			<div class="image_holder block" ref="image_holder_active" :class="imageClass" @click="bgClick(imageClass)" @mouseover="mouseOver(imageClass)" @mouseleave="mouseLeave">
				<div class="image_position">
					<div class="image_actual" data-swiper-parallax="50%" ref="imageMask">
						<img :src="images" ref="imgActive" />
					</div>
				</div>
			</div>
			<!-- end image -->

			<!-- case description -->
			<div class="content description">
				<p>{{ caseDescription }}</p>
			</div>
			<div class="content_for_medium">
				<p><span>{{ caseName }}</span>{{ caseDescription }}</p>
			</div>
			<!-- end case description -->

			<!-- shadow -->
			<div class="shadow" :class="imageClass" ref="shadow"></div>
			<!-- end shadow -->

		</div>
		<!-- end content container -->

		<div ref="background" class="background__canvas"></div>

	</div>
<!-- end swiper slide -->
</template>

<script>
export default {
  props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl', 'caseColor', 'caseSize', 'slug', 'itemKey'],
  data() {
    return {
      blockClass: 'square_block',
      imageClass: 'square_image',
      images: '',
      transition: false
    };
  },
  mounted() {
    // Small fix for adding the images when the page is loaded
    this.images = this.caseImage;

    const breakpoint = this.$store.state.breakpoints;
    if (this.caseSize) {
      this.blockClass = this.caseSize + '_block';
      this.imageClass = this.caseSize + '_image';
    }
    // Animation for homepage slideup items

    // Large & medium animation
    if (window.innerWidth > breakpoint.medium) {
      if (this.itemKey < 3) {
        TweenMax.to(this.$refs.checkActive, 1.2, {
          delay: (this.itemKey / 3) + .8,
          y: '0',
          ease: Elastic.easeOut.config(0.3, 0.2)
        });
      } else {
        TweenMax.set(this.$refs.checkActive, {
          y: '0'
        });
      }
    }
    // Small and animation
    else {
      if (this.itemKey < 3) {
        TweenMax.from(this.$refs.checkActive, 1.2, {
          delay: (this.itemKey / 3) + .8,
          y: '130%',
          ease: Elastic.easeOut.config(0.3, 0.2)
        });
      } else {
        TweenMax.set(this.$refs.checkActive, {
          y: '0'
        });
      }
    }
  },
  methods: {
    mouseOver: function(imageClass) {
      let mask = this.$refs.image_holder_active;
      let shadow = this.$refs.shadow;
      const breakpoint = this.$store.state.breakpoints;

      let clipPathHovers = {
        landscape_image: 'polygon(5% 21%, 83% 1%, 95% 79%, 17% 99%)',
        square_image: 'polygon(3% 19%, 81% 3%, 97% 81%, 21% 97%)',
        portrait_image: 'polygon(1% 17%, 79% 5%, 99% 83%, 21% 95%)'
      };

      // Hover mouseover animation
      // If there is no transistion going and not mobile width
      if (!this.transition && breakpoint.small < window.innerWidth) {
        TweenMax.to(mask, .6, {
          clipPath: clipPathHovers[imageClass],
          ease: Power4.easeInOut
        });
        TweenMax.to(shadow, .4, {
          color: this.caseColor,
          ease: Power4.easeIn
        });
      }

      // Emit to change the background
      this.$emit('mouseOver', this.caseColor);
    },
    mouseLeave: function() {
      let mask = this.$refs.image_holder_active;
      let shadow = this.$refs.shadow;
      const breakpoint = this.$store.state.breakpoints;

      // Hover mouseleave animation
      if (!this.transition && breakpoint.small < window.innerWidth) {
        TweenLite.to(mask, .5, {
          clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
          ease: Power2.easeInOut
        });
        TweenLite.to(shadow, .5, {
          rotation: "0",
          color: '#000',
          ease: Power2.easeInOut
        });
      }

      this.$emit('mouseLeave', this.caseColor);
    },
    bgClick: function(image_holder) {
      const checkActive = this.$refs.checkActive;
      let self = this;
      let image = this.$refs.imgActive;
      let mask = this.$refs.image_holder_active;
      let imageContainer = this.$refs.imageMask;
      let extraAmount;

      const breakpoint = this.$store.state.breakpoints;

      // Emit to change the background
      this.$emit('changeBackground', this.caseColor);

      // Set animation true, so other events can't trigger
      this.transition = true;

      // Disable swiper
      this.$parent.mySwiper.allowSlideNext = false;
      this.$parent.mySwiper.allowSlidePrev = false;

      // Define a new timeline, when complete push router
      let timeline = new TimelineMax({
        onComplete: this.complete
      });

      // Get scale ratio's to make a better transition
      if (this.caseSize === 'landscape') {
        extraAmount = (mask.getBoundingClientRect().width / mask.getBoundingClientRect().height) * 10;
      } else {
        extraAmount = (mask.getBoundingClientRect().height / mask.getBoundingClientRect().width) * 10;
      }

      // Animation for Large & medium
      if (window.innerWidth > breakpoint.medium && window.innerWidth > breakpoint.small ) {
        timeline
          .set(this.$refs.checkActive, {
            zIndex: 5
          })
          .set(this.$refs.background, {
            left: -this.$refs.background.getBoundingClientRect().left,
            width: window.innerWidth,
            zIndex: 10
          })
          .set(document.getElementById('header'), {
            zIndex: 1
          })
          .set(mask, {
            zIndex: 15
          })
          .to(this.$refs.background, .9, {
            backgroundColor: this.caseColor,
            opacity: 1
          })
          .to(mask, 2.3, {
            clipPath: `polygon(
						0% ${extraAmount + 100}%, 0% ${-extraAmount}%, 100% ${-extraAmount}%, 100% ${extraAmount + 100}%)`,
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`,
            ease: Power4.easeInOut
          }, '-=.6')
          .to(image, 1, {
            scale: 1,
            ease: Power4.easeIn
          }, '-=2.3');
      }

      // Animation for small
      else if (window.innerWidth < breakpoint.small) {
        let imageBouding = this.$refs.mobilebox.getBoundingClientRect();

        timeline
          .set(mask, {
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`,
            clipPath: `polygon(
						${imageBouding.left / window.innerWidth * 100}%
						${(imageBouding.top / window.innerHeight) * 100}%,
						${(imageBouding.left + imageBouding.width) / window.innerWidth * 100}%
						${imageBouding.top / window.innerHeight * 100}%,
						${(imageBouding.left + imageBouding.width) / window.innerWidth * 100}%
						${(imageBouding.top + imageBouding.height) / window.innerHeight * 100}%,
						${imageBouding.left / window.innerWidth * 100}%
						${(imageBouding.top + imageBouding.height) / window.innerHeight * 100}%
						)`
          })
          .to(mask, 2.3, {
            clipPath: `polygon(
						0% ${extraAmount + 100}%, 0% ${-extraAmount}%, 100% ${-extraAmount}%, 100% ${extraAmount + 100}%)`,
            ease: Power4.easeInOut
          })
          .to(image, 1, {
            scale: 1,
            ease: Power4.easeIn
          }, '-=2');
      }
    },
    complete: function() {
      console.log('Animation completed');
      this.$router.push(this.slug);
    },
  },
};
</script>
<style scoped>
.background__canvas {
  z-index: 4;
  opacity: .7;
}

.swiper-slide {
  z-index: -1;
}
</style>
