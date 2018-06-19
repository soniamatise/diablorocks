<template>
	<div ref="typeWriterTitle" class="typeWriterTitle" >
		<h1 :class="{caret: caret}" :text="heading" :wait="wait" class="desktop_only">{{ headingText }}</h1>
		<div class="paragraph_shower">
			<p :class="{show : show}">{{ sub }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		delay: {
			type: Number,
			default: 0
		},
		heading: {
			type: String,
			default: ''
		},
		sub: {
			type: String,
			default: ''
		},
		wait: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			headingText: '',
			caret: true,
			show: false,
			waitForIt: this._props.wait
		};
	},
	watch: {
		wait: function() {
			setTimeout(function() {
				this.type();
			},900);
		}
	},
	mounted() {
		let self = this;
		if (self._props.wait != true) {
			setTimeout(function() {
				self.type();
			},900);
		}
	},
	methods: {
		type: function() {
			let self = this;
			let heading = self.heading;
			if (self.heading.length !== undefined) {
				for (var i = 0; i < heading.length; i++) {
					(function(index) {
						setTimeout(function() {
							//add one letter at a time
							self._data.headingText += heading[index];
							// if all letters are typed delete caret
							if (heading.length == index + 1) {
								self._data.caret = false;
								self._data.show = true;
								self.$emit('doneTyping');
							}
						}, i * 200);
					})(i);
				}
			}
		}
	}
};
</script>
