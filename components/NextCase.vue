<template>
<section id="next-case" class="nextCase">
	<text-transition text-left="Next case" :text-right="caseName" onloadedmetadata="" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()"></text-transition>

	<!-- <div class="hoverHolder"  @mouseenter="bgOfCase()" @mouseleave="bgToNormal()" :case="caseName"> -->
		<!-- <div class="contentHolder">
			<div class="textHolder textHolderLeft">
				<div id="textholder-left" class="mask">
					<div class="keepPosition">
						<h2><span>Next case</span></h2>
					</div>
				</div>
			</div>
			<div class="textHolder textHolderRight">
				<div id="textholder-right" class="mask">
					<h2>{{ caseName }}</h2>
				</div>
			</div>
			<div class="textHolder mobile-only">
				<h2><span>Next case</span> {{ caseName }}</h2>
			</div>
		</div> -->

	<!-- </div> -->
	<div id="caseImage" class="caseImage">
		<img :src="image">
	</div>
</section>
</template>

<script>
import TextTransition from '~/components/TextTransition.vue'

export default {
	components:{
		TextTransition
	},
	props: ['caseName', 'image', 'caseColor'],
	data() {
		return {
			Velocity: this.$velocity
		}
	},
	mounted() {

	},
	methods: {
		bgOfCase: function() {
			console.log('hoi to normal');
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = this.caseColor;
		},
		bgToNormal: function() {
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = 'black';
		},



		// bgOfCase: function() {
		//
		// 	console.log('hoi of case');
		//
		// 	//case color on mouseover
		// 	const bgDiv = document.getElementById('next-case');
		// 	bgDiv.style.backgroundColor = this.caseColor;
		//
		//
		// 	//case image animation on mouseover
		// 	const caseImage = document.getElementById('caseImage');
		//
		// 	//get grid size for image height on mouseover
		// 	const getGrid = window.innerWidth / 12;
		//
		// 	//case image animation on mouseover
		// 	this.Velocity(caseImage, { transform: 'translate(-50%, ' + -getGrid + 'px)' }, 600, [180, 16]);
		// },
		// bgToNormal: function() {
		// 	console.log('hoi to normal');
		//
		// 	//black color on mouseleave
		// 	const bgDiv = document.getElementById('next-case');
		// 	bgDiv.style.backgroundColor = 'black';
		//
		// 	//case image animation on mouseleave
		// 	const caseImage = document.getElementById('caseImage');
		// 	this.Velocity(caseImage, { transform: 'translate(-50%, 0)' }, 600, [180, 16]);
		// },
	}
}
</script>





<!-- <template>
	<section id="next-case" class="next-case">
		<div class="row center textCenter">
			<div class="column column-24">
				< @mouseleave="bgToNormal()"  :case="caseName" v-on:click="rotationAnimation()" -->
				<!-- v-on:click="rotationAnimation()" @mouseover="bgOfCase()" @mouseleave="bgToNormal()"  -->
				<!-- <div class="hover-state" id="mouseOver" @mouseover="bgOfCase()" @mouseleave="bgToNormal()" :case="caseName">

					<div class="content-holder">
						<div class="text-holder text-holder-left">
							<div class="text-hide">
								<h2><span>Next case</span></h2>
							</div>
						</div>

						<div class="text-holder text-holder-right">
							<div class="text-hide">
								<h2>&nbsp;{{ caseName }}</h2>
							</div>
						</div>

					</div>

				</div>
				<div id="case-image" class="case-image">
					<img :src="image">
				</div>
			</div>
		</div>
	</section>
</template> -->

<!-- // export default {
// 	props: ['caseName','image','caseColor'],
// 	methods: {
	    // rotationAnimation: () => {
			// const bgDiv = document.getElementById('next-case');
			// const caseImage = document.getElementById('case-image');
			//
			// bgDiv.classList.add('active');
			// setTimeout(function(){
			// 	caseImage.style.transformOrigin = 'center !important';
			// 	bgDiv.classList.add('rotation');
			// }, 500);
	    // },
	  //   bgOfCase: function () {
	  //   	const bgDiv = document.getElementById('next-case');
		// 		bgDiv.style.backgroundColor = this.caseColor;
	  //   },
	  //   bgToNormal: () => {
	  //   	const bgDiv = document.getElementById('next-case');
		// 		bgDiv.style.backgroundColor = 'black';
	  //   },
		// },
		// mounted: () => {
		// 	const caseTextInner = document.getElementById('case-text-inner');
		// 	const nextText = document.getElementById('next-text');
		// 	const caseText = document.getElementById('case-text');
		//
		// 	function toggleWidth() {
		// 		const currentWidthInner = caseTextInner.offsetWidth;
		// 		const currentWidthNext = nextText.offsetWidth;
		// 		const currentWidthCase = caseText.offsetWidth;
		// 		const currentWidthNextParent = nextText.parentElement;
		// 		caseTextInner.style.width = 'calc(2px + ' + currentWidthInner + 'px)';
		// 		nextText.style.width = currentWidthNext + 'px';
		// 		caseText.style.width = 'calc(1px + ' + currentWidthCase + 'px)';
		// 		currentWidthNextParent.style.width = currentWidthNext + 'px';
		// 	}
		// 	toggleWidth();
		// 	window.addEventListener('resize', toggleWidth);
		// }
// } -->
