<template>
	<h1 id="typeWriterTitle"><slot></slot></h1>
</template>

<script>
export default {
	props: ['delay'],
	mounted() {
		let self = this;
		const dataText = self.$slots.default[0].text;
		if(!self.delay){
			self.typeWriter(dataText, 0);
		}else{
			setTimeout(function() {
				self.typeWriter(dataText, 0);
			}, self.delay);
		}
	},
	methods: {
		typeWriter: function(text,i, fnCallback){
			let self = this;

			if (i < (text.length)) {
				self.$el.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" id="typestroke"></span>';

				setTimeout(function() {
					self.typeWriter(text, i + 1)
				}, 250);
			}else{
				var typestroke = document.getElementById('typestroke');
				typestroke.style.border = 'white';

				this.$emit('doneTyping');
			}
		}
	}
}
</script>
