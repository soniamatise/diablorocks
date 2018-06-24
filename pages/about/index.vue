<!-- very basic data import -->
<template>
	<main-layout>
		<loader :leave-open="leaveOpen"></loader>

		<section class="intro">
			<h1>About</h1>
		</section>


		<section class="about">
			<p>is a creative digital agency at the cutting edge of trends, technology and contemporary aesthetics.
			We provide innovative, eye-catching solutions that help brands to stand out from the crowd. Our global team is completely focused on you, your branding, your mission and, most importantly, your future. Together, we can create visionary projects that will push boundaries and set your brand apart in the digital era. 
			</p>
		</section>



	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/body/MainLayout.vue';
import Loader from '~/components/animations/Loader';

export default {
	components: {
		MainLayout,
		Loader
	},
	data() {
		return {
			Velocity: this.$velocity,
			displayContent: false,
			// LOADING COMPONENT LEAVE OVERLAY
			leaveOpen: false,
		};
	},
	// LOADING COMPONENT LEAVE OVERLAY
	beforeRouteLeave (to, from , next) {
		this.leaveOpen = true;
		setTimeout(function() {
			next();
		},200);
	},
	methods: {
		showContent: function() {
			let self = this;
			self.displayContent = true;
			let col = document.querySelector('.about');
			self.Velocity(col, { transform: 'translateY(0)' }, 600, [180, 16]);
			setTimeout(function() {
				col.style = '';
				col.classList.add('stay');
			}, 600);
		}
	},
	asyncData() {
	
	}
};
</script>
