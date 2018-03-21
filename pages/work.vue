
<template>
	<main-layout class="work">
		<div class="row center textCenter intro">
			<div class="column column-8">
				<type-writer delay="250" v-on:doneTyping="showContent">Work</type-writer>
				<p class="content" v-bind:class="{show: displayContent}">Our latest and greatest for brands we believe in.</p>
			</div>
		</div>
<div class="background-canvas"></div>
		<section class="work__grid">

			<WorkCard
			columnNr="1"
			caseName="kalkhoff"
			size="medium"
			image="http://media-channel.nationalgeographic.com/media/uploads/photos/content/video/2017/04/03/912762947881_912762947881.jpg"
			client="Kalkhoff Bikes"
			description="When your bikes are eye-catchers, your website should be too."
			slug="kalkhoff-bikes"/>
			<WorkCard
			columnNr="1"
			caseName="aangenaam"
			size="small"
			image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
			client="Aangenaam Bergen op Zoom"
			description="Original stories from a ‘gezellige’ community."
			slug="aangenaam-bergen-op-zoom"/>
			<WorkCard
			columnNr="1"
			caseName="expeditiewadden"
			size="medium"
			image="http://www.pbs.org/wnet/nature/files/2016/10/giraffe_episode_thumb.jpg"
			client="Expeditie Wadden"
			description="A journey through time and space."
			slug="expeditie-wadden"/>

			<WorkCard
			columnNr="2"
			caseName="nielson"
			size="small"
			image="https://lechantelteam.files.wordpress.com/2013/10/giraffe15342.jpg"
			client="Sony Music Netherlands"
			description="A new digital home for Nielson, an artist that reinvented himself."
			slug="nielson-air"/>
			<WorkCard
			columnNr="2"
			caseName="ticketchaser"
			size="large"
			image="https://cdn.suwalls.com/wallpapers/funny/giraffe-on-a-tree-trunk-42410-1920x1080.jpg"
			client="Sony Music Netherlands & DVLM"
			description="Scavenger hunts are the future of giveaway campaigns."
			slug="ticketchaser"/>
			<WorkCard
			columnNr="2"
			caseName="stadsmakelaar"
			size="small"
			image="http://www.4usky.com/data/out/38/164324255-giraffe-wallpapers.jpg"
			client="Stadsmakelaar"
			description="Finding the place of your dreams in Bergen op Zoom."
			slug="stadsmakelaar"/>

			<WorkCard
			columnNr="3"
			caseName="bbbcycling"
			size="large"
			image="http://www.wallpapers13.com/wp-content/uploads/2016/05/Giraffe-often-feeds-on-pasture-high-shrublands-trees-with-green-leaves-Desktop-Wallpaper-Backgrounds-HD-3840x2400-1920x1080.jpg"
			client="BBB Cycling"
			description="This is what happens when commerce and emotion collide and come together."
			slug="bbb-cycling"/>
			<WorkCard
			columnNr="3"
			caseName="viacom"
			size="medium"
			image="http://www.wallpapers4u.org/wp-content/uploads/giraffe_sky_muzzle_profile_59848_1920x1080.jpg"
			client="Viacom Out of Office"
			description="Getting your out of office as fun as actually being out of office."
			slug="viacom-out-of-office"/>
			<WorkCard
			columnNr="3"
			caseName="natwerk"
			size="large"
			image="http://deskbg.com/i/c/1920x1080/wpp/21/21588/giraffe-running-desktop-background.jpg"
			client="Natwerk"
			description="I GIF this website a 10/10."
			slug="natwerk"/>

		</section>
	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import TypeWriter from '~/components/TypeWriter.vue'
import WorkCard from '@/components/WorkCard'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		TypeWriter,
		WorkCard
	},
	data() {
		return {
			displayContent: false
		}
	},
	methods: {
		showContent: function(){
			this.displayContent = true;
		}
	}
}


// var help = new Vue({
//   el: '.work__card',
//   data: {
//     name: 'Vue.js'
//   },
//   // define methods under the `methods` object
//   methods: {
//     clickAnim: function(event) {
//       console.log(event);
//     }
//   }
// })
// //
// // // you can invoke methods in JavaScript too
// help.clickAnim() // => 'Hello Vue.js!'
//
//
//
// 	// let allCards = document.querySelectorAll('.work__card__image-container');
// 	// let images = document.querySelectorAll('.work__card__image');
//
// 	// const background = document.querySelector('.background-canvas');

//
	// let counter = 0;
	// let columns;
	// let column;
	// let activeColumn;
	// let columnClass;
	// let deviceSize;
	// let savedWidth = window.innerWidth;
	//
	// window.addEventListener('resize', function(){
	// 	checkColumns();
	// });
	// let checkColumns = function(){
	// 	if (window.innerWidth < 750 && savedWidth != 750){
	// 		columns = images.length;
	// 		savedWidth = 750;
	// 		assignColumns(columns);
	// 		deviceSize = 'small';
	// 	} else if ((window.innerWidth < 960 && window.innerWidth > 750) && savedWidth != 960){
	// 		columns = Math.ceil(images.length / 2);
	// 		savedWidth = 960;
	// 		assignColumns(columns);
	// 		deviceSize = 'medium';
	// 	} else {
	// 		columns = images.length / 3;
	// 		savedWidth = 1440;
	// 		assignColumns(columns);
	// 		deviceSize = 'large';
	// 	}
	// }
	// let assignColumns = function(columns) {
	// 	for (let i = 0; i < allCards.length; i++){
	// 		if (i <= (columns - 1)) {
	// 			activeColumn = column1;
	// 			columnClass = 'column1';
	// 		} else if (i <= (columns * 2) - 1){
	// 			activeColumn = column2;
	// 			columnClass = 'column2';
	// 		} else {
	// 			activeColumn = column3;
	// 			columnClass = 'column3';
	// 		}
	// 		if(column !== activeColumn){
	// 			column = activeColumn;
	// 			counter = 0;
	// 		}
	// 		allCards[i].classList.add('work__card__image-container--' + activeColumn[counter]);
	// 		allCards[i].parentElement.classList = ('work__card ' + columnClass);
	//
	// 		if(counter !== column.length -1){
	// 			counter++;
	// 		} else{
	// 			counter = 0;
	// 		}
	// 	}
	// }
	// let onHover = function(){
	// 	images.forEach(function(image){
	// 		clickAnim(image);
	// 		image.addEventListener('mouseover', function () {
	// 			background.classList.add('bg-' + image.parentElement.parentElement.getAttribute('case'));
	// 			if(!background.classList.contains('expandBackground')){
	// 				image.parentElement.parentElement.classList.add('card--hover');
	// 				background.classList.add('background--forward');
	// 			}
	// 			checkMouse(image);
	// 		});
	// 	});
	// }
	// let checkMouse = function(image){
	// 	image.addEventListener('mouseout', function (){
	// 		if(!background.classList.contains('expandBackground')){
	// 			background.classList.remove('bg-' + image.parentElement.parentElement.getAttribute('case'));
	// 		}
	// 		background.classList.remove('background--forward');
	// 		image.parentElement.parentElement.classList.remove('card--hover');
	// 	});
	// }
	// let clickAnim = function(image){
	// 	image.addEventListener('click', function(e) {
	// 		if (deviceSize === 'large'){
	// 			if (e.target.parentElement.classList.contains('work__card__image-container--small')) {
	// 				e.target.parentElement.parentElement.style = `--height: ${getGrid(7)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
	// 			} else if (e.target.parentElement.classList.contains('work__card__image-container--medium')) {
	// 				e.target.parentElement.parentElement.style = `--height: ${getGrid(8)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
	// 			} else {
	// 				e.target.parentElement.parentElement.style = `--height: ${getGrid(9)}vw; --width: ${getGrid(6)}vw; --margin: ${getGrid(9)}vw; --top: ${getGrid(2)}vw;`
	// 			}
	// 		} else if (deviceSize === 'medium'){
	// 			if (e.target.parentElement.classList.contains('work__card__image-container--small')) {
	// 				e.target.parentElement.parentElement.style = `--height: ${getGrid(10)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
	// 			} else if (e.target.parentElement.classList.contains('work__card__image-container--medium')) {
	// 				e.target.parentElement.parentElement.style = `--height: ${getGrid(12)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
	// 			} else {
	// 				e.target.parentElement.parentElement.style = `--height: ${getGrid(14)}vw; --width: ${getGrid(9.25)}vw; --margin: ${getGrid(7.375)}vw; --top: ${getGrid(4)}vw;`;
	// 			}
	// 		} else {
	// 			e.target.parentElement.parentElement.style = `--height: ${getGrid(20)}vw; --width: ${getGrid(20)}vw; --margin: ${getGrid(2)}vw; --top: ${getGrid(3)}vw;`;
	// 		}
	// 		e.target.parentElement.parentElement.classList.add('expandCard');
	// 		e.target.parentElement.classList.add('expandImage');
	// 		background.classList.add('expandBackground');
	// 		image.parentElement.parentElement.classList.remove('card--hover');
	// 	});
	// }
	// function getGrid(value){
	// 	return (100 / 24) * value;
	// }
	// onHover();
	// checkColumns();

</script>
