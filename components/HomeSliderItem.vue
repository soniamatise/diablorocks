<template>
	<div class="swiper-slide">
		<div class="content name">
			<p>{{ caseName }}</p>
		</div>
		<div class="contentHolder" @mouseover="bgOfCase()" @mouseleave="bgToNormal()">
			<img v-bind:src="caseImage" data-swiper-parallax="750" width="1200">
		</div>
		<div class="content description">
			<p>{{ caseDescription }}</p>
		</div>
	</div>
</template>

<script>

export default {
	props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl', 'caseColor'],
	// mounted is sort of like domready
	mounted() {
	},
	methods: {
		bgOfCase: function () {
	    	const bg = this.$parent.$refs.homeSlider;
			bg.style.backgroundColor = this.caseColor;
	    },
	    bgToNormal: function () {
	    	const bg = this.$parent.$refs.homeSlider;
			bg.style.backgroundColor = 'black';
	    },
	}
}
</script>
