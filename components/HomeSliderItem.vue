<template>
	<div class="swiper-slide">
		<div class="contentHolder" v-bind:class="caseImageHeight" @mouseover="bgOfCase()" @mouseleave="bgToNormal()">
			<div class="rotator" data-swiper-parallax="750">
				<img :src="caseImage" />
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
	props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl', 'caseColor', 'caseImageHeight'],
	mounted() {

	},
	methods: {
		bgOfCase: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	let contentHolders = document.getElementsByClassName('contentHolder');
	    	let bullets = document.getElementsByClassName('bullet');
			bg.style.backgroundColor = this.caseColor;
			for (var index = 0; index < bullets.length; index++){
				bullets[index].classList.remove('beBlack');
				bullets[index].style.backgroundColor = this.caseColor;
			}
			for (var index = 0; index < contentHolders.length; index++){
				contentHolders[index].style.boxShadow = '0 0 4.16667vw 1px' + this.caseColor;
			}
	    },
	    bgToNormal: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	let contentHolders = document.getElementsByClassName('contentHolder');
	    	let bullets = document.getElementsByClassName('bullet');
			bg.style.backgroundColor = 'black';
			for (var index = 0; index < bullets.length; index++){
				bullets[index].classList.add('beBlack');
				bullets[index].style.backgroundColor = 'black !important';
			}
			for (var index = 0; index < contentHolders.length; index++){
				contentHolders[index].style.boxShadow = '0 0 4.16667vw 1px rgba(0,0,0,1)';
			}
	    },
	}
}
</script>
