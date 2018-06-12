<template>
	<!-- swiper slide -->
	<div class="swiper-slide" ref="card">

		<!-- content container -->
		<div class="swiper-slide__container" :class="item.caseSize">

			<!-- case name -->
			<div class="content name" ref="mobilebox">
				<p>{{ item.caseName }}</p>
			</div>


			<!-- image -->
			<div class="swiper-slide__mask" ref="cardMask"
				:class="item.caseSize"
				@click="pageTransition(item.caseSize)"
				@mouseover="mouseOver(item.caseSize)"
				@mouseleave="mouseLeave()">
				<div class="swiper-slide__image-holder" >
					<div data-swiper-parallax="50%" ref="cardImageHolder">
						<img class="swiper-slide__image" :src="loadImage" ref="cardImage" />
					</div>
				</div>
			</div>

			<!-- case description -->
			<div class="content description">
				<p>{{ item.caseDescription }}</p>
			</div>
			<div class="content_for_medium">
				<p><span>{{ item.caseName }}</span>{{ item.caseDescription }}</p>
			</div>

			<!-- shadow -->
			<div class="swiper-slide__shadow" :class="item.caseSize" ref="cardShadow"></div>

		</div>
	</div>
</template>

<script>
export default {
	props: ['case-index', 'data'],
  data() {
    return {
			loadImage: '',
			item: {},
			hover: {
				landscape: 'polygon(5% 21%, 83% 1%, 95% 79%, 17% 99%)',
				square: 'polygon(3% 19%, 81% 3%, 97% 81%, 21% 97%)',
				portrait: 'polygon(1% 17%, 79% 5%, 99% 83%, 21% 95%)'
			}
    };
  },
  mounted() {
		// Load images after the page is loaded
		this.loadImage = this.item.image;

		this.card = this.$refs.card;
		this.cardText = this.$refs.cardText;
		this.cardImage = this.$refs.cardImage;
		this.cardMask = this.$refs.cardMask;
		this.cardShadow = this.$refs.cardShadow;

		this.breakpoint =  this.$store.state.breakpoints;

		// Start animation for items flying in when page loads
		this.animateIn();
  },
	created() {
		if (this.$props.data) {
			this.item.caseName = this.$props.data.case_fields.client_name;
			this.item.slug = `work/${this.$props.data.post.post_name}`;
			this.item.caseDescription = this.$props.data.case_fields.case_description;
			this.item.image = this.$props.data.case_fields.case_image;
			this.item.caseColor = this.$props.data.case_fields.case_background_color;
			this.item.caseSize = this.$props.data.case_fields.case_size;

			this.item.key = this.$props.caseIndex;
		}
	},
  methods: {
		animateIn: function () {
		// Animation for homepage slideup items
				// Only animate first three items
				if (this.item.key < 3) {
					TweenMax.to(this.card, 1.2, {
						delay: (this.item.key / 2) + .5,
						y: 0,
						ease: Elastic.easeOut.config(0.3, 0.2)
					});
				} else {
					TweenMax.set(this.card, {
						y: 0
					});
				}
		},
    mouseOver: function(caseSize) {
			if (this.$store.state.transition.page === false && this.breakpoint.small < window.innerWidth) {
				this.$emit('changeBackground', this.item.key, this.item.caseColor, 'mouseover');

				TweenMax.to(this.cardMask, 1, {
          clipPath: this.hover[caseSize],
					ease: Elastic.easeInOut.config(1, 0.5)
        });

        TweenMax.to(this.cardShadow, 1, {
          color: this.item.caseColor,
					ease: Power2.easeIn
        });
			}
    },
    mouseLeave: function() {
			if (this.$store.state.transition.page === false && this.breakpoint.small < window.innerWidth) {
				this.$emit('changeBackground', this.item.key, this.item.caseColor, 'mouseleave');

				TweenMax.to(this.cardMask, .9, {
					ease: Power3.easeOut,
          clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)"
        });

				TweenMax.to(this.cardShadow, 1, {
					color: '#000',
					ease: Power2.easeInOut
				});
			}
    },
    pageTransition: function(caseSize) {
			this.$store.commit('updateTransition', true);

			this.$emit('changeBackground', this.item.key, this.item.caseColor, 'pageTransition');
      let image = this.$refs.imgActive;
      let mask = this.$refs.image_holder_active;
      let imageContainer = this.$refs.imageMask;
      let extraAmount;


      // // Disable swiper
      this.$parent.mySwiper.allowSlideNext = false;
      this.$parent.mySwiper.allowSlidePrev = false;

      // Define a new timeline, when complete push router
      let timeline = new TimelineMax({
				onComplete: this.complete
			});

      // Get scale ratio's to make a better transition
      if (caseSize === 'landscape') {
        extraAmount = (this.cardMask.getBoundingClientRect().width / this.cardMask.getBoundingClientRect().height) * 10;
      } else {
        extraAmount = (this.cardMask.getBoundingClientRect().height / this.cardMask.getBoundingClientRect().width) * 10;
      }

      // Animation for Large & medium
      if (window.innerWidth > this.breakpoint.medium) {
        timeline
          .set(document.getElementById('header'), {
            zIndex: 1
          })
          .set(this.cardMask, {
            zIndex: 15
          })
          .to(this.cardMask, 2.3, {
						delay: .2,
            clipPath: `polygon(
						0% ${extraAmount + 100}%, 0% ${-extraAmount}%, 100% ${-extraAmount}%, 100% ${extraAmount + 100}%)`,
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`,
            ease: Power4.easeInOut
          })
          .to(this.cardImage, 2, {
            scale: 1,
            ease: Power4.easeIn
          }, '-=2.6');
      } else {
				// Animation for small
				let imageBouding = this.cardMask.getBoundingClientRect();

        timeline
          .set(this.cardMask, {
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
					.to(this.cardShadow, .5, {
						color: this.item.caseColor
					})
          .to(this.cardMask, 2.3, {
            clipPath: `polygon(
						0% ${extraAmount + 100}%, 0% ${-extraAmount}%, 100% ${-extraAmount}%, 100% ${extraAmount + 100}%)`,
            ease: Power4.easeInOut
          })
          .to(this.cardImage, 1, {
            scale: 1,
            ease: Power4.easeIn
          }, '-=2');
      }
    },
    complete: function() {
			this.$store.commit('updateTransition', false);

      this.$router.push(this.item.slug);
    },
  },
};
</script>
<style lang="scss">
//@import "~henris/ext";

</style>
