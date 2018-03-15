<template>
	<main-layout class="work-detail">
		<div class="row center">
			<div class="column column-12">
				<p>BBB Cycling — This is what happens when commerce and emotion collide and come together.</p>
			</div>
		</div>
		<section id="next-case" class="next-case">
			<div class="row center textCenter">
				<div class="column column-24">
					<div id="case-text-inner" class="case-text-inner">
						<div class="next-text">
							<div id="next-text">
								<p> &nbsp;—&nbsp;Next case</p>
							</div>
						</div>
						<div id="case-text" class="case-text"><p>BBB Cycling</p></div>
					</div>
					<div id="case-image" class="case-image">
						<img src="../assets/images/kalkhoff.png">
					</div>
				</div>
			</div>
		</section>
	</main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue'
export default {
	components: {
		MainLayout
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const caseTextInner = document.getElementById('case-text-inner');
	const nextText = document.getElementById('next-text');
	const caseText = document.getElementById('case-text');
	const bgDiv = document.getElementById('next-case');
	const caseImage = document.getElementById('case-image');

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
	
	function bgColorOfCase() {
		bgDiv.style.backgroundColor = '#524d40';//TODO: PLACEHOLDER COLOR OF THE CASE!!!!
	}
	function bgColorOfNormal() {
		bgDiv.style.backgroundColor = 'black';
	}
	function active() {
		bgDiv.classList.add('active');
		setTimeout(function(){ 
			caseImage.style.transformOrigin = 'center !important';
			bgDiv.classList.add('rotation');
		}, 500);
	}
	window.addEventListener('resize', toggleWidth);
	bgDiv.addEventListener('mouseover', bgColorOfCase);
	bgDiv.addEventListener('mouseout', bgColorOfNormal);
	bgDiv.addEventListener('click', active);
});
</script>
