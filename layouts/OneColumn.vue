<template>
<div id="oneCol" class="row center">
	<div class="column large-18 medium-full small-full">
		<div class="holder full">
			<!-- img paceholder for principle anime-->
			<div class="contentHolder">
				<img :src="img.big_photo.url" :alt="img.big_photo.alt">
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		props: ['img']
	}
</script>
