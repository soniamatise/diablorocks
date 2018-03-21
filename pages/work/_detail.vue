<template>
	<main-layout class="work-detail">
		<video-player 
			image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
		/>
		<payoff-credits></payoff-credits>
		<one-column></one-column>
		<two-column></two-column>
	</main-layout>
</template>
<script>
import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		VideoPlayer
	}
}

// document.addEventListener('DOMContentLoaded',  () => {

// 	const caseTextInner = document.getElementById('case-text-inner');
// 	const playBtn = document.getElementById('next-text');
// 	const caseText = document.getElementById('case-text');

// 	function toggleWidth() {
// 		const currentWidthInner = caseTextInner.offsetWidth;
// 		const currentWidthNext = playBtn.offsetWidth;
// 		const currentWidthCase = caseText.offsetWidth;
// 		const currentWidthNextParent = playBtn.parentElement;

// 		caseTextInner.style.width = 'calc(2px + ' + currentWidthInner + 'px)';
// 		playBtn.style.width = currentWidthNext + 'px';
// 		caseText.style.width = 'calc(1px + ' + currentWidthCase + 'px)';
// 		currentWidthNextParent.style.width = currentWidthNext + 'px';
// 	}
// 	toggleWidth();
	
// 	const videos = document.getElementsByClassName('video');
// 	for(let i = 0; i < videos.length; i++)
// 	{
// 		const play = document.getElementById('case-text-inner');
// 		play.addEventListener('click', () => {
// 			videos[i].play();
// 		})
// 	}
// });
</script>
