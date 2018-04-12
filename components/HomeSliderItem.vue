<template>
	<div class="swiper-slide">
		<div class="content_container" ref="content_container_active" v-bind:class="case_content_size">
			<div class="content name">
				<p>{{ caseName }}</p>
			</div>
			<div class="image_holder" ref="image_holder_active" v-bind:class="case_image_size" @mouseover="bgOfCase()" @mouseleave="bgToNormal()">
				<div class="rotator" data-swiper-parallax="750">
					<img :src="caseImage" ref="imgActive" />
				</div>
			</div>
			<div class="content description">
				<p>{{ caseDescription }}</p>
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
		}
	},
	props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl', 'caseColor', 'case_image_size', 'case_content_size', 'slug'],
	methods: {
		bgOfCase: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	const homeCover = this.$parent.$refs.homeCover;
	    	const typestroke = this.$parent.$refs.typestroke;
	    	const image_holder_active = this.$refs.image_holder_active;
	    	const imgActive = this.$refs.imgActive;
	    	let image_holder = document.querySelectorAll('.image_holder');
	    	let bullets = document.querySelectorAll('.bullet');
	    	const getGrid = window.innerWidth / 24;
				bg.classList.remove('bg-black');

			bg.classList.add(`bg-${this.slug}`);

			// wat doen we hier mee?????
			// typestroke.classList.add(`bg-${this.slug}`);
			// homeCover.classList.add(`bg-${this.slug}`);

			var self = this;
				bullets.forEach(function(bullet){
				bullet.classList = 'bullet';
				bullet.classList.add(`bg-${self.slug}`);
			});
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
	    	let bullets = document.querySelectorAll('.bullet');
			bg.classList.remove(`bg-${this.slug}`);
			bg.classList.add('bg-black');
			// homeCover.classList.add('bg-black');
			// typestroke.classList.add('bg-black');
			bullets.forEach(function(bullet){
				bullet.classList = 'bullet';
				bullet.classList.add('bg-black');
			})

			image_holder.forEach(function(image_holder){
				image_holder.style = `--caseColor: black`
			})
			this.Velocity(image_holder_active, { transform: 'rotate(0deg)' }, 600, [180, 16]);
			this.Velocity(imgActive, { transform: 'rotate(0deg)' }, 600, [180, 16]);
	    },
	}
}
</script>
