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
					<div class="case-image"></div>
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

document.addEventListener('DOMContentLoaded', function() {
	var caseTextInner = document.getElementById('case-text-inner');
	var nextText = document.getElementById('next-text');
	var caseText = document.getElementById('case-text');
	var bgDiv = document.getElementById('next-case');

	function toggleWidth() {
		var currentWidthInner = caseTextInner.offsetWidth;
		var currentWidthNext = nextText.offsetWidth;
		var currentWidthCase = caseText.offsetWidth;
		var currentWidthNextParent = nextText.parentElement;

		currentWidthNextParent.style.width = currentWidthNext + 'px';
		nextText.style.width = currentWidthNext + 'px';
		caseText.style.width = 'calc(1px + ' + currentWidthCase + 'px)';
		caseTextInner.style.width = 'calc(1px + ' + currentWidthInner + 'px)';

	}
	toggleWidth();
	function bgColorOfCase() {
		bgDiv.style.backgroundColor = '#524d40';
	}
	function bgColorOfNormal() {
		bgDiv.style.backgroundColor = 'black';
	}


	window.addEventListener('resize', toggleWidth);
	bgDiv.addEventListener('mouseover', bgColorOfCase);
	bgDiv.addEventListener('mouseout', bgColorOfNormal);
});
</script>
