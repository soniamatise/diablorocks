<template>

	<!-- swiper slide -->
	<div class="swiper-slide" ref="checkActive">

		<!-- content container -->
		<div class="content_container" ref="content_container_active" v-bind:class="blockClass">

			<!-- case name -->
			<div class="content name">
				<p>{{ caseName }}</p>
			</div>
			<!-- end case name -->

			<!-- image -->
			<div class="image_holder block" ref="image_holder_active" v-bind:class="imageClass" @click="bgClick()" @mouseover="bgOfCase()" @mouseleave="bgToNormal()">
				<div class="image_position">
					<div class="image_actual" data-swiper-parallax="50%">
						<img :src="caseImage" ref="imgActive" /> 
					</div>
				</div>
			</div>
			<!-- end image -->

			<!-- case description -->
			<div class="content description">
				<p>{{ caseDescription }}</p>
			</div>
			<div class="content_for_medium">
				<p><span>{{ caseName }}</span>{{ caseDescription }}</p>
			</div>
			<!-- end case description -->

			<!-- shadow -->
			<div class="shadow" v-bind:class="imageClass"></div>
			<!-- end shadow -->

		</div>
		<!-- end content container -->

	</div>
	<!-- end swiper slide -->

</template>

<script>

export default {
	data() {
		return {
			blockClass: 'square_block',
			imageClass: 'square_image',
		}
	},
	props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl', 'caseColor', 'caseSize', 'slug'],
	methods: {
		bgClick: function () {
			const checkActive = this.$refs.checkActive;
			console.log(checkActive);

			if(checkActive.classList.contains('swiper-slide-active')){

				// noSlider
				this.$parent.mySwiper.allowSlideNext = false;
				this.$parent.mySwiper.allowSlidePrev = false;

				// get the right element
				let clickUp = this.$refs.image_holder_active;
				clickUp.classList.add('click_up');

				// get rid of non elements
				document.querySelector('.nav__list').classList.add('fade-out');
				document.querySelector('.typeWriterTitle').classList.add('fade-out');
				document.querySelector('.swiper-pagination').classList.add('change-z');

				// remove others items
				let image_holders = document.querySelectorAll('.image_holder');

				image_holders.forEach(function(image_holder){
					image_holder.classList.add('fade-out');
				});

				// remove content in other items
				let content_containers = document.querySelectorAll('.content_container');

				content_containers.forEach(function(content_container){
					content_container.classList.add('fade-out');
				});

				// keep current content_holder
				let keepContent = this.$refs.content_container_active;
				keepContent.classList.add('click_up');
			}
		},
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
			});

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
