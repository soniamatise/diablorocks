<template>
	<section class="home-intro bg-black">
		<div v-for="(text, index) in texts" :class="['home-intro--overflow']" :id="index" :key="index">
			<h2 :class="['medium', 'bg-black', 'text-' + index, 'text-white']">{{ text }}</h2>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			texts: ['Empathic Branding', 'Creative Strategy', 'Innovative Digital', 'Aspiring rental box mogul'],
			text: '',
			activeIndex: null
		}
	},
	methods: {

	},
	mounted(){
		const self = this;
		let changeText = function(){
			for(let i = 0; i < self._data.texts.length; i++){
				(function(index) {
					setTimeout( function(){
						self._data.activeIndex = i;
						self._data.text = self._data.texts[i];
						document.getElementById(i).classList.add('active');
					}, i * 1900);
				})(i);
			}
		}
		setTimeout(function() {
			changeText();
		}, 300)
	}
}
</script>
