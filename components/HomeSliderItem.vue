<template>
	<div class="swiper-slide">
		<div class="content name">
			<p><b>{{ caseName }}</b></p>
		</div>
		<div class="content description">
			<p>{{ caseDescription }}</p>
		</div>
		<div class="contentHolder" v-bind:class="caseImageHeight" @mouseover="bgOfCase()" @mouseleave="bgToNormal()">
			<div class="rotator" data-swiper-parallax="750">
				<img v-bind:src="caseImage">
			</div>
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
	    	let bullets = document.getElementsByClassName('bullet');
			bg.style.backgroundColor = this.caseColor;
			for (var index = 0; index < bullets.length; index++){
				bullets[index].classList.remove('beBlack');
				bullets[index].style.backgroundColor = this.caseColor;
			}
	    },
	    bgToNormal: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	let bullets = document.getElementsByClassName('bullet');
			bg.style.backgroundColor = 'black';
			for (var index = 0; index < bullets.length; index++){
				bullets[index].classList.add('beBlack');
				bullets[index].style.backgroundColor = 'black !important';
			}
	    },
	}
}
</script>
