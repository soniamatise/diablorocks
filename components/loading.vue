<template>
	<div class="nuxt-progress" 
		:style="{
			'width': percent+'%',
			'height': height,
			'opacity': show ? 1 : 0
		}"
		:class="{ 
			closing: isClosing,
			opening: isOpening 
	}">
	</div>
</template>

<script>
import Vue from 'vue';

export default {
	name: 'NuxtLoading',
	data () {
		return {
			percent: 0,
			show: false,
			isOpening: true,
			isClosing: false,
			canSuccess: true,
			duration: 5000,
			height: '100%',
			color: 'white',
			failedColor: 'red',
		};
	},
	// watch: {
	// 	get: function () {
	// 		console.log(this.percent);
	// 	}
	// },
	methods: {

		start () {
			this.show = true;
			this.canSuccess = true;
			if (this._timer) {
				clearInterval(this._timer);
				this.percent = 0;
			}
			this._cut = 10000 / Math.floor(this.duration);
			this._timer = setInterval(() => {
				this.increase(this._cut * Math.random());
				if (this.percent > 95) {
					// console.log('heu')
					// this.finish();
				}
			}, 100);
			return this;
		},
		set (num) {
			this.show = true;
			this.canSuccess = true;
			this.percent = Math.floor(num);
			return this;
		},
		get () {
			return Math.floor(this.percent);
		},
		increase (num) {
			this.percent = this.percent + Math.floor(num);
			return this;
		},
		decrease (num) {
			this.percent = this.percent - Math.floor(num);
			return this;
		},
		finish () {
			console.log('heu')
			this.percent = 100;
			this.hide();
			return this;
		},
		pause () {
			clearInterval(this._timer);
			return this;
		},
		hide () {
			clearInterval(this._timer);
			this._timer = null;
			setTimeout(() => {
				Vue.nextTick(() => {
					setTimeout(() => {
						this.isOpening = false;
						this.isClosing = true;
						//     this.percent = 0; 
					}, 200);
				});
			}, 500);
			// set classes in beginning state

			this.reset();
			return this;
		},
		reset () {
			// set classes in beginning state
			setTimeout(() => {
				this.isClosing = false;
				this.isOpening = true;
			}, 200);
			return this;
		},
		fail () {
			this.canSuccess = false;
			return this;
		}
	}
};
</script>

<style lang="scss">
.nuxt-progress {
    position: fixed;
    top: 0px;
    height: 2px;
    width: 0%;
    transition: width 0.5s;
    opacity: 1;
    background-color:white;
    z-index: 999999;

    &.opening {
        left: 0%;
    }
    &.closing {
        right: 0%;
        width: 0% !important;
    }
}
</style>

