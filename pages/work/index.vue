
<template>
	<main-layout class="work">
		<div class="row center textCenter intro">
			<div class="column column-8">
				<type-writer delay="250" v-on:doneTyping="showContent">Work</type-writer>
				<p class="content" v-bind:class="{show: displayContent}">Our latest and greatest for brands we believe in.</p>
			</div>
		</div>
<div :class="[this._data.background ,'background-canvas']"></div>
		<section class="work__grid content" v-bind:class="{show: displayContent}">

			<WorkCard
			ref="kalkhoff"
			columnNr="1"
			caseName="kalkhoff"
			size="medium"
			image="http://media-channel.nationalgeographic.com/media/uploads/photos/content/video/2017/04/03/912762947881_912762947881.jpg"
			client="Kalkhoff Bikes"
			description="When your bikes are eye-catchers, your website should be too."
			slug="kalkhoff-bikes"
			v-on:click.native="expand('kalkhoff')"
			v-on:mouseover.native="onHover('kalkhoff')"
			v-on:mouseout.native="notHover('kalkhoff')"/>
			<WorkCard
			ref="aangenaam"
			columnNr="1"
			caseName="aangenaam"
			size="small"
			image="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2017/09/animals_hero_giraffe_1_0.jpg"
			client="Aangenaam Bergen op Zoom"
			description="Original stories from a ‘gezellige’ community."
			slug="aangenaam-bergen-op-zoom"
			v-on:click.native="expand('aangenaam')"
			v-on:mouseover.native="onHover('aangenaam')"
			v-on:mouseout.native="notHover('aangenaam')"/>
			<WorkCard
			ref="expeditiewadden"
			columnNr="1"
			caseName="expeditiewadden"
			size="medium"
			image="http://www.pbs.org/wnet/nature/files/2016/10/giraffe_episode_thumb.jpg"
			client="Expeditie Wadden"
			description="A journey through time and space."
			slug="expeditie-wadden"
			v-on:click.native="expand('expeditiewadden')"
			v-on:mouseover.native="onHover('expeditiewadden')"
			v-on:mouseout.native="notHover('expeditiewadden')"/>

			<WorkCard
			ref="nielson"
			columnNr="2"
			caseName="nielson"
			size="small"
			image="https://lechantelteam.files.wordpress.com/2013/10/giraffe15342.jpg"
			client="Sony Music Netherlands"
			description="A new digital home for Nielson, an artist that reinvented himself."
			slug="nielson-air"
			v-on:click.native="expand('nielson')"
			v-on:mouseover.native="onHover('nielson')"
			v-on:mouseout.native="notHover('nielson')"/>
			<WorkCard
			ref="ticketchaser"
			columnNr="2"
			caseName="ticketchaser"
			size="large"
			image="https://cdn.suwalls.com/wallpapers/funny/giraffe-on-a-tree-trunk-42410-1920x1080.jpg"
			client="Sony Music Netherlands & DVLM"
			description="Scavenger hunts are the future of giveaway campaigns."
			slug="ticketchaser"
			v-on:click.native="expand('ticketchaser')"
			v-on:mouseover.native="onHover('ticketchaser')"
			v-on:mouseout.native="notHover('ticketchaser')"/>
			<WorkCard
			ref="stadsmakelaar"
			columnNr="2"
			caseName="stadsmakelaar"
			size="small"
			image="http://www.wallpapers4u.org/wp-content/uploads/giraffe_sky_muzzle_profile_59848_1920x1080.jpg"
			client="Stadsmakelaar"
			description="Finding the place of your dreams in Bergen op Zoom."
			slug="stadsmakelaar"
			v-on:click.native="expand('stadsmakelaar')"
			v-on:mouseover.native="onHover('stadsmakelaar')"
			v-on:mouseout.native="notHover('stadsmakelaar')"/>

			<WorkCard
			ref="bbbcycling"
			columnNr="3"
			caseName="bbbcycling"
			size="large"
			image="http://www.wallpapers13.com/wp-content/uploads/2016/05/Giraffe-often-feeds-on-pasture-high-shrublands-trees-with-green-leaves-Desktop-Wallpaper-Backgrounds-HD-3840x2400-1920x1080.jpg"
			client="BBB Cycling"
			description="This is what happens when commerce and emotion collide and come together."
			slug="bbb-cycling"
			v-on:click.native="expand('bbbcycling')"
			v-on:mouseover.native="onHover('bbbcycling')"
			v-on:mouseout.native="notHover('bbbcycling')"/>
			<WorkCard
			ref="viacom"
			columnNr="3"
			caseName="viacom"
			size="medium"
			image="http://www.hartvannederland.nl/wp-content/uploads/2017/03/baby-olifant-in-amersfoort-krijgt-naam-yunha.jpg"
			client="Viacom Out of Office"
			description="Getting your out of office as fun as actually being out of office."
			slug="viacom-out-of-office"
			v-on:click.native="expand('viacom')"
			v-on:mouseover.native="onHover('viacom')"
			v-on:mouseout.native="notHover('viacom')"/>
			<WorkCard
			ref="natwerk"
			columnNr="3"
			caseName="natwerk"
			size="large"
			image="https://www.leeghwater.nl/f/files/showimage?f=vereniging/olifanten/baby-olifant-3.jpg"
			client="Natwerk"
			description="I GIF this website a 10/10."
			slug="natwerk"
			v-on:click.native="expand('natwerk')"
			v-on:mouseover.native="onHover('natwerk')"
			v-on:mouseout.native="notHover('natwerk')"/>

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
			displayContent: false,
			background: null,
			click: false
		}
	},
	methods: {
		showContent: function(){
			this.displayContent = true;
		},
		expand: function(item){
			if (this.displayContent = true){
				this.$refs[item].expandCard(this.$refs[item]);
				this._data.background = `bg-${item} expandBackground`;
				this._data.click = true;
			}
		},
		onHover: function(item){
			if (this.displayContent = true){
				this.$refs[item].doHover(item);
				if (this._data.click == false) {
					this._data.background = `bg-${item} background--forward`;
				}
			}
		},
		notHover: function(item){
			this.$refs[item].dontHover(item);
			if (this._data.click == false) {
				this._data.background = '';
			}
		}
	}
}

</script>
