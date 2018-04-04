<template>
	<div class="swiper-slide contentDisappear">
		<div class="contentHolder" ref="contentHolderActive" v-bind:class="caseImageHeight" @mouseover="bgOfCase()" @mouseleave="bgToNormal()">
			<div class="rotator" data-swiper-parallax="750">
				<img :src="caseImage" ref="imgActive" />
			</div>
		</div>

		<div class="content name">
			<p><b>{{ caseName }}</b></p>
		</div>
		<div class="content description">
			<p>{{ caseDescription }}</p>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			Velocity: this.$velocity,
		}
	},
	props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl', 'caseColor', 'caseImageHeight'],
	methods: {
		bgOfCase: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	const homeCover = this.$parent.$refs.homeCover;
	    	const contentHolderActive = this.$refs.contentHolderActive;
	    	const imgActive = this.$refs.imgActive;
	    	let contentHolders = document.getElementsByClassName('contentHolder');
	    	let bullets = document.getElementsByClassName('bullet');
	    	const getGrid = window.innerWidth / 12;
			bg.style.backgroundColor = this.caseColor;
			// homeCover.style.backgroundColor = this.caseColor;

			for (var index = 0; index < bullets.length; index++){
				bullets[index].classList.remove('beBlack');
				bullets[index].style.backgroundColor = this.caseColor;
			}
			for (var index = 0; index < contentHolders.length; index++){
				contentHolders[index].style.boxShadow = '0 0 4.16667vw 1px' + this.caseColor;
			}
			this.Velocity(contentHolderActive, { transform: 'rotate(-15deg)' }, 600, [180, 16]);
			this.Velocity(imgActive, { transform: 'rotate(15deg)' }, 600, [180, 16]);
	    },
	    bgToNormal: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	const homeCover = this.$parent.$refs.homeCover;
	    	const contentHolderActive = this.$refs.contentHolderActive;
	    	const imgActive = this.$refs.imgActive;
	    	let contentHolders = document.getElementsByClassName('contentHolder');
	    	let bullets = document.getElementsByClassName('bullet');
			bg.style.backgroundColor = 'black';
			// homeCover.style.backgroundColor = 'black';
			for (var index = 0; index < bullets.length; index++){
				bullets[index].classList.add('beBlack');
				bullets[index].style.backgroundColor = 'black !important';
			}
			for (var index = 0; index < contentHolders.length; index++){
				contentHolders[index].style.boxShadow = '0 0 4.16667vw 1px rgba(0,0,0,1)';
			}
			this.Velocity(contentHolderActive, { transform: 'rotate(0deg)' }, 600, [180, 16]);
			this.Velocity(imgActive, { transform: 'rotate(0deg)' }, 600, [180, 16]);
	    },

	}
}
</script>
