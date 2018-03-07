<template>
<div>
	<top-nav></top-nav>
	<main-layout>
		<h1 class="dark">Work</h1>
		<h1 class="light">Work</h1>
		<h2 class="dark"><span>Our latest and greatest</span> for brands we believe in.</h2>
		<h2 class="light">Our latest and greatest for brands we believe in.</h2>
		<h3 class="dark">Heading 3 Dark</h3>
		<h3 class="light">Heading 3 Light</h3>
		<h4 class="dark">Sony music <span> — A new digital home for Nielson, an artist that reinvented himself.</span></h4>
		<p class="dark">Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. Sit amet tellus cras adipiscing enim eu turpis egestas.</p>
		<p class="light">Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. Sit amet tellus cras adipiscing enim eu turpis egestas.</p>
		<p class="gray">Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. Sit amet tellus cras adipiscing enim eu turpis egestas.</p>
		<ol>
			<li class="regular">list item 1</li>
			<li class="medium">list <span class="gray">item 1</span></li>
			<li class="regular">list item 1</li>
			<li class="medium">list item 1</li>
		</ol>
	</main-layout>
	<footer-element></footer-element>
</div>
</template>

<script>
/* eslint-disable */
import TopNav from '../layouts/TopNav.vue'
import FooterElement from '../layouts/FooterElement.vue'
export default {
	components: {
		TopNav,
		FooterElement
	}
}
</script>
