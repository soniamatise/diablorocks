<template>
	<article :class="['work__card column column'+columnNr , this._data.cardClass, caseName]" :case="caseName" :style="this._data.customStyle">
		<div :class="['work__card__image-container', 'work__card__image-container--'+ size] " :style="'background: url(' + image + ') no-repeat; background-size: 67.5vw; background-position: center;'">
		</div>
		<p class="work__card__description"><span class="work__card__description--bold">{{ client }}</span> {{ description }}</p>
	</article>
</template>

<script>
export default {
	data() {
		return {
			cardClass: null,
			deviceSize: null,
			custom: null,
			target: null,
			targetSize: null,
			customStyle: null,
			case: null,
			scrollPosition: null,
			caseCount: null,
			columnCount: null,
		}
	},
	props: ['columnNr', 'caseName', 'size', 'image', 'client', 'description', 'slug', 'color'],
	methods: {
		expandCard: function(item) {
			this._data.target = item.size;
			this._data.case = item.caseName;
			this._data.cardClass = 'expandCard';
		},
		doHover: function (){
			if (this._data.cardClass !== 'expandCard') {
				this._data.cardClass = 'card--hover';
			}
		},
		dontHover: function(){
			if (this._data.cardClass !== 'expandCard') {
				this._data.cardClass = '';
			}
		},
		checkColumns: function(viewWidth, savedWidth){
			let self = this;
			let cards = document.querySelectorAll('.work__card');
			let deviceSize;
			let targetSize;
			let cases = cards.length;
			let activeColumn;
			let columnClass;
			let columns;

			if (viewWidth < 750 && savedWidth != 750){
				savedWidth = 750;
				deviceSize = 'small';
				targetSize = 'small';

				self._data.deviceSize = deviceSize;
				self._data.targetSize = targetSize;
			} else if ((window.innerWidth < 960 && window.innerWidth > 750) && savedWidth != 960){
				// device is medium
				columns = Math.ceil(cases / 2);
				savedWidth = 960;
				deviceSize = 'medium';

				if (self.$props.size === 'small') {
					targetSize = 'medium-small';
				} else if (self.$props.size === 'medium') {
					targetSize = 'medium-medium';
				} else if (self.$props.size === 'large') {
					targetSize = 'medium-large';
				}
				self._data.deviceSize = deviceSize;
				self._data.targetSize = targetSize;

			} else {
				// device is large
				columns = Math.ceil(cases / 3);
				savedWidth = 1440;
				deviceSize = 'large';
				if (self.$props.size === 'small') {
					targetSize = 'large-small';
				} else if (self.$props.size === 'medium') {
					targetSize = 'large-medium';
				} else if (self.$props.size === 'large') {
					targetSize = 'large-large';
				}
				self._data.deviceSize = deviceSize;
				self._data.targetSize = targetSize;
			}
		}
	},
	mounted() {
		let self = this;
		let savedWidth = window.innerWidth;
		let cases = this._data.caseCount;
		window.addEventListener('resize', function(){
			self.checkColumns(window.innerWidth, savedWidth);
		});
		window.addEventListener('scroll', function(){
			self._data.scrollPosition = window.pageYOffset;
		});
		self.checkColumns(window.innerWidth, savedWidth);
	},
	watch: {
		target: function (){
			function getGrid(value){
				return (100 / 24) * value;
			}
			let custom;
			let self = this;
			let targetSize = self.targetSize;

			let scrollOffsetY = document.querySelector(`.${self.case}`).getBoundingClientRect().top;
			let offsetLeft = document.querySelector(`.${self.case}`).getBoundingClientRect().left;
			let offsetRight = document.querySelector(`.${self.case}`).getBoundingClientRect().right;

			let checkExpandSize = function(width, height){
				if(window.innerHeight > window.innerWidth) {
					//Scherm is hoger dan dat het breed is.
					console.log(width, height);
					let calcHeight = '140';
					let calcWidth = (height / width) * 140;
					let minusWidth = (100 - calcWidth) / 2;

					// if(minusWidth == 0){
					// 	minusWidth = '20';
					// }
					console.log(`--expWidth: 140vh; --expHeight: ${calcHeight}vh; --minusWidth: ${minusWidth}vh; --minusHeight: -20vh;`);

					return `--expWidth: 140vh; --expHeight: ${calcHeight}vh; --minusWidth: ${minusWidth}vh; --minusHeight: -20vh;`;
				} else {

					let calcWidth = '140';
					let calcHeight = (width / height) * 140;
					let minusHeight = (100 - calcHeight) / 2;
					console.log(`--expWidth: 140vw; --expHeight: ${calcHeight}vw; --minusWidth: -20vw; --minusHeight: ${minusHeight}vw;`);
					return `--expWidth: 140vw; --expHeight: ${calcHeight}vw; --minusWidth: -20vw; --minusHeight: ${minusHeight}vw;`;

				}

			}

			let addVariables = function (){
				if (targetSize === 'small'){
					custom = `--height: ${getGrid(20)}vw; --width: ${getGrid(20)}vw; --margin: ${getGrid(2)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px; ${checkExpandSize(20, 20)}`;
				} else if (targetSize === 'medium-small') {
					custom = `--height: ${getGrid(10)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px; ${checkExpandSize(9.25, 10)}`;
				} else if (targetSize === 'medium-medium'){
					custom = `--height: ${getGrid(12)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px; ${checkExpandSize(9.25, 12)}`;
				} else if (targetSize === 'medium-large'){
					custom = `--height: ${getGrid(14)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px; ${checkExpandSize(9.25, 14)}`;
				} else if (targetSize === 'large-small'){
					custom = `--height: ${getGrid(7)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px; ${checkExpandSize(6, 7)}`;
				} else if (targetSize === 'large-medium'){
					custom = `--height: ${getGrid(8)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px; ${checkExpandSize(6, 8)}`;
				} else if (targetSize === 'large-large'){
					custom = `--height: ${getGrid(9)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px; ${checkExpandSize(6, 9)}`;
				}
			}
			addVariables();
			this.customStyle = custom;
		}
	}
}



</script>
