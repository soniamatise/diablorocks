<template>
	<div class="row center">
		<div class="column large-18 medium-full small-full">

			<!-- holder -->
			<div class="holder full">

				<!-- video -->
				<div class="content_holder" v-if="img.photo_video === 'Video'">
					<video @timeupdate="seekBar()" class="video" ref="video" width="100%" height="100%" v-bind:poster="img.image" autoplay loop preload>
						<source v-bind:src="img.video.url" type="video/mp4">
					</video>
				</div>
				<!-- end video -->

				<!-- image -->
				<div class="content_holder" v-else-if="img.photo_video === 'Photo'">
					<img :src="img.big_photo.url" :alt="img.big_photo.alt">
				</div>
				<!-- end image -->

			</div>
			<!-- end holder -->

		</div>
	</div>
</template>

<script>
	export default {
		props: ['img']
	}
</script>
