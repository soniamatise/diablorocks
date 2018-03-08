<template>
	<main-layout>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
		<article class="work__card">
			<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: cover;"></div>
			<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
		</article>
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
	let allCards = document.querySelectorAll('.work__card');
	const customClass = ['medium', 'small', 'large', 'small', 'large', 'medium'];
	let counter = 0;

	allCards.forEach(function(card){
		card.classList.add('work__card--' + customClass[counter]);
		if(counter !== customClass.length -1){
			counter++;
		} else{
			counter = 0;
		}
	});
	console.log(allCards);
},400)



</script>
