<template>
	<div class="slideVideoContainer">
		<div class="slideVideo">
			<video class="slideVideo__video" controls="false" ref="video" muted >
		  	<source :src="src" type="video/mp4">
			</video>
			<div class="slideVideo__scenes">
				<li class="slideVideo__scene" v-for="(value, key) in scenes" :key="key" :class="{'slideVideo__scene--current' : current.scene === key}">
					<button v-on:click="goToScene(key)">{{ key }}</button>
				</li>
			</div>
		</div>

		<div class="row debug center" v-if="debug">
			<div class="column">
				<button v-on:click="prevScene">|&#9664;&#9664;</button>
				<button v-on:click="playVideo" v-if="!isPlaying"><strong>||</strong></button>
				<button v-on:click="pauseVideo" v-if="isPlaying">&#9658;</button>
				<button v-on:click="nextScene" v-bind:class="{ 'is-going' : this.goingToNextScene }">&#9658;&#9658;</button>
				<button v-on:click="goToScene(current.scene + 1, true)">&#9658;&#9658;|</button>
			</div>

			<div class="column">
				go to scene<br />
				<ul>
					<li v-for="(value, key) in scenes" :key="key">
						<button v-on:click="goToScene(key)">
							<strong>{{key}}</strong> <small>({{value}}s)</small>
						</button>
					</li>
				</ul>
				<hr />
				{{ scenes }}
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
  data() {
    return {
      increment: 200,
      videoElement: null,
      isPlaying: false,
      scenes: [0, 10, 20, 30, 120],
      current: {
        scene: 0,
        time: 0,
        niceTime: '',
        percentage: 0
      },
      playback: {
        rate: 1
      },
      goingToNextScene: false
    };
  },
  props: ['src', 'cuts', 'debug'],

  // The Methods
  methods: {
    /*
	 	Play the video
	*/
    playVideo: function() {
      this.isPlaying = true;
      this.videoElement.play();
      this.ticker();
    },
    /*
		 Pause the video
		*/
    pauseVideo: function() {
      this.isPlaying = false;
      this.videoElement.pause();
      this.ticker(this.videoElement, true);
      this.muteVideo();
    },
    /*
			Mute the video
		*/
    muteVideo: function() {
      this.videoElement.muted = true;
    },

    /*
			When clicked on next scene, this function will be envoked to get you to the next scene
		*/
    handleNavClick: function(scene) {
			console.log('::goToScene');
      this.current.scene = scene;
      if (this.current.scene > this.scenes.length - 1) {
        this.goToScene(0);
      } else {
        this.videoElement.currentTime = this.scenes[scene];
      }
    },
    /*
			When clicked on next scene, this function will be envoked to get you to the next scene
		*/
    goToScene: function(scene, hard) {
			console.log('::goToScene');

			if((this.current.scene + 1) === scene && !hard){
				this.nextScene();
			} else {
	      if (this.current.scene > (this.scenes.length - 1)) {
	        this.goToScene(0);
	      } else {
	        this.videoElement.currentTime = this.scenes[scene];
	      }
			}
    },
    /*
			When clicked on next scene, this function will be envoked to get you to the next scene
		*/
    nextScene: function() {
			console.log('::nextScene');
      this.goingToNextScene = true;
      this.playback.rate = 2;
    },
    /*
			When clicked on previous scene, this function will be envoked to get you to the previous scene
		*/
    prevScene: function() {
			console.log('::prevScene');
      this.current.scene = this.current.scene - 1;
      this.videoElement.currentTime = this.scenes[this.current.scene];
    },

    currentPercentage: function() {
      let sceneLength = null;
      // console.log('length: ',(this.current.scene + 1),this.scenes.length);

      if (this.current.scene + 1 >= this.scenes.length) {
        sceneLength =
          this.videoElement.duration - this.scenes[this.current.scene];
      } else {
        sceneLength =
          this.scenes[this.current.scene + 1] - this.scenes[this.current.scene];
      }
      let currentSec = this.current.time - this.scenes[this.current.scene];
      let percentage =
        Math.round(100 / sceneLength * currentSec * 10) / 10 + '%';

      //console.log(this);
      this.$el.style.setProperty('--scene-current-width', percentage);
  //    console.log(sceneLength, currentSec, percentage);
    },
    // Create a nice looking time
    makeNiceTime: function(currentTime) {
      let time = '';
      let minutes = Math.floor(currentTime / 60);
      let seconds = Math.round(currentTime - minutes * 60);
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return { 'min': minutes, 'sec': seconds};
    },
    /*
		The ticker is the main function which reads the current time of the video, defines a nice time and above all also
		checks if we are repeating or going to the next scene.
		*/
    ticker: function(videoEl, stop = false) {
      let that = this;
      let int = setInterval(function() {
        let currentTime = Math.round(that.videoElement.currentTime * 10) / 10;
        that.current.time = currentTime;

        // Define the nice looking time
        that.current.niceTime = that.makeNiceTime(that.current.time);

        // Set percentage of scene
        that.currentPercentage();

        /*
				Check if the current Time stamp exists in the array of cuts(scenes). If the time isn't 0 and when the current time exists
				Check if we are on the way to the next scene or go back to the beginning of the current scene.
				*/

				let endTime;
				if((that.current.scene + 1) === that.scenes.length){
					endTime = that.videoElement.duration;
				} else {
					endTime = Math.floor(that.scenes[that.current.scene + 1]);
				}

				if (Math.round(that.current.time) > endTime && that.current.time > 0 ) {

        // if ( that.scenes.indexOf(that.current.time) > -1 && that.current.time > 0 ) {
          if (that.goingToNextScene) {
            that.goingToNextScene = false;
            that.playback.rate = 1;
            if (that.current.scene < that.scenes.length) {
              that.current.scene = that.current.scene + 1;
            } else {
            //  that.current.scene = 0;
            }
          } else {
            console.log('the index: ', that.current.scene);
            console.log('the time: ', that.scenes[that.current.scene]);
            that.videoElement.currentTime = that.scenes[that.current.scene];
          }
        } else {
          //  console.log('whahaha i passed anyway')
        }
      }, this.increment);
    }
  },
  watch: {
    playback: function(newRate, oldRate) {
      console.log('playback rate has changed', newRate, oldRate);
      this.videoElement.playbackRate = this.playback.rate;
    }
  },
  beforeMount() {
    console.log('beforemount');
  },
  // What to do when mounted
  mounted() {
    this.videoElement = this.$refs.video;
    this.playVideo();
  }
};
</script>

<style lang="scss" scoped>
// :root {
//   --scene-current-width: 50%;
// }
.slideVideo {
  width: 100vw;
  height: 56vw;
  box-shadow: 0 0 200px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  &__video {
    width: 100%;
    height: 100%;
  }
  &__scenes {
    position: absolute;
    bottom: 0;
    left: 0;
		width: 100%;
    display: flex;
		justify-content: center;
    padding: 0;
    margin: 0;
    padding: 3rem;
  }
  &__scene {
    padding: 0;
    margin: 0;
    width: 2rem;
    & + .slideVideo__scene {
      margin-left: 1rem;
    }
    button {
      width: 100%;
      margin: 0;
      height: 2rem;
      text-indent: -999em;
      border: none;
      background: none;
      position: relative;
      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        height: 3px;
        background-color: white;
        width: 100%;
        //  transition: width 0.1s linear;
        position: absolute;
      }
      &:before {
        background-color: rgba(0, 0, 0, 0.25);
      }
    }
    &--current {
      button {
        &:after {
          height: 3px;
					width: 0;
          width: var(--scene-current-width);
        }
      }
      & ~ .slideVideo__scene button:after {
        width: 0;
      }
    }
  }
}
.row.debug {
  .column {
    flex-grow: 1;
    padding: 1rem;
		ul{
			li{
				display: inline-block;
			}
		}
		table{  border-spacing: 0px;
    border-collapse: collapse;
			tr{
				td{ border-bottom: 1px solid rgba(0,0,0,.25); padding: .5rem;
				&:first-child{ font-weight: bold; }}
			}
		}
  }
  button { border-radius: 10px;
    padding: 0.5rem;
    font-size: 1rem;
    &.is-going {
      border: 1px solid red;
    }
  }
}
</style>
