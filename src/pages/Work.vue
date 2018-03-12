
<template>
	<main-layout>
		<div class="background-canvas">

		</div>
		<section class="work__grid">
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test2.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test2.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test2.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="image-container">
					<img class="work__card__image" src="/static/img/test.jpg">
				</div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
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
	let allCards = document.querySelectorAll('.image-container');
	let images = document.querySelectorAll('.work__card__image');
	const customClass = ['medium', 'small', 'large', 'small', 'large', 'medium'];
	let counter = 0;
	const background = document.querySelector('.background-canvas');

	allCards.forEach(function(card){
		card.classList.add('work__card__image--' + customClass[counter]);
		if(counter !== customClass.length -1){
			counter++;
		} else{
			counter = 0;
		}
	});
	images.forEach(function(image){
		let color = getAverageRGB(image);
		image.addEventListener('mouseover', function () {
			background.style.background = 'rgb(' + color.r + ',' + color.g + ',' + color.b +')';
			background.classList.add('whoohoo');
			image.parentElement.parentElement.classList.add('whoo');
			checkMouse(image);
		});
		let checkMouse = function(image){
			image.addEventListener('mouseout', function (){
				background.style.background = 'none';
				background.classList.remove('whoohoo');
				image.parentElement.parentElement.classList.remove('whoo');
			});
		}

	});
},400)





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

</script>
