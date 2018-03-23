<template>
	<article :class="['work__card column', 'column'+ columnNr, this._data.cardClass]" :case="caseName" :style="[{hoi: this._data.customSmall == 'small'}]">
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
			customSmall: '',
			customMedium: '',
			customLarge: '',
			mobile: ''
		}
	},
	props: ['columnNr', 'caseName', 'size', 'image', 'client', 'description', 'slug'],
	methods: {
		expandCard: function(item) {
			this._data.cardClass = 'expandCard';
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
			console.log(savedWidth);
			if (window.innerWidth < 750 && savedWidth != 750){
				columns = images.length;
				savedWidth = 750;
				// assignColumns(columns);
				addVariables();
				deviceSize = 'small';
				self._data.deviceSize = deviceSize;
			} else if ((window.innerWidth < 960 && window.innerWidth > 750) && savedWidth != 960){
				columns = Math.ceil(images.length / 2);
				savedWidth = 960;
				// assignColumns(columns);
				addVariables();
				deviceSize = 'medium';
				self._data.deviceSize = deviceSize;
			} else {
				columns = images.length / 3;
				savedWidth = 1440;
				// assignColumns(columns);
				addVariables();
				deviceSize = 'large';
				self._data.deviceSize = deviceSize;
			}
		}
		function getGrid(value){
			return (100 / 24) * value;
		}

		let addVariables = function(){
			if (deviceSize === 'large'){
				console.log('large');
				if (self.$props.size === 'small') {
					self._data.custom = `--height: ${getGrid(7)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
				} else if (self.$props.size == 'medium') {
					self._data.custom = `--height: ${getGrid(8)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
				} else {
					self._data.custom = `--height: ${getGrid(9)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
				}
			} else if (deviceSize === 'medium'){
				console.log('medium');
				if (self.$props.size == 'small') {
					self._data.custom = `--height: ${getGrid(10)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
				} else if (self.$props.size == 'medium') {
					self._data.custom = `--height: ${getGrid(12)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
				} else {
					self._data.custom = `--height: ${getGrid(14)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
				}
			} else {
				console.log('small');
				self._data.custom = `--height: ${getGrid(20)}vw; --width: ${getGrid(20)}vw; --margin: ${getGrid(2)}vw; --top: ${getGrid(3)}vw;`;
			}
		}

		checkColumns();
	}
}



</script>
