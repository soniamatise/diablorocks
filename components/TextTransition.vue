<template>
<div class="hoverHolder" @mouseenter="textAnimationOn()" @mouseleave="textAnimationOff()">
	<div class="contentHolder">
		<div class="textHolder textHolderLeft">
			<div class="textholder-left mask" ref="textElementLeft">
				<div class="keepPosition">
					<h2><span>{{ textLeft }}</span></h2>
				</div>
			</div>
		</div>
		<div class="textHolder textHolderRight">
			<div class="textholder-right mask" ref="textElementRight">
				<h2>{{ textRight }}</h2>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: ['textLeft', 'textRight', 'inverse'],
	data: function() {
		return {
			invers: this.$props.inverse || false,
			elements: {
				left: null,
				right: null
			}
		}
	},
	mounted() {
		this.elements.right = this.$refs.textElementRight;
		this.elements.left = this.$refs.textElementLeft;

		// console.log(this.elements);
		console.log(this.inverse);

		this.toggleWidth();
	},
	methods: {
		toggleWidth: function() {
			this.elements.right.style.transform = 'translateX(0px)';

		},
		//text animation on mouseenter
		textAnimationOn: function() {
			console.log('hoi textAnimationOn');
			this.elements.right.style.transform = 'translateX(' + ((this.elements.left.offsetWidth / 2) * -1) + 'px)';

		},
		//text animation on mouseleave
		textAnimationOff: function() {
			console.log('hoi textAnimationOff');
			this.elements.right.style.transform = 'translateX(0px)';
		}
	}
}
</script>
