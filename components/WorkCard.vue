<template>


	<article :class="'work__card column' + columnNr + ' ' + expand" :case="caseName" :style="custom">
		<!-- <nuxt-link :to="'/work/' + slug "> -->
			<div :class="'work__card__image-container work__card__image-container--'+ size ">
				<img class="work__card__image" :src="image">
			</div>
		<!-- </nuxt-link> -->
		<p class="work__card__description"><span class="work__card__description--bold">{{ client }}</span> {{ description }}</p>
	</article>
</template>

<script>
export default {
	props: ['columnNr', 'caseName', 'size', 'image', 'client', 'description', 'slug', 'custom', 'expand'],
	methods: {
		expandCard: function(item) {
			console.log('click')
			console.log(item)
		},
    clickAnim: function () {
    	console.log(this._self);
			// if (deviceSize === 'large'){
			// 	if (e.target.parentElement.classList.contains('work__card__image-container--small')) {
			// 		e.target.parentElement.parentElement.style = `--height: ${getGrid(7)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
			// 	} else if (e.target.parentElement.classList.contains('work__card__image-container--medium')) {
			// 		e.target.parentElement.parentElement.style = `--height: ${getGrid(8)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
			// 	} else {
			// 		e.target.parentElement.parentElement.style = `--height: ${getGrid(9)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
			// 	}
			// } else if (deviceSize === 'medium'){
			// 	if (e.target.parentElement.classList.contains('work__card__image-container--small')) {
			// 		e.target.parentElement.parentElement.style = `--height: ${getGrid(10)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
			// 	} else if (e.target.parentElement.classList.contains('work__card__image-container--medium')) {
			// 		e.target.parentElement.parentElement.style = `--height: ${getGrid(12)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
			// 	} else {
					// e.target.parentElement.parentElement.style = `--height: ${getGrid(14)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
				// }
			// } else {
			// document.querySelectorAll('article[case=' + this.caseName +']') = `--height: ${getGrid(20)}vw; --width: ${getGrid(20)}vw; --margin: ${getGrid(2)}vw; --top: ${getGrid(3)}vw;`;
			// }
			// document.querySelectorAll('article[case=' + this.caseName +']').classList.add('expandCard');
			// e.target.parentElement.classList.add('expandImage');
			// document.querySelector('background').classList.add('expandBackground');
			// image.parentElement.parentElement.classList.remove('card--hover');
			function getGrid(value){
				return (100 / 24) * value;
			}
    },
		onHover: function (){
			// console.log(this);
		},
  }
}



</script>
