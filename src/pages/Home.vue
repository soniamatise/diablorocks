<template>
<div>
	<top-nav></top-nav>
		<h1 class="dark">H1 Work</h1>
		<h1 class="light">H1 Work</h1>
		<h2 class="centered dark">Our latest and greatest for brands we believe in.</h2>
		<h2 class="centered light"><span>Next case</span> Aangenaam Bergen op Zoom</h2>
		<h2 class="light">H2 Our latest and greatest for brands we believe in.</h2>
		<h3 class="light">Heading 3 Light</h3>
		<h4 class="dark"><span>H4 Sony music</span> A new digital home for Nielson, an artist that reinvented himself.</h4>
		<h3 class="dark">Heading 3 Dark</h3>
		<p><span>Emotion</span> This was the key for the product page. By adding an exquisite product slider, super zoom, video’s and lifestyle photography we made sure we seduced the user.</p>
		<p class="dark">p Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. Sit amet tellus cras adipiscing enim eu turpis egestas.</p>
		<p class="light">p Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. Sit amet tellus cras adipiscing enim eu turpis egestas.</p>
		<p class="gray">Learn how Matise guaranteed top-notch front-end development, without actually developing. Read Sil van Diepen’s article</p>
		<ol>
			<li class="regular">Client <span class="gray">BBB Cycling</span></li>
		</ol>
		<h2>Not your average Digital Agency.</h2>
		<ul>
			<li class="regular">Client <span>BBB</span> Cycling</li>
		</ul>
		<blockquote>BBB Cycling is ready for tomorrow. Their products, and their revised philosophy are built on the future of cycling. Now their website is too.</blockquote>
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
