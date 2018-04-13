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
			let addVariables = function (){
				if (targetSize === 'small'){
					custom = `--height: ${getGrid(20)}vw; --width: ${getGrid(20)}vw; --margin: ${getGrid(2)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px;`;
				} else if (targetSize === 'medium-small') {
					custom = `--height: ${getGrid(10)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px;`;
				} else if (targetSize === 'medium-medium'){
					custom = `--height: ${getGrid(12)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px;`;
				} else if (targetSize === 'medium-large'){
					custom = `--height: ${getGrid(14)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px;`;
				} else if (targetSize === 'large-small'){
					custom = `--height: ${getGrid(7)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px;`;
				} else if (targetSize === 'large-medium'){
					custom = `--height: ${getGrid(8)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px;`;
				} else if (targetSize === 'large-large'){
					custom = `--height: ${getGrid(9)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px;`;
				}
			}
			addVariables();
			this.customStyle = custom;
		}
	}
}



</script>
