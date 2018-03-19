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
						<div class="pause" id="pause">Pause</div>
						<div class="timeline">timeline</div>
						<div class="fullsize">fullsize</div>
						<div class="volume">volume</div>
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
	</main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'
export default {
	components: {
		MainLayout
	}
}

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
		const play = document.getElementById('case-text-inner');
		play.addEventListener('click', () => {
			videos[i].play();
		})
	}
});
</script>
