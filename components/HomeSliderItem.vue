<template>
	<div class="swiper-slide">
		<div class="content_container" ref="content_container_active" v-bind:class="blockClass">
			<div class="content name">
				<p>{{ caseName }}</p>
			</div>
			<div class="image_holder" ref="image_holder_active" v-bind:class="imageClass" @mouseover="bgOfCase()" @mouseleave="bgToNormal()">
				<div class="rotator" data-swiper-parallax="750">
					<img :src="caseImage" ref="imgActive" />
				</div>
			</div>
			<div class="content description">
				<p :data-description="caseDescription"></p>
			</div>
			<div class="content_for_medium">
				<p><span>{{ caseName }}</span>{{ caseDescription }}</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			Velocity: this.$velocity,
			blockClass: 'medium_block',
			imageClass: 'medium_image'
		}
	},
	props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl', 'caseColor', 'caseSize', 'slug'],
	methods: {
		bgOfCase: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	const homeCover = this.$parent.$refs.homeCover;
	    	const typestroke = this.$parent.$refs.typestroke;
	    	const image_holder_active = this.$refs.image_holder_active;
	    	const imgActive = this.$refs.imgActive;
	    	let image_holder = document.querySelectorAll('.image_holder');
	    	const getGrid = window.innerWidth / 24;

			this.$emit('onEnter', this.caseColor);

			var self = this;

			image_holder.forEach(function(image_holder){
				image_holder.style = `--caseColor: ${self.caseColor}`
			})
			this.Velocity(image_holder_active, { transform: 'rotate(-15deg)' }, 600, [180, 16]);
			this.Velocity(imgActive, { transform: 'rotate(15deg)' }, 600, [180, 16]);
		},
		bgToNormal: function () {
			const bg = this.$parent.$refs.homeSlider;
			const homeCover = this.$parent.$refs.homeCover;
			const typestroke = this.$parent.$refs.typestroke;
			const image_holder_active = this.$refs.image_holder_active;
			const imgActive = this.$refs.imgActive;
			let image_holder = document.querySelectorAll('.image_holder');

			this.$emit('onLeave');

			image_holder.forEach(function(image_holder){
			image_holder.style = `--caseColor: black`
			})
			this.Velocity(image_holder_active, { transform: 'rotate(0deg)' }, 600, [180, 16]);
			this.Velocity(imgActive, { transform: 'rotate(0deg)' }, 600, [180, 16]);
		}
	},
	mounted() {
		if(this.caseSize){
			this.blockClass = this.caseSize+'_block';
			this.imageClass = this.caseSize+'_image';
		}
	}
}
</script>
