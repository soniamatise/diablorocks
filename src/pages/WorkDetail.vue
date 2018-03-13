<template>
	<main-layout class="work-detail">
		<div class="row center">
			<div class="column column-12">
				<p>BBB Cycling — This is what happens when commerce and emotion collide and come together.</p>
			</div>
		</div>
		<section class="next-case" style="background-color: #524d40;">
			<div class="row center textCenter">
				<div class="column column-24">
					<div id="case-text" class="case-text">
						<p><span id="next-case-text">Next case</span> BBB Cycling</p>
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

document.addEventListener('DOMContentLoaded', function() {
	var caseText = document.getElementById('case-text');
	var nextCaseText = document.getElementById('next-case-text');
	nextCaseText.style.transition = 'opacity 300ms';

	caseText.addEventListener('mouseover', function(){
		fade();
	});

	function fade(){
		nextCaseText.style.opacity = 0; 
		setTimeout(function(){ nextCaseText.classList.add('hidden'); }, 500);
	}
});
</script>
