<template>
	<!-- intro home animation -->
	<section :style="sectionStyle" class="home-intro">
		<div ref="whiteIntro" class="bg-white white-intro">
			<div class="white-intro--text">
				<h2 class="medium">Not your average Agency</h2>
			</div>
		</div>
		<div ref="blackIntro" :class="['bg-black', 'black-intro', {flowAway: go}]">
			<div v-for="(text, index) in texts" :class="['black-intro--overflow', {'active--last': go}] " :id="index" :key="index">
				<h2 :class="['medium', 'text-' + index, 'text-white']">{{ text }}</h2>
			</div>
		</div>
	</section>
</template>

<script>
import VueCookie from 'vue-cookie';

export default {
	data() {
		return {
			texts: [
				'Empathic Branding',
				'Creative Strategy',
				'Innovative Digital',
				'Aspiring rental box mogul'
			],
			text: '',
			wait: true,
			activeIndex: null,
			go: false,
			sectionStyle: {}
		};
	},
	mounted: function() {
		let self = this;
		setTimeout(function() {
			if (!VueCookie.get('intro')) {
				console.log('full intro');
				self.changeText();
			} else {
				console.log('short intro');
				self.forceSkip();
			}
		}, 100);
	},
	methods: {
		forceSkip: function() {
			let self = this;
			const whiteIntro = this.$refs.whiteIntro;
			const blackIntro = this.$refs.blackIntro;

			self.sectionStyle = { display: 'none' };
			self.go = true;
			whiteIntro.classList.add('low-z');
			blackIntro.classList.add('go-now');
			blackIntro.classList.add('low-z');
			document.querySelector('.nav__logo').classList.add('high-z');

			self.$emit('typeIt');
		},
		changeText: function() {
			let self = this;
			const whiteIntro = this.$refs.whiteIntro;
			const blackIntro = this.$refs.blackIntro;

			VueCookie.set('intro', true, { expires: '1Y' });
			for (let i = 0; i < self._data.texts.length; i++) {
				(function(index) {
					setTimeout(function() {
						if (index == self._data.texts.length - 1) {
							document.getElementById(index).classList.add('active--last');
							setTimeout(function() {
								self._data.go = true;
							}, 1400);
							setTimeout(function() {
								whiteIntro.classList.add('low-z');
								blackIntro.classList.add('go-now');
							}, 3900);
							setTimeout(function() {
								blackIntro.classList.add('low-z');
								document.querySelector('.nav__logo').classList.add('high-z');
							}, 4100);
							setTimeout(function() {
								self.$emit('typeIt');
							}, 5100);
						} else {
							self._data.activeIndex = i;
							self._data.text = self._data.texts[i];
						}
						document.getElementById(index).classList.add('active');
					}, i * 1400);
				})(i);
			}
		}
	}
};
</script>
