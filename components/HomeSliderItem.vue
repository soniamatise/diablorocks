<template>
	<div class="swiper-slide">
		<div class="contentHolder" ref="contentHolderActive" v-bind:class="caseImageHeight" @mouseover="bgOfCase()" @mouseleave="bgToNormal()" v-on:click="navigateToWork()">
			<div class="rotator" data-swiper-parallax="750">
				<img :src="caseImage" ref="imgActive" />
			</div>
		</div>

		<div class="content name">
			<p><b>{{ caseName }}</b></p>
		</div>
		<div class="content description">
			<p>{{ caseDescription }}</p>
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
	props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl', 'caseColor', 'caseImageHeight', 'slug'],
	methods: {
		bgOfCase: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	const homeCover = this.$parent.$refs.homeCover;
	    	const typestroke = this.$parent.$refs.typestroke;
	    	const contentHolderActive = this.$refs.contentHolderActive;
	    	const imgActive = this.$refs.imgActive;
	    	let contentHolders = document.querySelectorAll('.contentHolder');
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
			contentHolders.forEach(function(contentHolder){
				contentHolder.style = `--caseColor: ${self.slug}`
			})
			this.Velocity(contentHolderActive, { transform: 'rotate(-15deg)' }, 600, [180, 16]);
			this.Velocity(imgActive, { transform: 'rotate(15deg)' }, 600, [180, 16]);
	    },
	    bgToNormal: function () {
	    	const bg = this.$parent.$refs.homeSlider;
	    	const homeCover = this.$parent.$refs.homeCover;
	    	const typestroke = this.$parent.$refs.typestroke;
	    	const contentHolderActive = this.$refs.contentHolderActive;
	    	const imgActive = this.$refs.imgActive;
	    	let contentHolders = document.querySelectorAll('.contentHolder');
	    	let bullets = document.querySelectorAll('.bullet');
			bg.classList.remove(`bg-${this.slug}`);
			bg.classList.add('bg-black');
			// homeCover.classList.add('bg-black');
			// typestroke.classList.add('bg-black');
			bullets.forEach(function(bullet){
				bullet.classList = 'bullet';
				bullet.classList.add('bg-black');
			})

			contentHolders.forEach(function(contentHolder){
				contentHolder.style = `--caseColor: black`
			})
			this.Velocity(contentHolderActive, { transform: 'rotate(0deg)' }, 600, [180, 16]);
			this.Velocity(imgActive, { transform: 'rotate(0deg)' }, 600, [180, 16]);
	    },
			navigateToWork: function(){
				var self = this;

				self.$router.push(this.slug);
			}
	}
}
</script>
