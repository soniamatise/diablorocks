<template>
	<!-- vue needed holder -->
	<div class="make_full">

		<!-- holder -->
		<div ref="holder" class="holder">
			<div ref="bgElement" :style="{ 'background-image': 'url(' + caseImage + ')' }" class="bg_element"/>

			<!-- hover element -->
			<div ref="videoInfo" class="hover_container" @click="showPlayVideo()" @mouseenter="textAnimationenter()" @mouseleave="textAnimationleave()">

				<!-- content_holder -->
				<div class="content_holder">

					<!-- text left -->
					<div ref="leftTextElement" class="text_holder text_holder_left">
						<div class="keep_position">
							<h2>Play</h2>
						</div>
					</div>
					<!-- end text left -->

					<!-- text right -->
					<div ref="rightTextElement" class="text_holder text_holder_right">
						<div class="keep_position">
							<h2>&nbsp;<span/>&nbsp;{{ caseName }}</h2>
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
		<div ref="video_holder" class="video_holder">
			<div class="holder_video_controls">
				<video ref="video" class="video" width="100%" height="100%" control="false" preload @timeupdate="seekBar()">
					<source :src="caseVideo" type="video/mp4">
				</video>
				<div ref="controls" class="control_panel hide">
					<div ref="playPause" :class="{'paused': paused}" class="control pause" @click="PausePlayVideo(), paused = !paused"/>
					<div class="control timeline">
						<progress id="progress-bar" ref="timeline" class="timeline-bar" min="0" max="100" value="0">0% played</progress>
					</div>
					<div class="control fullsize" @click="makeFullScreen()"/>
					<div ref="mute" class="control volume on" @click="muteVideo()"/>
				</div>
			</div>
		</div>
		<!-- end video holder -->

	</div>
<!-- end vue needed holder -->
</template>

<script>
export default {
  props: {
    caseName: {
      type: String,
      default: ""
    },
    caseVideo: {
      type: String,
      default: ""
    },
    caseImage: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    }
  },
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
    this.elements.bg = this.$refs.bgElement
    this.elements.left = this.$refs.leftTextElement
    this.elements.right = this.$refs.rightTextElement

    this.toggleWidth()
  },

  methods: {
    toggleWidth: function() {
      this.elements.right.style.transform = "translate(0%, -50%)"
    },
    // text animation on mouseenter
    textAnimationenter: function() {
      this.elements.bg.style.opacity = ".25"
      this.elements.left.style.transform =
        "translateX(" + this.elements.right.offsetWidth / 2 * 1 + "px)"
    },
    // text animation on mouseleave
    textAnimationleave: function() {
      this.elements.bg.style.opacity = "1"
      this.elements.left.style.transform = "translateX(0%)"
    },

    // video
    showPlayVideo: function() {
      let holder = this.$refs.holder
      let video_holder = this.$refs.video_holder
      let video = this.$refs.video
      let videoInformation = this.$refs.videoInfo
      let videoControls = this.$refs.controls

      videoControls.style.opacity = 0
      videoControls.style.transition = "opacity 300ms"
      video.style.opacity = 0
      video.style.transition = "opacity 300ms"

      holder.classList.add("show_video")
      video_holder.classList.add("show_video")
      videoInformation.classList.add("hide")
      video.classList.remove("hide")
      videoControls.classList.remove("hide")
      setTimeout(function() {
        video.style.opacity = 1
      }, 400)
      setTimeout(function() {
        videoControls.style.opacity = 1
      }, 400)
      setTimeout(function() {
        video.play()
      }, 400)
      setTimeout(function() {
        holder.classList.add("hide")
      }, 1000)
    },
    PausePlayVideo: function() {
      let video = this.$refs.video
      return video.paused ? video.play() : video.pause()
    },
    makeFullScreen: function() {
      let video = this.$refs.video
      if (video.requestFullscreen) {
        video.requestFullscreen()
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen() // Firefox
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen() // Chrome and Safari
      }
    },
    muteVideo: function() {
      let video = this.$refs.video
      let muteBtn = this.$refs.mute
      if (video.muted == false) {
        video.muted = true
        muteBtn.classList.add("off")
        muteBtn.classList.remove("on")
      } else {
        video.muted = false
        muteBtn.classList.remove("off")
        muteBtn.classList.add("on")
      }
    },
    seekBar: function() {
      let video = this.$refs.video
      let timeline = this.$refs.timeline
      let percentage = Math.floor(100 / video.duration * video.currentTime)
      timeline.value = percentage
    }
  }
}
</script>
