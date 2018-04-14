<template>
	<div class="swiper-slide">
		<div class="content_container" ref="content_container_active" v-bind:class="blockClass">
			<!-- <div class="content name">
				<p>{{ caseName }}</p>
			</div> -->
			<div class="image_holder block" ref="image_holder_active" v-bind:class="imageClass" @mouseover="bgOfCase()" @mouseleave="bgToNormal()">
				<div class="img_full">
					 <!-- data-swiper-parallax="750" -->
					<img :src="caseImage" ref="imgActive" />
				</div>
			</div>

			<div class="shadow" v-bind:class="imageClass"></div>
			<!-- <div class="content description">
				<p :data-description="caseDescription"></p>
			</div>
			<div class="content_for_medium">
				<p><span>{{ caseName }}</span>{{ caseDescription }}</p>
			</div> -->
		</div>

		<!-- <main class="center">
			<div class="block portrait"></div>
			<div class="block square"></div>
			<div class="block landscape"></div>
		</main> -->

	</div>
</template>

<script>

export default {
	data() {
		return {
			Velocity: this.$velocity,
			blockClass: 'square_block',
			imageClass: 'square_image'
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

				let shadowChange = this.$parent.$refs.homeSlider;
				shadowChange.classList.add('changeShadow');

	    	let image_holder = document.querySelectorAll('.image_holder');
	    	const getGrid = window.innerWidth / 24;

			this.$emit('onEnter', this.caseColor);

			var self = this;

			image_holder.forEach(function(image_holder){
				image_holder.style = `--caseColor: ${self.caseColor}`
			})
			// this.Velocity(image_holder_active, { transform: 'rotate(-15deg)' }, 1500, [180, 9]);
			// this.Velocity(imgActive, { transform: 'rotate(15deg)' }, 1500, [180, 9]);
		},
		bgToNormal: function () {
			const bg = this.$parent.$refs.homeSlider;
			const homeCover = this.$parent.$refs.homeCover;
			const typestroke = this.$parent.$refs.typestroke;
			const image_holder_active = this.$refs.image_holder_active;
			const imgActive = this.$refs.imgActive;

			let shadowChange = this.$parent.$refs.homeSlider;
			shadowChange.classList.remove('changeShadow');

			let image_holder = document.querySelectorAll('.image_holder');

			this.$emit('onLeave');

			image_holder.forEach(function(image_holder){
			image_holder.style = `--caseColor: black`
			})
			// this.Velocity(image_holder_active, { transform: 'rotate(0deg)' }, 1500, [180, 9]);
			// this.Velocity(imgActive, { transform: 'rotate(0deg)' }, 1500, [180, 9]);
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
