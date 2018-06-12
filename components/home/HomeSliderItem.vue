<template>
	<!-- swiper slide -->
	<div class="swiper-slide" ref="card">

		<!-- content container -->
		<div class="swiper-slide__container" :class="blockClass">

			<!-- case name -->
			<div class="content name" ref="mobilebox">
				<p>{{ item.caseName }}</p>
			</div>


			<!-- image -->
			<div class="mask block" ref="cardMask"
				:class="imageClass"
				@click="bgClick(imageClass)"
				@mouseover="mouseOver()"
				@mouseleave="mouseLeave()">
				<div class="image_holder">
					<div class="image_actual" data-swiper-parallax="50%" ref="cardImageHolder">
						<img :src="loadImage" ref="cardImage" />
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
			<div class="shadow" :class="imageClass" ref="cardShadow"></div>

		</div>
	</div>
</template>

<script>
export default {
	props: ['caseSize', 'case-index', 'data'],
  data() {
    return {
      blockClass: 'square_block',
      imageClass: 'square_image',
			loadImage: '',
			item: {}
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

			this.blockClass = this.caseSize + '_block';
			this.imageClass = this.caseSize + '_image';
		}
	},
  methods: {
		animateIn: function () {
		console.log(this.item.key);
		// Animation for homepage slideup items

		// Large & medium animation
			if (window.innerWidth > this.breakpoint.medium) {

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
			}
			// Small and animation
			else {

				// Only animate first three items
				if (this.item.key < 3) {
					TweenMax.from(this.card, 1.2, {
						delay: (this.item.key / 3) + .8,
						y: '150%',
						ease: Elastic.easeOut.config(0.3, 0.2)
					});
				} else {
					TweenMax.set(this.card, {
						y: '0'
					});
				}
			}
		},
    mouseOver: function(imageClass) {
			// let mask = this.$refs.image_holder_active;
      // let shadow = this.$refs.shadow;
			//
      // let clipPathHovers = {
      //   landscape_image: 'polygon(5% 21%, 83% 1%, 95% 79%, 17% 99%)',
      //   square_image: 'polygon(3% 19%, 81% 3%, 97% 81%, 21% 97%)',
      //   portrait_image: 'polygon(1% 17%, 79% 5%, 99% 83%, 21% 95%)'
      // };
			//
      // // Hover mouseover animation
      // // If there is no transistion going and not mobile width
      // if (!this.transition && this.breakpoint.small < window.innerWidth) {
      //   TweenMax.to(mask, .6, {
      //     clipPath: clipPathHovers[imageClass]
      //   });
      //   TweenMax.to(shadow, .4, {
      //     color: this.caseColor
      //   });
      // }

      // Emit to change the background
      //this.$emit('mouseOver', this.caseColor);
    },
    mouseLeave: function() {
      // let mask = this.$refs.image_holder_active;
      // let shadow = this.$refs.shadow;
      // const breakpoint = this.$store.state.breakpoints;
			//
      // // Hover mouseleave animation
      // if (!this.transition && breakpoint.small < window.innerWidth) {
      //   TweenLite.to(this.cardMask, .5, {
      //     clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
      //     ease: Power2.easeInOut
      //   });
      //   TweenLite.to(shadow, .5, {
      //     rotation: "0",
      //     color: '#000',
      //     ease: Power2.easeInOut
      //   });
      // }
			//
      // this.$emit('mouseLeave', this.caseColor);
    },
    bgClick: function(image_holder) {
      // const checkActive = this.$refs.checkActive;
      // let self = this;
      // let image = this.$refs.imgActive;
      // let mask = this.$refs.image_holder_active;
      // let imageContainer = this.$refs.imageMask;
      // let extraAmount;
			//
      // const breakpoint = this.$store.state.breakpoints;
			//
      // // Emit to change the background
      // this.$emit('changeBackground', this.caseColor);
			//
      // // Set animation true, so other events can't trigger
      // this.transition = true;
			//
      // // Disable swiper
      // this.$parent.mySwiper.allowSlideNext = false;
      // this.$parent.mySwiper.allowSlidePrev = false;
			//
      // // Define a new timeline, when complete push router
      // let timeline = new TimelineMax({
      //   onComplete: this.complete
      // });
			//
      // // Get scale ratio's to make a better transition
      // if (this.caseSize === 'landscape') {
      //   extraAmount = (mask.getBoundingClientRect().width / mask.getBoundingClientRect().height) * 10;
      // } else {
      //   extraAmount = (mask.getBoundingClientRect().height / mask.getBoundingClientRect().width) * 10;
      // }
			//
      // // Animation for Large & medium
      // if (window.innerWidth > breakpoint.medium && window.innerWidth > breakpoint.small ) {
      //   timeline
      //     .set(this.$refs.checkActive, {
      //       zIndex: 5
      //     })
      //     .set(this.$refs.background, {
      //       left: -this.$refs.background.getBoundingClientRect().left,
      //       width: window.innerWidth,
      //       zIndex: 10
      //     })
      //     .set(document.getElementById('header'), {
      //       zIndex: 1
      //     })
      //     .set(mask, {
      //       zIndex: 15
      //     })
      //     .to(this.$refs.background, .9, {
      //       backgroundColor: this.caseColor,
      //       opacity: 1
      //     })
      //     .to(mask, 2.3, {
      //       clipPath: `polygon(
			// 			0% ${extraAmount + 100}%, 0% ${-extraAmount}%, 100% ${-extraAmount}%, 100% ${extraAmount + 100}%)`,
      //       width: `${window.innerWidth}px`,
      //       height: `${window.innerHeight}px`,
      //       ease: Power4.easeInOut
      //     }, '-=.6')
      //     .to(image, 1, {
      //       scale: 1,
      //       ease: Power4.easeIn
      //     }, '-=2.3');
      // }
			//
      // // Animation for small
      // else if (window.innerWidth < breakpoint.small) {
      //   let imageBouding = this.$refs.mobilebox.getBoundingClientRect();
			//
      //   timeline
      //     .set(mask, {
      //       width: `${window.innerWidth}px`,
      //       height: `${window.innerHeight}px`,
      //       clipPath: `polygon(
			// 			${imageBouding.left / window.innerWidth * 100}%
			// 			${(imageBouding.top / window.innerHeight) * 100}%,
			// 			${(imageBouding.left + imageBouding.width) / window.innerWidth * 100}%
			// 			${imageBouding.top / window.innerHeight * 100}%,
			// 			${(imageBouding.left + imageBouding.width) / window.innerWidth * 100}%
			// 			${(imageBouding.top + imageBouding.height) / window.innerHeight * 100}%,
			// 			${imageBouding.left / window.innerWidth * 100}%
			// 			${(imageBouding.top + imageBouding.height) / window.innerHeight * 100}%
			// 			)`
      //     })
      //     .to(mask, 2.3, {
      //       clipPath: `polygon(
			// 			0% ${extraAmount + 100}%, 0% ${-extraAmount}%, 100% ${-extraAmount}%, 100% ${extraAmount + 100}%)`,
      //       ease: Power4.easeInOut
      //     })
      //     .to(image, 1, {
      //       scale: 1,
      //       ease: Power4.easeIn
      //     }, '-=2');
      // }
    },
    complete: function() {
      console.log('Animation completed');
      this.$router.push(this.slug);
    },
  },
};
</script>
<style lang="scss">
@import "~henris/ext";

</style>
