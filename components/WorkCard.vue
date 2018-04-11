<template>
	<article :class="['work__card column' , this._data.cardClass, caseName]" :case="caseName" :style="this._data.customStyle">
		<!-- <nuxt-link :to="'/work/' + slug "> -->
		<div class="work__card__image-container " :style="'background: url(' + image + ') no-repeat; background-size: 67.5vw; background-position: center;'">
		</div>
		<!-- </nuxt-link> -->
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
			column1: [],
			column2: [],
			column3: [],
			class1: ['medium', 'small'],
			class2: ['small', 'large'],
			class3: ['large', 'medium']
		}
	},
	props: [ 'caseName', 'image', 'client', 'description', 'slug', 'color'],
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
		checkCaseCount: function(caseCount){
			this._data.caseCount = caseCount;
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

			let assignColumns = function(columns){
				for (let i = 0; i < cases; i++){
					if(i <= (columns - 1) ) {
						cards[i].classList.add('column1');
						self._data.column1.push(cards[i]);
					} else if (i > (columns - 1) && i <= ((columns * 2) - 1)) {
						cards[i].classList.add('column2');
						self._data.column2.push(cards[i]);
					} else{
						cards[i].classList.add('column3');
						self._data.column3.push(cards[i]);
					}
					if (i == (cases - 1)) {
						addSizes();
					}
				}
			}

			let addSizes = function(){
				console.log(self._data.column1);
				let column1 = self._data.column1;
				let column2 = self._data.column2;
				let column3 = self._data.column3;

				if(column3 != ''){
					column1.forEach(function(card){
						card.
					})

				}



			}

			if (viewWidth < 750 && savedWidth != 750){
				savedWidth = 750;
				deviceSize = 'small';
				targetSize = 'small';

				self._data.deviceSize = deviceSize;
				self._data.targetSize = targetSize;
				self._data.columnCount = 1;
				assignColumns(1);
			} else if ((window.innerWidth < 960 && window.innerWidth > 750) && savedWidth != 960){
				// device is medium
				columns = Math.ceil(cases / 2);
				savedWidth = 960;
				deviceSize = 'medium';

				// if (self.$props.size === 'small') {
				// 	targetSize = 'medium-small';
				// } else if (self.$props.size === 'medium') {
				// 	targetSize = 'medium-medium';
				// } else if (self.$props.size === 'large') {
				// 	targetSize = 'medium-large';
				// }
				self._data.deviceSize = deviceSize;
				self._data.targetSize = targetSize;
				self._data.columnCount = columns;
				assignColumns(columns);

			} else {
				// device is large
				columns = Math.ceil(cases / 3);
				savedWidth = 1440;
				deviceSize = 'large';
				// if (self.$props.size === 'small') {
				// 	targetSize = 'large-small';
				// } else if (self.$props.size === 'medium') {
				// 	targetSize = 'large-medium';
				// } else if (self.$props.size === 'large') {
				// 	targetSize = 'large-large';
				// }
				self._data.deviceSize = deviceSize;
				self._data.targetSize = targetSize;
				self._data.columnCount = columns;
				assignColumns(columns);
			}
		}
	},
	mounted() {
		let self = this;
		let savedWidth = window.innerWidth;
		let cases = this._data.caseCount;
		window.addEventListener('resize', function(){
			this.checkColumns(window.innerWidth, savedWidth);
		});
		window.addEventListener('scroll', function(){
			self._data.scrollPosition = window.pageYOffset;
		});
		this.checkColumns(window.innerWidth, savedWidth);
		// work__card__image-container--
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
