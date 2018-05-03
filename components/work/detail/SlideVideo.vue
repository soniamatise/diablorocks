<template>
  <div class="slideVideoContainer">
    <div class="slideVideo">

      <video ref="video" class="slideVideo__video" autoplay loop preload muted>
        <source :src="vid.url" type="video/mp4">
      </video>

      <!-- slide_video_information -->
      <div class="slide_video_information">
        <div class="row center">
          <div class="column large-12">

            <!-- information -->
            <div v-for="(vidScene, index) in vidScenes" :key="vidScene.id" class="gekkigheid">
              <div v-html="vidScene.scene_description"/>
              <button @click="goToScene(index)">knop: {{ index }} || duratie: {{ vidScene.scene_length }}ms</button>
            </div>
            <!-- end information -->

          </div>
        </div>
      </div>
      <!-- end slide_video_information -->

    </div>

    <div class="row debug center">
      <!-- v-if="debug" -->
      <div class="column">
        <button @click="prevScene">|&#9664;&#9664;</button>
        <button v-if="!isPlaying" @click="playVideo"><strong>||</strong></button>
        <button v-if="isPlaying" @click="pauseVideo">&#9658;</button>
        <button :class="{ 'is-going' : goingToNextScene }" @click="nextScene">&#9658;&#9658;</button>
        <button @click="goToScene(current.scene + 1, true)">&#9658;&#9658;|</button>
      </div>

      <div class="column">
        go to scene<br >
        <ul>
          <!-- <li v-for="(value, key) in scenes" :key="key"> -->
          <li v-for="(vidScene, index) in vidScenes" :key="vidScene.id">
            <button @click="goToScene(index)">
              <strong>{{ index }}</strong> <small>({{ vidScene.scene_length }}ms)</small>
            </button>
          </li>
        </ul>
        <hr >
        {{ scenes }}
        {{ vidScenes }}
      </div>

      <div class="column">
        <table>

          <tr>
            <td>scene:</td><td>{{ current.scene }} </td>
          </tr>
          <tr>
            <td>Next scene on:</td><td>{{ scenes[current.scene + 1] }}s </td>
          </tr>
          <tr>
            <td>playback.rate:</td><td>{{ playback.rate }}</td>
          </tr>
          <tr>
            <td>time:</td><td>{{ current.niceTime.min }}m {{ current.niceTime.sec }}s</td>
          </tr>
          <tr>
            <td>seconds:</td><td> {{ current.time }}s</td>
          </tr>
          <tr>
            <td>percentage:</td><td>{{ current.percentage }}</td>
          </tr>
          <tr>
            <td>goingToNextScene:</td><td>{{ goingToNextScene }}</td>
        </tr></table>

      </div>

    </div>
  </div>
</template>

<script>
// TODO:
// - Set playback rate on watch (playback.rate);
// - Be able to fast forward to more than 1 scene, this goes hard now, but need to find a way keep allowing skip.
// - Set cut from props instead of hard.
// - Overrule 'increment' from prop.
//

export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    cuts: {
      type: String,
      default: ""
    },
    debug: {
      type: String,
      default: ""
    },
    vid: {
      type: String,
      default: ""
    },
    vidScenes: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      increment: 200,
      videoElement: null,
      isPlaying: false,
      scenes: [0, 8, 16],
      current: {
        scene: 0,
        time: 0,
        niceTime: "",
        percentage: 0
      },
      playback: {
        rate: 1
      },
      goingToNextScene: false
    }
  },
  watch: {
    playback: function(newRate, oldRate) {
      console.log("playback rate has changed", newRate, oldRate)
      this.videoElement.playbackRate = this.playback.rate
    },
    goingToNextScene: function() {
      if (this.goingToNextScene === false) {
        this.videoElement.playbackRate = 1
      } else {
        this.videoElement.playbackRate = 4
      }
    }
  },
  beforeMount() {
    console.log("beforemount")
  },
  // What to do when mounted
  mounted() {
    this.videoElement = this.$refs.video
    this.playVideo()
    console.log("vid is mounted")
  },

  // The Methods
  methods: {
    /*
	 	Play the video
	*/
    playVideo: function() {
      this.isPlaying = true
      this.videoElement.play()
      this.ticker()
      this.videoElement.playbackRate = 1
    },
    /*
		 Pause the video
		*/
    pauseVideo: function() {
      this.isPlaying = false
      this.videoElement.pause()
      this.ticker(this.videoElement, true)
      this.muteVideo()
    },
    /*
			Mute the video
		*/
    muteVideo: function() {
      this.videoElement.muted = true
    },

    /*
			When clicked on next scene, this function will be envoked to get you to the next scene
		*/
    // handleNavClick: function(scene) {
    // 	console.log('::goToScene');
    //   this.current.scene = scene;
    //   if (this.current.scene > this.scenes.length - 1) {
    //     this.goToScene(0);
    //   } else {
    //     this.videoElement.currentTime = this.scenes[scene];
    //   }
    // },
    /*
			When clicked on next scene, this function will be envoked to get you to the next scene
		*/
    goToScene: function(scene, hard) {
      if (this.current.scene + 1 === scene && !hard) {
        this.nextScene()
      } else if (this.current.scene - 1 === scene && !hard) {
        this.prevScene()
      } else {
        if (this.current.scene > this.scenes.length - 1) {
          this.goToScene(0)
        } else {
          this.videoElement.currentTime = this.scenes[scene]
        }
      }
    },
    /*
			When clicked on next scene, this function will be envoked to get you to the next scene
		*/
    nextScene: function() {
      this.goingToNextScene = true
    },
    /*
			When clicked on previous scene, this function will be envoked to get you to the previous scene
		*/
    prevScene: function() {
      this.current.scene = this.current.scene - 1
      this.videoElement.currentTime = this.scenes[this.current.scene]
    },

    currentPercentage: function() {
      let sceneLength = null
      // console.log('length: ',(this.current.scene + 1),this.scenes.length);

      if (this.current.scene + 1 >= this.scenes.length) {
        sceneLength =
          this.videoElement.duration - this.scenes[this.current.scene]
      } else {
        sceneLength =
          this.scenes[this.current.scene + 1] - this.scenes[this.current.scene]
      }
      let currentSec = this.current.time - this.scenes[this.current.scene]
      let percentage =
        Math.round(100 / sceneLength * currentSec * 10) / 10 + "%"

      //console.log(this);
      this.$el.style.setProperty("--scene-current-width", percentage)
      //    console.log(sceneLength, currentSec, percentage);
    },
    // Create a nice looking time
    makeNiceTime: function(currentTime) {
      // let time = ""
      let minutes = Math.floor(currentTime / 60)
      let seconds = Math.round(currentTime - minutes * 60)
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      return { min: minutes, sec: seconds }
    },
    /*
		The ticker is the main function which reads the current time of the video, defines a nice time and above all also
		checks if we are repeating or going to the next scene.
		*/
    // ticker: function(videoEl, stop = false) {
    ticker: function() {
      let that = this
      setInterval(function() {
        let currentTime = Math.round(that.videoElement.currentTime * 10) / 10
        that.current.time = currentTime

        // Define the nice looking time
        that.current.niceTime = that.makeNiceTime(that.current.time)

        // Set percentage of scene
        that.currentPercentage()

        /*
				Check if the current Time stamp exists in the array of cuts(scenes). If the time isn't 0 and when the current time exists
				Check if we are on the way to the next scene or go back to the beginning of the current scene.
				*/

        let endTime
        if (that.current.scene + 1 === that.scenes.length) {
          endTime = that.videoElement.duration
        } else {
          endTime = Math.floor(that.scenes[that.current.scene + 1])
        }

        if (Math.round(that.current.time) > endTime && that.current.time > 0) {
          // if ( that.scenes.indexOf(that.current.time) > -1 && that.current.time > 0 ) {
          if (that.goingToNextScene) {
            that.goingToNextScene = false
            if (that.current.scene < that.scenes.length) {
              that.current.scene = that.current.scene + 1
            } else {
              //  that.current.scene = 0;
            }
          } else {
            console.log("the index: ", that.current.scene)
            console.log("the time: ", that.scenes[that.current.scene])
            that.videoElement.currentTime = that.scenes[that.current.scene]
          }
        } else {
          //  console.log('whahaha i passed anyway')
        }
      }, this.increment)
    }
  }
}
</script>
