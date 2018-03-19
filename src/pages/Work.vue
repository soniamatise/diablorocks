<template>
	<main-layout class="work">
		<h3>Hoi dit is work</h3>
		<section class="video-container">
			<div class="row center">
				<div class="column column-24">
					<video class="video" width="100%" height="100%" controls>
						<source src="../assets/videos/demo.mp4" type="video/mp4">
					</video>
					<div class="controls">
						<div class="pause" id="pause"></div>
						<div class="timeline"></div>
						<div class="fullsize"></div>
						<div class="volume"></div>
					</div>
					<div class="textCenter play" id="play">
						<h2><b>Play</b></h2>
					</div>
				</div>
			</div>
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

// let video = document.querySelectorAll('.video');

document.addEventListener('DOMContentLoaded',  () => {

	const caseTextInner = document.getElementById('case-text-inner');
	const playBtn = document.getElementById('next-text');
	const caseText = document.getElementById('case-text');

	function toggleWidth() {
		const currentWidthInner = caseTextInner.offsetWidth;
		const currentWidthNext = playBtn.offsetWidth;
		const currentWidthCase = caseText.offsetWidth;
		const currentWidthNextParent = playBtn.parentElement;

		caseTextInner.style.width = 'calc(2px + ' + currentWidthInner + 'px)';
		playBtn.style.width = currentWidthNext + 'px';
		caseText.style.width = 'calc(1px + ' + currentWidthCase + 'px)';
		currentWidthNextParent.style.width = currentWidthNext + 'px';
	}
	toggleWidth();







	const videos = document.getElementsByClassName('video');
	for(let i = 0; i < videos.length; i++)
	{
		const play = document.getElementById('play');
		play.addEventListener('click', () => {
			videos[i].play();
		})
	}
});
</script>
