<template>
	<section class="home-intro">
		<div class="bg-white white-intro" ref="whiteIntro">
			<div class="white-intro--text">
				<h2 class="medium">Not your average Agency</h2>
			</div>
		</div>
		<div :class="['bg-black', 'black-intro', {flowAway: go}]" ref="blackIntro">
			<div v-for="(text, index) in texts" :class="['black-intro--overflow', {'active--last': go}] " :id="index" :key="index">
				<h2 :class="['medium', 'text-' + index, 'text-white']">{{ text }}</h2>
			</div>
		</div>

	</section>
</template>

<script>
export default {
	data() {
		return {
			texts: ['Empathic Branding', 'Creative Strategy', 'Innovative Digital', 'Aspiring rental box mogul'],
			text: '',
			activeIndex: null,
			go: false
		}
	},
	methods: {

	},
	mounted(){
		const self = this;
		const whiteIntro = this.$refs.whiteIntro;
		const blackIntro = this.$refs.blackIntro;
		const homeSlider = document.getElementById('home-slider');
		let changeText = function(){
			for(let i = 0; i < self._data.texts.length; i++){
				(function(index) {
					setTimeout( function(){
						if (index == (self._data.texts.length - 1)){
							document.getElementById(i).classList.add('active--last');
							setTimeout(function(){
								self._data.go = true;
							}, 1900);
							setTimeout(function(){
								document.querySelector('.nav__logo').classList.add('high-z');
							}, 4200);
							setTimeout(function(){
								whiteIntro.classList.add('low-z-white');
								blackIntro.classList.add('low-z-black');
							}, 4500);
						} else {
							self._data.activeIndex = i;
							self._data.text = self._data.texts[i];
						}
						document.getElementById(i).classList.add('active');
					}, i * 1900);
				})(i);
			}
		}
		setTimeout(function() {
			changeText();
		}, 100)
	}
}
</script>
