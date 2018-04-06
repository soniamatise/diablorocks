<template>
	<div id="typeWriterTitle" ref="typeWriterTitle">
		<h1 :class="{caret: caret}" :text="heading">{{ headingText }}</h1>
		<p :class="{show : show}">{{ sub }}</p>
	</div>
</template>

<script>
export default {
	props: ['delay', 'heading', 'sub'],
	data() {
		return {
			headingText: '',
			caret: true,
			show: false
		}
	},
	mounted() {
		let self = this;
		let heading = self.heading;
		for (var i = 0; i < heading.length; i++){
			(function(index) {

				setTimeout(function() {
					//add one letter at a time
					self._data.headingText += heading[index];
					// console.log(heading[index]);
					// if all letters are typed delete caret
					if(heading.length == (index + 1)){
						self._data.caret = false
						self._data.show = true
					}
				}, i * 300)
			})(i);
		}
	},
	methods: {

	}
}
</script>
