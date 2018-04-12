<template>

	<!-- vue needed holder -->
	<div class="make_full">

		<!-- holder -->
		<div class="holder" ref="holder">
			<div class="bg_element" :style="{ 'background-image': 'url(' + caseImage + ')' }" ref="bgElement"></div>

			<!-- hover element -->
			<div class="hover_container" ref="videoInfo" @click="showPlayVideo()" @mouseenter="textAnimationenter()" @mouseleave="textAnimationleave()">

				<!-- content_holder -->
				<div class="content_holder">

					<!-- text left -->
					<div class="text_holder text_holder_left" ref="leftTextElement">
						<div class="keep_position">
							<h2>Play</h2>
						</div>
					</div>
					<!-- end text left -->

					<!-- text right -->
					<div class="text_holder text_holder_right" ref="rightTextElement">
							<div class="keep_position">
								<h2>&nbsp;<span></span>&nbsp;{{caseName}}</h2>
							</div>
					</div>
					<!-- end text right -->

					<!-- mobile text -->
					<div class="text_holder mobile-only">
						<h2><span class="medium">Play</span>&nbsp;{{ rightText }}</h2>
					</div>
					<!-- end mobile text -->

				</div>
				<!-- end content_holder -->

			</div>
			<!-- end hover element -->

		</div>
		<!-- end holder -->

		<!-- video holder -->
		<div class="video_holder" ref="video_holder">
			<div class="holder_video_controls">
			<video @timeupdate="seekBar()" class="video" ref="video" width="100%" height="100%" controls preload>
						<source v-bind:src="caseVideo" type="video/mp4">
					</video>
			<div class="control_panel hide" ref="controls">
						<div class="control pause" :class="{'paused': paused}" ref="playPause" v-on:click="PausePlayVideo()" @click="paused = !paused">
						</div>
						<div class="control timeline">
							<progress id='progress-bar' class="timeline-bar" ref="timeline" min='0' max='100' value='0'>0% played</progress>
						</div>
						<div class="control fullsize" @click="makeFullScreen()">
						</div>
						<div class="control volume on" ref="mute" @click="muteVideo()">
						</div>
			</div>
		</div>
		</div>
		<!-- end video holder -->

	</div>
	<!-- end vue needed holder -->

</template>

<script>
export default {
	props: ['caseName', 'caseVideo', 'caseImage', 'rightText'],
	data: function() {
		return {
			paused: false,
			elements: {
				left: null,
				right: null,
				bg: null
			}
		}
	},
	mounted() {
		this.elements.bg = this.$refs.bgElement;
		this.elements.left = this.$refs.leftTextElement;
		this.elements.right = this.$refs.rightTextElement;

		this.toggleWidth();
	},

	methods: {
		toggleWidth: function() {
			this.elements.right.style.transform = 'translate(0%, -50%)';
		},
		// text animation on mouseenter
		textAnimationenter: function() {
			this.elements.bg.style.opacity = '.25';
			this.elements.left.style.transform = 'translateX(' + ((this.elements.right.offsetWidth / 2) * 1) + 'px)';
		},
		// text animation on mouseleave
		textAnimationleave: function() {
			this.elements.bg.style.opacity = '1';
			this.elements.left.style.transform = 'translateX(0%)';
		},

		// video
		showPlayVideo: function() {
			let holder = this.$refs.holder;
			let video_holder = this.$refs.video_holder;
			let video = this.$refs.video;
			let videoInformation = this.$refs.videoInfo;
			let videoControls = this.$refs.controls;

			videoControls.style.opacity = 0;
			videoControls.style.transition = 'opacity 300ms';
			video.style.opacity = 0;
			video.style.transition = 'opacity 300ms';

			holder.classList.add('show_video');
			video_holder.classList.add('show_video');
			videoInformation.classList.add('hide');
			video.classList.remove('hide');
			videoControls.classList.remove('hide');
			setTimeout(function() {
				video.style.opacity = 1;
			}, 400);
			setTimeout(function() {
				videoControls.style.opacity = 1;
			}, 400);
			setTimeout(function() {
				video.play();
			}, 400);
			setTimeout(function() {
				holder.classList.add('hide');
			}, 1000);
		},
		PausePlayVideo: function() {
			let video = this.$refs.video;
			return video.paused ? video.play() : video.pause();
		},
		makeFullScreen: function() {
			let video = this.$refs.video;
			if (video.requestFullscreen) {
				video.requestFullscreen();
			} else if (video.mozRequestFullScreen) {
				video.mozRequestFullScreen(); // Firefox
			} else if (video.webkitRequestFullscreen) {
				video.webkitRequestFullscreen(); // Chrome and Safari
			}
		},
		muteVideo: function() {
			let video = this.$refs.video;
			let muteBtn = this.$refs.mute;
			if (video.muted == false) {
				video.muted = true;
				muteBtn.classList.add('off');
				muteBtn.classList.remove('on');
			} else {
				video.muted = false;
				muteBtn.classList.remove('off');
				muteBtn.classList.add('on');
			}
		},
		seekBar: function() {
			let video = this.$refs.video;
			let timeline = this.$refs.timeline;
			let percentage = Math.floor((100 / video.duration) *
				video.currentTime);
			timeline.value = percentage;
		}
	},
}
</script>
