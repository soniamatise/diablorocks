
<template>
	<main-layout>
		<div class="background-canvas">

		</div>
		<section class="work__grid">
			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/kalkhoff.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Kalkhoff Bikes</span> When your bikes are eye-catchers, your website should be too.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/boz.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/wadden.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Expeditie Wadden</span> A journey through time and space.</p>
			</article>

			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/nielson.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Sony Music Netherlands</span> A new digital home for Nielson, an artist that reinvented himself.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/dvlm.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Sony Music Netherlands & DVLM</span> Scavenger hunts are the future of giveaway campaigns.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/boz.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Stadsmakelaar</span>Finding the place of your dreams in Bergen op Zoom.</p>
			</article>

			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/bbb.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">BBB Cycling</span> This is what happens when commerce and emotion collide and come together.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/mtv.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Viacom Out of Office</span> Getting your out of office as fun as actually being out of office.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image-container">
					<img class="work__card__image" src="/static/img/natwerk.png">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Natwerk</span>I GIF this website a 10/10.</p>
			</article>
		</section>

	</main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'
export default {
	components: {
		MainLayout
	}
}
setTimeout(function(){
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
	let savedWidth = window.innerWidth;

	window.addEventListener('resize', function(){
		checkColumns();
	});



	let checkColumns = function(){
		if (window.innerWidth < 375 && savedWidth != 375){
			columns = images.length;
			savedWidth = 375;
			assignColumns(columns)
		} else if ((window.innerWidth < 960 && window.innerWidth > 375) && savedWidth != 960){
			columns = Math.ceil(images.length / 2);
			savedWidth = 960;
			assignColumns(columns)
		} else {
			columns = images.length / 3;
			savedWidth = 1440;
			assignColumns(columns)
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
			allCards[i].classList.add('work__card__image--' + activeColumn[counter]);
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
			let color = getAverageRGB(image);
			image.addEventListener('mouseover', function () {
				background.style.background = 'rgb(' + color.r + ',' + color.g + ',' + color.b +')';
				background.classList.add('background--forward');
				image.parentElement.parentElement.classList.add('card--hover');
				checkMouse(image);
			});
		});
	}
	let checkMouse = function(image){
		image.addEventListener('mouseout', function (){
			if(!background.classList.contains('expandBackground')){
				background.style.background = 'none';
			}
			background.classList.remove('background--forward');
			image.parentElement.parentElement.classList.remove('card--hover');
		});
	}

	let clickAnim = function(image){
		image.addEventListener('click', function(e) {
			e.target.parentElement.parentElement.classList.add('expandCard');
			e.target.parentElement.classList.add('expandImage');
			background.classList.add('expandBackground');
			background.style.background = 'rgb(' + color.r + ',' + color.g + ',' + color.b +')';
		});
	}

	function getAverageRGB(imgEl) {
		var blockSize = 5, // only visit every 5 pixels
			defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
			canvas = document.createElement('canvas'),
			context = canvas.getContext && canvas.getContext('2d'),
			data, width, height,
			i = -4,
			length,
			rgb = {r:0,g:0,b:0},
			count = 0;

		if (!context) {
			return defaultRGB;
		}

		height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
		width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

		context.drawImage(imgEl, 0, 0);

		try {
			data = context.getImageData(0, 0, width, height);
		} catch(e) {
			/* security error, img on diff domain */
			return defaultRGB;
		}

		length = data.data.length;

		while ( (i += blockSize * 4) < length ) {
			++count;
			rgb.r += data.data[i];
			rgb.g += data.data[i+1];
			rgb.b += data.data[i+2];
		}

		// ~~ used to floor values
		rgb.r = ~~(rgb.r/count);
		rgb.g = ~~(rgb.g/count);
		rgb.b = ~~(rgb.b/count);

		return rgb;
	}
	onHover();
	checkColumns();
},400)

</script>
