
<template>
	<main-layout>
		<section class="work__grid">
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
				<p class="work__card__description"><span class="work__card__description--bold">Aangenaam Bergen op Zoom</span> Original stories from a ‘gezellige’ community.</p>
			</article>
			<article class="work__card">
				<div class="work__card__image" style="background: url('https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/06/Windsurfing-Board-Gear-Beginner-Holidays.jpg') no-repeat; background-size: 100vw; background-position: center;"></div>
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
	let allCards = document.querySelectorAll('.work__card__image');
	const customClass = ['medium', 'small', 'large', 'small', 'large', 'medium'];
	let counter = 0;

	allCards.forEach(function(card){
		card.classList.add('work__card__image--' + customClass[counter]);
		if(counter !== customClass.length -1){
			counter++;
		} else{
			counter = 0;
		}
	});
	console.log(allCards);
},400)


</script>
