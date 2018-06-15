<template>
	<div class="loaders">
		<div ref="enterOverlay" class="overlay overlay_open-page" :class="{ closing: isClosing }">
		</div>
		<div ref="closeOverlay" class="overlay overlay_leave-page" :class="{ opening: isOpening }">
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'leaveOpen',
	],
	data () {
		return {
			isClosing: false,
			isOpening: false
		};
	},
	watch: {
		leaveOpen () {
			this.open();
		},
	},
	beforeMount() {
		let self = this;
		setTimeout(function() {
			self.close();
		}, 200);
	},
	methods: {
		close: function (){
			let self = this;
			self.isClosing = true;
		},
		open: function (){
			let self = this;
			self.isOpening = true;
		}
	}
};
</script>

<style lang="scss" scoped>
    .overlay {
        position: fixed;
        height: 100%;
        background-color: black;
        z-index: 3;
        transition: width .5s ease-in-out;

        &_leave-page {
            width: 0%;

            &.opening {
                left: 0;
                width: 100% !important;
            }
        }

        &_open-page {
            width: 100%;

            &.closing {
                right: 0;
                width: 0% !important;
            }
        }
    }

</style>
