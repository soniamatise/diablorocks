<template>
	<section v-on:click="rotationAnimation()" @mouseover="bgOfCase()" @mouseleave="bgToNormal()" id="next-case" class="next-case " :case="caseName">
		<div class="row center textCenter">
			<div class="column column-24">
				<div id="case-text-inner" class="case-text-inner">
					<div class="next-text">
						<div id="next-text">
							<h2 class="font-medium"> &nbsp;—&nbsp;Next case</h2>
						</div>
					</div>
					<div id="case-text" class="case-text"><h2>{{ caseName }}</h2></div>
				</div>
				<div id="case-image" class="case-image">
					<img :src="image">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['caseName','image','caseColor'],
	methods: {
	    rotationAnimation: () => {
			const bgDiv = document.getElementById('next-case');
			const caseImage = document.getElementById('case-image');

			bgDiv.classList.add('active');
			setTimeout(function(){ 
				caseImage.style.transformOrigin = 'center !important';
				bgDiv.classList.add('rotation');
			}, 500);
	    },
	    bgOfCase: function () {
	    	const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = this.caseColor;
	    },
	    bgToNormal: () => {
	    	const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = 'black';
	    },
	},
	mounted: () => {
	    const caseTextInner = document.getElementById('case-text-inner');
		const nextText = document.getElementById('next-text');
		const caseText = document.getElementById('case-text');

		function toggleWidth() {
			const currentWidthInner = caseTextInner.offsetWidth;
			const currentWidthNext = nextText.offsetWidth;
			const currentWidthCase = caseText.offsetWidth;
			const currentWidthNextParent = nextText.parentElement;
			caseTextInner.style.width = 'calc(2px + ' + currentWidthInner + 'px)';
			nextText.style.width = currentWidthNext + 'px';
			caseText.style.width = 'calc(1px + ' + currentWidthCase + 'px)';
			currentWidthNextParent.style.width = currentWidthNext + 'px';
		}
		toggleWidth();
		// window.addEventListener('resize', toggleWidth);
	}
}
</script>
