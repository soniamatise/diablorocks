
<template>
	<main-layout>

		<div class="background-canvas"></div>
		<section class="work__grid">
			<article class="work__card " case="kalkhoff">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/kalkhoff.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Kalkhoff Bikes</span> When your bikes are eye-catchers, your website should be too.</p>
			</article>
			<article class="work__card" case="aangenaam">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/boz.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card" case="expeditiewadden">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/wadden.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Expeditie Wadden</span> A journey through time and space.</p>
			</article>

			<article class="work__card" case="nielson">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/nielson.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Sony Music Netherlands</span> A new digital home for Nielson, an artist that reinvented himself.</p>
			</article>
			<article class="work__card" case="ticketchaser">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/dvlm.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Sony Music Netherlands & DVLM</span> Scavenger hunts are the future of giveaway campaigns.</p>
			</article>
			<article class="work__card" case="stadsmakelaar">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/boz.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Stadsmakelaar</span>Finding the place of your dreams in Bergen op Zoom.</p>
			</article>
			<article class="work__card" case="bbbcycling">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/bbb.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">BBB Cycling</span> This is what happens when commerce and emotion collide and come together.</p>
			</article>
			<article class="work__card" case="viacom">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/mtv.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Viacom Out of Office</span> Getting your out of office as fun as actually being out of office.</p>
			</article>
			<article class="work__card" case="natwerk">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/natwerk.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Natwerk</span>I GIF this website a 10/10.</p>
			</article>
		</section>
	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout.vue'

export default {
	components: {
		MainLayout,
	},
}
document.addEventListener('DOMContentLoaded', function() {
	let allCards = document.querySelectorAll('.work__card__image-container');
	let images = document.querySelectorAll('.work__card__image');

	const background = document.querySelector('.background-canvas');
	const column1 = ['medium', 'small'];
	const column2 = ['small', 'large'];
	const column3 = ['large', 'medium'];

	let counter = 0;
	let columns;
	let column;
	let activeColumn;
	let columnClass;
	let deviceSize;
	let savedWidth = window.innerWidth;

	window.addEventListener('resize', function(){
		checkColumns();
	});
	let checkColumns = function(){
		if (window.innerWidth < 750 && savedWidth != 750){
			columns = images.length;
			savedWidth = 750;
			assignColumns(columns);
			deviceSize = 'small';
		} else if ((window.innerWidth < 960 && window.innerWidth > 750) && savedWidth != 960){
			columns = Math.ceil(images.length / 2);
			savedWidth = 960;
			assignColumns(columns);
			deviceSize = 'medium';
		} else {
			columns = images.length / 3;
			savedWidth = 1440;
			assignColumns(columns);
			deviceSize = 'large';
		}
	}
	let assignColumns = function(columns) {
		for (let i = 0; i < allCards.length; i++){
			if (i <= (columns - 1)) {
				activeColumn = column1;
				columnClass = 'column1';
			} else if (i <= (columns * 2) - 1){
				activeColumn = column2;
				columnClass = 'column2';
			} else {
				activeColumn = column3;
				columnClass = 'column3';
			}
			if(column !== activeColumn){
				column = activeColumn;
				counter = 0;
			}
			allCards[i].classList.add('work__card__image-container--' + activeColumn[counter]);
			allCards[i].parentElement.classList = ('work__card ' + columnClass);

			if(counter !== column.length -1){
				counter++;
			} else{
				counter = 0;
			}
		}
	}
	let onHover = function(){
		images.forEach(function(image){
			clickAnim(image);
			image.addEventListener('mouseover', function () {
				background.classList.add('bg-' + image.parentElement.parentElement.getAttribute('case'));
				if(!background.classList.contains('expandBackground')){
					image.parentElement.parentElement.classList.add('card--hover');
					background.classList.add('background--forward');
				}
				checkMouse(image);
			});
		});
	}
	let checkMouse = function(image){
		image.addEventListener('mouseout', function (){
			if(!background.classList.contains('expandBackground')){
				background.classList.remove('bg-' + image.parentElement.parentElement.getAttribute('case'));
			}
			background.classList.remove('background--forward');
			image.parentElement.parentElement.classList.remove('card--hover');
		});
	}
	let clickAnim = function(image){
		image.addEventListener('click', function(e) {
			if (deviceSize === 'large'){
				if (e.target.parentElement.classList.contains('work__card__image-container--small')) {
					e.target.parentElement.parentElement.style = `--height: ${getGrid(7)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
				} else if (e.target.parentElement.classList.contains('work__card__image-container--medium')) {
					e.target.parentElement.parentElement.style = `--height: ${getGrid(8)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
				} else {
					e.target.parentElement.parentElement.style = `--height: ${getGrid(9)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
				}
			} else if (deviceSize === 'medium'){
				if (e.target.parentElement.classList.contains('work__card__image-container--small')) {
					e.target.parentElement.parentElement.style = `--height: ${getGrid(10)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
				} else if (e.target.parentElement.classList.contains('work__card__image-container--medium')) {
					e.target.parentElement.parentElement.style = `--height: ${getGrid(12)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
				} else {
					e.target.parentElement.parentElement.style = `--height: ${getGrid(14)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
				}
			} else {
				e.target.parentElement.parentElement.style = `--height: ${getGrid(20)}vw; --width: ${getGrid(20)}vw; --margin: ${getGrid(2)}vw; --top: ${getGrid(3)}vw;`;
			}
			e.target.parentElement.parentElement.classList.add('expandCard');
			e.target.parentElement.classList.add('expandImage');
			background.classList.add('expandBackground');
			image.parentElement.parentElement.classList.remove('card--hover');
		});
	}
	function getGrid(value){
		return (100 / 24) * value;
	}
	onHover();
	checkColumns();
});

</script>
