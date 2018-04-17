<template>
	<div class="typeWriterTitle" ref="typeWriterTitle" >
		<h1 :class="{caret: caret}" :text="heading" :wait="wait">{{ headingText }}</h1>
		<p :class="{show : show}">{{ sub }}</p>
	</div>
</template>

<script>
export default {
	props: ['delay', 'heading', 'sub', 'wait'],
	data() {
		return {
			headingText: '',
			caret: true,
			show: false,
			waitForIt: this._props.wait
		}
	},
	mounted() {
		let self = this;
		if(self._props.wait != true){
			self.type();
		}
	},
	methods:{
		type: function(){
			let self = this;
			let heading = self.heading;
			if (self.heading.length !== undefined) {
				for (var i = 0; i < heading.length; i++){
					(function(index) {
						setTimeout(function() {
							//add one letter at a time
							self._data.headingText += heading[index];
							// if all letters are typed delete caret
							if(heading.length == (index + 1)){
								self._data.caret = false
								self._data.show = true
								self.$emit('doneTyping');
							}
						}, i * 200)
					})(i);
				}
			}
		}
	},
	watch:{
		wait: function(){
			this.type();
		}
	}
}
</script>
