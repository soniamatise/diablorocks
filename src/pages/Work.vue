<template>
	<main-layout>
		<section class="work">
			<div class="row center textCenter intro">
				<div class="column column-8">
					<h1 class="title line-1 anim-typewriter" id="title"></h1>
					<p class="content">Our latest and greatest for brands we believe in.</p>
				</div>
			</div>
			<div class="row center content">
				<div class="column column-20">
					<div class="work-items">
						<div class="work-item">
							<div class="image">
								<img id="text" class="work-item-image" src="../assets/images/test/test1.jpg">
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
					<div id="overlay" class="overlay hidden"></div>
					<canvas id="myCanvas"></canvas>
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
	var workItems = document.getElementsByClassName('work-item');
	var overlay = document.getElementById('overlay');
	var Enabled = true;

	function overlayColor() {
		if (Enabled == true) {
			overlay.classList.remove('hidden');
			setTimeout(function(){ overlay.style.opacity = 0.9; }, 100);
			this.style.zIndex = '4';
		} else {
			overlay.style.opacity = 1; 
			overlay.classList.remove('hidden');
		}
	}
	function overlayAway() {
		if (Enabled == true) {
			overlay.style.opacity = 0; 
			overlay.classList.add('hidden');
			this.style.zIndex = '1';
		} else {
			overlay.style.opacity = 1; 
			overlay.classList.remove('hidden');
		}
	}
	function awesomeRotation() {
		Enabled = false;
		this.setAttribute('id', 'active');
		this.classList.add('animation'); 
		overlay.style.opacity = '1';
		overlay.classList.remove('hidden');
	}

	for (var i = 0; i < workItems.length; i++) {
		workItems[i].addEventListener('mouseover', overlayColor); 
		workItems[i].addEventListener('mouseout', overlayAway);
		workItems[i].addEventListener('click', awesomeRotation);
	}
	
});

// TYPEWRITER
window.onload = function() {
	var dataText = 'Work';
	var content = document.querySelectorAll('.content');

	function typeWriter(text, i, fnCallback) {
		if (i < (text.length)) {
			document.getElementById('title').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" id="typestroke"></span>';

			setTimeout(function() {
				typeWriter(text, i + 1, fnCallback)
			}, 250);
		}
		else if (typeof fnCallback == 'function') {
			var typestroke = document.getElementById('typestroke');
			var index = 0, length = content.length;
			for ( ; index < length; index++) {
				content[index].style.opacity = '1';
			}
			typestroke.style.border = 'white';
		}
	}
	function StartTextAnimation() {
		typeWriter(dataText, 0, function(){
			StartTextAnimation();
		});
	}
	StartTextAnimation();
}

</script>
