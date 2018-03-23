<template>
	<article :class="['work__card column', 'column'+ columnNr, this._data.cardClass]" :case="caseName" :style="this._data.customStyle">
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
	data() {
		return {
			cardClass: '',
			deviceSize: '',
			custom: '',
			target: '',
			targetSize: '',
			customStyle: ''
		}
	},
	props: ['columnNr', 'caseName', 'size', 'image', 'client', 'description', 'slug'],
	methods: {
		expandCard: function(item) {
			this._data.cardClass = 'expandCard';
			this._data.target = item;
		},
		doHover: function (item){
			if (this._data.cardClass !== 'expandCard') {
				this._data.cardClass = 'card--hover';
			}
		},
		dontHover: function(){
			if (this._data.cardClass !== 'expandCard') {
				this._data.cardClass = '';
			}
		}
	},
	mounted() {
		let savedWidth = window.innerWidth;
		let self = this;
		let deviceSize;
		let targetSize;
		let counter = 0;
		// TODO: replace images with dynamically loaded items from backend
		let images = 9;
		let columns;
		let activeColumn;
		let columnClass;

		window.addEventListener('resize', function(){
			checkColumns();
		});

		let checkColumns = function(){
			if (window.innerWidth < 750 && savedWidth != 750){
				columns = images.length;
				savedWidth = 750;
				// assignColumns(columns);
				deviceSize = 'small';
				targetSize = 'small';
				self._data.deviceSize = deviceSize;
				self._data.targetSize = targetSize;
				// addVariables();
			} else if ((window.innerWidth < 960 && window.innerWidth > 750) && savedWidth != 960){
				columns = Math.ceil(images.length / 2);
				savedWidth = 960;
				deviceSize = 'medium';
				// assignColumns(columns);
				if (self.$props.size === 'small') {
					targetSize = 'medium-small';
				} else if (self.$props.size === 'medium') {
					targetSize = 'medium-medium';
				} else if (self.$props.size === 'large') {
					targetSize = 'medium-large';
				}
				self._data.deviceSize = deviceSize;
				self._data.targetSize = targetSize;
				// addVariables();
			} else {
				columns = images.length / 3;
				savedWidth = 1440;
				// assignColumns(columns);
				deviceSize = 'large';
				self._data.deviceSize = deviceSize;
				if (self.$props.size === 'small') {
					targetSize = 'large-small';
				} else if (self.$props.size === 'medium') {
					targetSize = 'large-medium';
				} else if (self.$props.size === 'large') {
					targetSize = 'large-large';
				}
				self._data.targetSize = targetSize;
			}
		}
		checkColumns();
	},
	watch: {
		target: function (){
			console.log('changed');
			function getGrid(value){
				return (100 / 24) * value;
			}
			let custom;
			let self = this;
			let targetSize = self.targetSize;
			console.log(targetSize);

			let addVariables = function (){
				console.log(targetSize);
				if (targetSize === 'small'){
					custom = `--height: ${getGrid(20)}vw; --width: ${getGrid(20)}vw; --margin: ${getGrid(2)}vw;`;
				} else if (targetSize === 'medium-small') {
					custom = `--height: ${getGrid(10)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw;`;
				} else if (targetSize === 'medium-medium'){
					custom = `--height: ${getGrid(12)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw;`;
				} else if (targetSize === 'medium-large'){
					custom = `--height: ${getGrid(14)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw;`;
				} else if (targetSize === 'large-small'){
					custom = `--height: ${getGrid(7)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw;`
				} else if (targetSize === 'large-medium'){
					custom = `--height: ${getGrid(8)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw;`
				} else if (targetSize === 'large-large'){
					custom = `--height: ${getGrid(9)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw;`
				}
			}
			addVariables();
			this.customStyle = custom;
		}
	}
}



</script>
