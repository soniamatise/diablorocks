<template>
<section id="next-case" class="nextCase">
	<div class="hoverHolder" id="mouseOver" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()" :case="caseName">
		<div class="contentHolder">
			<div class="textHolder textHolderLeft">
				<div id="textholder-left" class="mask">
					<div class="keepPosition">
						<h2><span>Next case</span>&nbsp;</h2>
					</div>
				</div>
			</div>
			<div class="textHolder textHolderRight">
				<div id="textholder-right" class="mask">
					<h2>{{ caseName }}</h2>
				</div>
			</div>
			<div class="textHolder mobile-only">
				<h2><span>Next case</span> {{ caseName }}</h2>
			</div>
		</div>
	</div>
	<div id="caseImage" class="caseImage">
		<img :src="image">
	</div>
</section>
</template>

<script>
export default {
	props: ['caseName', 'image', 'caseColor'],
	data() {
		return {
			Velocity: this.$velocity
		}
	},
	methods: {
		bgOfCase: function() {

			console.log('hoi of case');

			//case color on mouseover
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = this.caseColor;

			//text animation on mouseover
			const leftText = document.getElementById('textholder-left');
			const rightText = document.getElementById('textholder-right');

			const currentWidthInner = leftText.offsetWidth / 2;
			rightText.style.transform = 'translateX(' + -currentWidthInner + 'px)';

			//case image animation on mouseover
			const caseImage = document.getElementById('caseImage');

			//get grid size for image height on mouseover
			const getGrid = window.innerWidth / 12;
			//case image animation on mouseover
			let self = this;
			setTimeout(function() {
				self.Velocity(caseImage, {
					transform: 'translateY(' + -getGrid + 'px)'
				}, 800, [180, 12]);
			}, 600);
		},
		bgToNormal: function() {
			console.log('hoi to normal');
			const caseImage = document.getElementById('caseImage');

			this.Velocity(caseImage, {
				transform: 'translateY(0px)'
			}, 800, [180, 18]);

			//black color on mouseleave
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = 'black';

			//text animation on mouseleave
			const rightText = document.getElementById('textholder-right');
			rightText.style.transform = 'translateX(0px)';
		},
	},
	mounted: () => {
		//do the math for width
		const leftText = document.getElementById('textholder-left');
		const rightText = document.getElementById('textholder-right');

		function toggleWidth() {
			const currentWidthInner = leftText.offsetWidth / 2;
			rightText.style.transform = 'translateX(' + -currentWidthInner + 'px)';
		}
	}
}
</script>
