<template>
	<main-layout class="work-detail">
		<section class="video-container" style="background-image: url('/_nuxt/img/fullVideo.04fb794.png');">
			<div class="row center">
				<div class="column column-24">
				<!-- 	<video class="video" width="100%" height="100%" controls>
						<source src="../assets/videos/demo.mp4" type="video/mp4">
					</video> -->
					<div class="control-pannel">
						<div class="row center">
							<div class="column column-16 controls">
								<div class="control pause" id="pause">
									<img src="../assets/images/pause.svg">
								</div>
								<div class="control timeline">
									<div class="timeline__drag"></div>
									<span class="timeline__progress"></span>
								</div>
								<div class="control fullsize">
									<img src="../assets/images/fullscreen.svg">
								</div>
								<div class="control volume">
									<img src="../assets/images/sound.svg">
								</div>
							</div>
						</div>
					</div>
					<div id="case-text-inner" class="textCenter play case-text-inner">
						<div class="next-text">
							<div id="next-text">
								<p> &nbsp;—&nbsp;BBB Cycling</p>
							</div>
						</div>
						<div id="case-text" class="case-text"><p>Play</p></div>
					</div>
				</div>
			</div>
		</section>
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
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout
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
