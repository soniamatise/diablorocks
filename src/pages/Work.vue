<template>
	<main-layout>
		<section class="work">
			<div class="row center textCenter intro">
				<div class="column column-8">
					<h1>Work</h1>
					<p>Our latest and greatest for brands we believe in.</p>
				</div>
			</div>
			<div class="row center">
				<div class="column column-20">
					<div class="work-items">
						<div class="work-item">
							<div class="image">
								<img class="work-item-image" src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500">
							</div>
							<div class="description">
								<p><b>Kalkhoff Bikes —</b> When your bikes are eye-catchers, your website should be too.</p>
							</div>
						</div>
						<div class="work-item">
							<div class="image">
								<img class="work-item-image" src="https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb">
							</div>
							<div class="description">
								<p><b>Sony Music Netherlands —</b> A new digital home for Nielson, an artist that reinvented himself.</p>
							</div>
						</div>
						<div class="work-item">
							<div class="image">
								
								<img class="work-item-image" src="https://source.unsplash.com/ITjiVXcwVng/1500x1500">
							</div>
							<div class="description">
								<p><b>BBB Cycling —</b> This is what happens when commerce and emotion collide and come together.</p>
							</div>
						</div>
						<div class="work-item">
							<div class="image">
								<img class="work-item-image" src="https://images.pexels.com/photos/355296/pexels-photo-355296.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb">
							</div>
							<div class="description">
								<p><b>Sony Music Netherlands —</b> A new digital home for Nielson, an artist that reinvented himself.</p>
							</div>
						</div>
						<div class="work-item">
							<div class="image">
								<img class="work-item-image" src="https://images.pexels.com/photos/269176/pexels-photo-269176.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb">
							</div>
							<div class="description">
								<p><b>Sony Music Netherlands —</b> A new digital home for Nielson, an artist that reinvented himself.</p>
							</div>
						</div>
						<div class="work-item">
							<div class="image">
								<img class="work-item-image" src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500">
							</div>
							<div class="description">
								<p><b>Sony Music Netherlands —</b> A new digital home for Nielson, an artist that reinvented himself.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="overlay" class="overlay"></div>
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

// document.addEventListener('DOMContentLoaded', () => {
// 	var workItems = document.getElementsByClassName('work-item');
// 	var overlay = document.getElementById('overlay');

// 	for (var i = 0; i < workItems.length; i++) {
// 		workItems[i].addEventListener('mouseover', overlayColor); 
// 		workItems[i].addEventListener('mouseout', overlayAway);
// 	}

// 	function overlayColor() {
// 		overlay.style.display = 'block';
// 	}
// 	function overlayAway() {
// 		overlay.style.display = 'none'
// 	}
// });


</script>
