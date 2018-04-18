<template>
	<article :class="['work__card column column'+columnNr , this._data.cardClass, caseName]" :case="caseName" :style="this._data.customStyle">
		<div :class="['work__card__image-container', 'work__card__image-container--'+ size] " :style="'background: url(' + image + ') no-repeat; background-size: 67.5vw; background-position: center;'">
		</div>
		<p class="work__card__description"><span class="work__card__description--bold">{{ client }}</span> {{ description }}</p>
	</article>
</template>

<script>
export default {
	head() {
    return {
      bodyAttrs: {
        class: this.expanded ? 'scroll-disable' : ''
      }
    };
  },
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
			expanded: false
		}
	},
	props: ['columnNr', 'caseName', 'size', 'image', 'client', 'description', 'slug', 'color'],
	methods: {
		expandCard: function(item) {
			let self = this;
			self._data.target = item.size;
			self._data.case = item.caseName;
			self._data.cardClass = 'work__card--move';
			self._data.expanded = true;

			setTimeout(function(){
				self._data.cardClass = 'work__card--move work__card--expand';
			}, 1300)
		},
		doHover: function (){
			if (!this._data.expanded) {
				this._data.cardClass = 'work__card--hover';
			}
		},
		dontHover: function(){
			if (!this._data.expanded) {
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
			let heightEl;
			let widthEl;
			let marginEl;
			let marginTop;
			let backgroundPosX;
			let scrollOffsetY = document.querySelector(`.${self.case}`).getBoundingClientRect().top;
			let offsetLeft = document.querySelector(`.${self.case}`).getBoundingClientRect().left;
			let offsetRight = document.querySelector(`.${self.case}`).getBoundingClientRect().right;

			if (self.columnNr === 1){
				marginTop = `${getGrid(.8)}vw`
			} else if (self.columnNr === 2) {
				marginTop = `${getGrid(1.5)}vw`
			} else {
				marginTop = 0;
			}

			let checkExpandSize = function(width, height){
				if(window.innerHeight > window.innerWidth) {
					let calcHeight = '140';
					let calcWidth = (height / width) * 140;
					let minusWidth = (100 - calcWidth) / 2;
					return `--expWidth: 140vh; --expHeight: ${calcHeight}vh; --minusWidth: ${minusWidth}vh; --minusHeight: -20vh;`;
				} else {
					let calcWidth = '140';
					let calcHeight = (width / height) * 140;
					let minusHeight = (100 - calcHeight) / 2;
					return `--expWidth: 140vw; --expHeight: ${calcHeight}vw; --minusWidth: -20vw; --minusHeight: ${minusHeight}vw;`;
				}
			}
			let checkBgPosition = function(width, height){
				let backgroundPosY = `calc(${scrollOffsetY / 2}px + 50%)`;
				if (self._data.deviceSize === 'small') {
					// Image on mobile
					backgroundPosX = ' 50%';

				} else if(self._data.deviceSize === 'medium') {
					if (offsetLeft > (window.innerWidth / 2)){
						// Image on the right of tablet size screen, two columns
						let space = (width / 2) + 1;
						backgroundPosX = ` calc(50% + ${getGrid(space)}vw)`;
					} else {
						// Image on the left of tablet size screen, two columns
						let space = (width / 2) + 1;
						backgroundPosX = ` calc(50% - ${getGrid(space)}vw)`;
					}

				} else {
					if (offsetLeft > (window.innerWidth / 2)){
						// Image on the right of three column screen
						let space = width + 1;
						backgroundPosX = ` calc(50% + ${getGrid(space)}vw)`;

					} else if (offsetLeft < (window.innerWidth / 2) && offsetRight > (window.innerWidth / 2)) {
						// Center image
						backgroundPosX = ` 50%`;
					} else {
						// Image on the left of three column screen
						let space = width + 1;
						backgroundPosX = ` calc(50% - ${getGrid(space)}vw)`;
					}
				}
				return `--posX: ${backgroundPosX}; --posY: ${backgroundPosY}`;
			}

			let addVariables = function(heightEl, widthEl, marginEl){
				// Ugly way to position next element
				let topEl = document.querySelector(`.${self.caseName}`).nextSibling;
				if (topEl.tagName == 'ARTICLE'){.nextSibling
					document.querySelector(`.${self.caseName}`).nextSibling.style.marginTop = `${topEl.getBoundingClientRect().top - scrollOffsetY}px`;
				}
				// Add css variables to clicked element
				custom = `--height: ${getGrid(heightEl)}vw; --width: ${getGrid(widthEl)}vw; --margin: ${getGrid(marginEl)}vw; --offsetY: ${scrollOffsetY}px; --offsetLeft: ${offsetLeft}px; --offsetRight: ${offsetRight}px; ${checkExpandSize(widthEl, heightEl)}; ${checkBgPosition(widthEl, heightEl)};`;
			}

			let getWidth = function(){
				if (targetSize === 'small'){
					heightEl = 20;
					widthEl = 20;
					marginEl = 2;
					addVariables(heightEl, widthEl, marginEl);
				} else if (targetSize === 'medium-small') {
					heightEl = 10;
					widthEl = 9.25;
					marginEl = 7.375;
					addVariables(heightEl, widthEl, marginEl);
				} else if (targetSize === 'medium-medium'){
					heightEl = 12;
					widthEl = 9.25;
					marginEl = 7.375;
					addVariables(heightEl, widthEl, marginEl);
				} else if (targetSize === 'medium-large'){
					heightEl = 14;
					widthEl = 9.25;
					marginEl = 7.375;
					addVariables(heightEl, widthEl, marginEl);
				} else if (targetSize === 'large-small'){
					heightEl = 7;
					widthEl = 6;
					marginEl = 9;
					addVariables(heightEl, widthEl, marginEl);
				} else if (targetSize === 'large-medium'){
					heightEl = 8;
					widthEl = 6;
					marginEl = 9;
					addVariables(heightEl, widthEl, marginEl);
				} else if (targetSize === 'large-large'){
					heightEl = 9;
					widthEl = 6;
					marginEl = 9;
					addVariables(heightEl, widthEl, marginEl);
				}
			}();

			this.customStyle = custom;
		}
	}
}



</script>
