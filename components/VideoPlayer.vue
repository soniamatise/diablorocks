<template>
	<section class="video-container" :style="{ 'background-image': 'url(' + image + ')' }">
		<div class="row center">
			<div class="column column-24">
				<video class="video hide" ref="video" width="100%" height="100%" controls preload>
					<source src="../assets/videos/demo.mp4" type="video/mp4">
				</video>
				<div class="control-pannel hide" ref="controls">
					<div class="row center">
						<div class="column column-16 controls">
							<div class="control pause" ref="playPause" @click="PausePlayVideo()">
								<img src="~/assets/images/pause.svg">
							</div>
							<div class="control timeline">
								<div class="timeline__drag"></div>
								<span class="timeline__progress" value="0"></span>
							</div>
							<div class="control fullsize" @click="makeFullScreen()">
								<img src="~/assets/images/fullscreen.svg">
							</div>
							<div class="control volume" ref="mute" @click="muteVideo()">
								<img src="~/assets/images/sound.svg">
							</div>
						</div>
					</div>
				</div>
				<div class="video-info" ref="videoInfo" @click="showPlayVideo()">
					<div id="case-text-inner" class="textCenter play case-text-inner">
						<div class="next-text">
							<div id="next-text">
								<h2> &nbsp;—&nbsp;BBB Cycling</h2>
							</div>
						</div>
						<div id="case-text" class="case-text"><h2>Play</h2></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['caseName', 'video', 'image'],
	mounted: () => {
	    const caseTextInner = document.getElementById('case-text-inner');
		const nextText = document.getElementById('next-text');
		const caseText = document.getElementById('case-text');
		const caseImage = document.getElementById('case-image');

		function toggleWidth() {
			const currentWidthInner = caseTextInner.offsetWidth;
			const currentWidthNext = nextText.offsetWidth;
			const currentWidthCase = caseText.offsetWidth;
			const currentWidthNextParent = nextText.parentElement;

			caseTextInner.style.width = 'calc(2px + ' + currentWidthInner + 'px)';
			nextText.style.width = currentWidthNext + 'px';
			caseText.style.width = 'calc(1px + ' + currentWidthCase + 'px)';
			currentWidthNextParent.style.width = currentWidthNext + 'px';
		}
		toggleWidth();
	},
	methods: {
		showPlayVideo: function () {
			let video = this.$refs.video;
			let videoInformation = this.$refs.videoInfo;
			let videoControls = this.$refs.controls;

			videoControls.style.opacity = 0;
			videoControls.style.transition = 'opacity 300ms';
			video.style.opacity = 0;
			video.style.transition = 'opacity 300ms';

			videoInformation.classList.add('hide');
			video.classList.remove('hide');
			videoControls.classList.remove('hide');
			setTimeout(function(){ video.style.opacity = 1; }, 100);
			setTimeout(function(){ videoControls.style.opacity = 1; }, 100);
			video.play();
		},
		PausePlayVideo: function () {
			let video = this.$refs.video;
			return video.paused ? video.play() : video.pause();
		},
		makeFullScreen: function () {
			let video = this.$refs.video;
			if (video.requestFullscreen) {
				video.requestFullscreen();
			} else if (video.mozRequestFullScreen) {
				video.mozRequestFullScreen(); // Firefox
			} else if (video.webkitRequestFullscreen) {
				video.webkitRequestFullscreen(); // Chrome and Safari
			}
		},
		muteVideo: function () {
			let video = this.$refs.video;
			let muteBtn = this.$refs.mute;
			if (video.muted == false) {
				video.muted = true;
				muteBtn.innerHTML = 'Unmute';
			} else {
				video.muted = false;
				muteBtn.innerHTML = 'Mute';
			}
		}
	},
}
</script>
