<template>
	<div class="card__holder" ref="cardHolder" :style="{ 'z-index': zIndex }">
		<div class="card"
			@mouseover="backgroundTransitionIn()"
			@mouseleave="backgroundTransitionOut()"
			@click="pageTransition()">
			<div class="card__mask" ref="cardMask">
				<div class="card__image-holder" ref="cardImageHolder">
					<img :class="['card__image',item.imageSize]" ref="cardImage" :src="item.image">
				</div>
			</div>
			<div class="card__content">
				<h4 ref="cardText"><strong>{{ item.title }}</strong> &mdash; {{ item.description }}</h4>
			</div>
		</div>
	</div>
</template>

<script>
import inviewplugin from '~/plugins/inviewplugin';

export default {
	props: ["data"],
		transition: {
		css: false
	},
	data() {
		return {
			item: {},
			pageTransitionState: false,
			zIndex: '',
			inview: ''
		};
	},
	watch: {
		inview: function(oldValue, newValue) {
			console.log(oldValue);
			console.log(newValue);
		}
	},
	created() {
		if (this.$props.data) {
			// console.log(this.$props.data);
			this.item.description = this.$props.data.case_description;
			this.item.title = this.$props.data.client_name;
			this.item.image = this.$props.data.case_image;
			this.item.imageSize = this.$props.data.case_size;
			this.item.backgroundColor = this.$props.data.case_background_color;
			this.item.slug = this.$props.data.case_slug;
		}
	},
	mounted() {
		inviewplugin.mixin;

		this.cardText = this.$refs.cardText;
		this.cardImage = this.$refs.cardImage;
		this.cardMask = this.$refs.cardMask;
		this.cardImageHolder = this.$refs.cardImageHolder;

		this.breakpoint = this.$store.state.breakpoints;

	},
	methods: {
		backgroundTransitionIn: function () {
			console.log(this.inview);
			console.log(this);
			// Card mouse-enter animation if there is no page transition going
			if (this.$store.state.transition.page === false) {

				// Set the z-index of the card higher
				this.zIndex = 999;

				TweenMax.to(this.cardText, .8, {
					color: '#fff'
				});

				// Emit the background-color and the event to the parent component
				this.$emit('changeBackground', this.item.backgroundColor, 'mouseover');
			}
		},
		backgroundTransitionOut: function () {
			// Card mouse-leave animation if there is no page transition going
			if (this.$store.state.transition.page === false) {

				// Remove te z-index from the card
				this.zIndex = '';

				TweenMax.to(this.cardText, .6, {
					color: '#000'
				});

				// Emit the the event to the parent component
				this.$emit('changeBackground', '', 'mouseleave');
			}
		},
		pageTransition: function () {
			let _this = this;
			// Set page transition to true, so hover effect doesn't affect it
			this.$store.commit('updateTransition', true);

			this.$emit('changeBackground', this.item.backgroundColor, 'pageTransition');

			// Make a two new timelines, one for centering the mask and the second one for making the transition
			let timeline = new TimelineMax({
				onComplete: pageTransitionAnimation
			});

			let timelineTwo = new TimelineMax({});

			// Calculate where the image needs to center
			let screenHeight = (window.innerHeight / 2) - (this.cardMask.offsetHeight / 2);
			let imagePositionTop = this.cardMask.getBoundingClientRect().top;

			let screenWidth = (window.innerWidth / 2) - (this.cardMask.offsetWidth / 2);
			let imagePositionLeft = this.cardMask.getBoundingClientRect().left;

			timeline
				.to(this.cardText, .5, {
					opacity: 0
				})
				.to(this.cardMask, .5, {
					y: screenHeight - imagePositionTop,
					ease: Power2.easeInOut
				}, '-=.4')
				.to(this.cardMask, .3, {
					x: screenWidth - imagePositionLeft,
					ease: Power2.easeInOut
				});

				function pageTransitionAnimation() {
					let imageBouding = _this.cardImageHolder.getBoundingClientRect();

					timelineTwo
					.set(_this.cardMask, {
						width: `100vw`,
            height: `100vh`,
            position: 'fixed',
            top: 0,
            left: 0,
            clearProps: "transform",
						clipPath: `polygon(
              ${imageBouding.left / window.innerWidth * 100}%
              ${imageBouding.top / window.innerHeight * 100}%,
              ${(imageBouding.left + imageBouding.width) / window.innerWidth * 100}%
              ${imageBouding.top / window.innerHeight * 100}%,
              ${(imageBouding.left + imageBouding.width) / window.innerWidth * 100}%
              ${(imageBouding.top + imageBouding.height) / window.innerHeight * 100}%,
              ${imageBouding.left / window.innerWidth * 100}%
              ${(imageBouding.top + imageBouding.height) / window.innerHeight * 100}%
              )`
					})
					.set(_this.cardImageHolder, {
						height: '100vh',
						width: '100vw'
					})
					.to(_this.cardImage, 1, {
						width: `100%`,
						height: `100vh`,
						top: 0,
						objectFit: 'cover',
						position: 'absolute',
						ease: Power2.easeIn
					})
					.to(_this.cardMask, 1.9, {
						clipPath: 'polygon(-20% 120%, -20% -20%, 120% -20%, 120% 120%)',
						ease: Power4.easeInOut,
						onComplete: () => {
							_this.completeAnimation();
						}
					}, '-=.85');
				}
		},
		completeAnimation: function () {
			this.$store.commit('updateTransition', false);

			this.$router.push(this.item.slug);
		}
	},
};
</script>

<style lang="scss">
@import "~henris/ext";

.row {
	counter-reset: countIt;
}
.card {
	display: block;
	width: 100%;
	&__holder {
		display: block;
		//position: relative;
		transition: transform 0.2s;
		backface-visibility: hidden;
		//will-change: transform;
		padding: grid(0.5);

		&:nth-child(1) {
			margin-top: grid(0.5);
		}
		&:nth-child(2) {
			margin-top: grid(1);
		}

		/* Every first item  */
		&:nth-child(4n + 1) {
			.card__image {
				//padding-bottom: 130%;
			}
		}
		/* Every second item  */
		&:nth-child(4n + 2) {
			.card__image {
				//padding-bottom: 110%;
			}
		}
		/* Every second item  */
		&:nth-child(4n + 3) {
			.card__image {
				//padding-bottom: 110%;
			}
		} /* Every second item  */
		&:nth-child(4n + 4) {
			.card__image {
				//padding-bottom: 90%;
			}
		}
		// /* Every third item  */
		// &:nth-child(3n + 3) {
		// 	border: 2px solid purple;
		// 	.card__image {
		// 		padding-bottom: 150%;
		// 	}
		// }

		// counter-increment: countIt;
		// &:before {
		// 	content: counter(countIt);
		// 	display: block;
		// 	position: absolute;
		// 	left: 0px;
		// 	width: 2rem;
		// 	top: 0;
		// 	height: 2rem;
		// 	color: white;
		// 	line-height: 2rem;
		// 	text-align: center;
		// 	background-color: red;
		// }
	}
	&__mask {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
	&__image-holder {
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		align-items: center;
		height: grid(9);
	}
	&__image {
		display: block;
		position: absolute;
		width: 67.5vw;
		//padding-bottom: 25%;
		background-size: cover;
		@media #{$medium-down} {
			width: 100vw;
		}
		// &.portrait {
		// 	padding-bottom: 150%;
		// }
		// &.landscape {
		// 	padding-bottom: 100%;
		// }
		// &.square {
		// 	padding-bottom: 50%;
		// }
	}
	&__content {
		padding: grid(0.5);
	}
}
</style>
