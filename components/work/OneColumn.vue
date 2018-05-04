<template>
	<div class="row center">
		<div class="column large-18 medium-full small-full">

			<!-- holder -->
			<div class="holder full">

				<!-- video -->
				<div v-if="img.photo_video === 'Video'" class="content_holder">
					<video ref="video" :poster="img.image" playsinline class="video" autoplay loop preload>
						<source :src="img.video.url" type="video/mp4">
					</video>
				</div>
				<!-- end video -->

				<!-- image -->
				<div v-else-if="img.photo_video === 'Photo'" class="content_holder">
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
  props: {
    img: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
