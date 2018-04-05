<template>
<section id="IconsCaption">
	<div class="row center">
		<div class="column large-14 medium-20 small-full">
			<div class="case-color" :style="{ 'background-color': '' + caseColor + '' }">
				<ul>
					<li class="iconHolder">
						<img class="img" alt="icon" src="https://picsum.photos/g/100/100" />
					</li>
					<li class="iconHolder">
						<img class="img" alt="icon" src="https://picsum.photos/g/100/100" />
					</li>
					<li class="iconHolder">
						<img class="img" alt="icon" src="https://picsum.photos/g/100/100" />
					</li>
					<li class="iconHolder">
						<img class="img" alt="icon" src="https://picsum.photos/g/100/100" />
					</li>
					<li class="iconHolder hide-on-mobile">
						<img class="img" alt="icon" src="https://picsum.photos/g/100/100" />
					</li>
					<li class="iconHolder hide-on-mobile">
						<img class="img" alt="icon" src="https://picsum.photos/g/100/100" />
					</li>
					<li class="iconHolder hide-on-mobile">
						<img class="img" alt="icon" src="https://picsum.photos/g/100/100" />
					</li>
					<li class="iconHolder hide-on-mobile">
						<img class="img" alt="icon" src="https://picsum.photos/g/100/100" />
					</li>
				</ul>
			</div>
		</div>
		<div class="column large-12 medium-16 small-16">
			<p><span>One language</span> Digital was leading during the entire project. The old iconography used on packaging and online were replaced by a new smooth iconset which works on and -offline. Pretty nice, aye?</p>
		</div>
	</div>
</section>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['caseColor' , 'caseIcon'],
	mounted() {
	},
	methods: {
	}
}
</script>
