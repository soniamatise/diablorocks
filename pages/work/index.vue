
<template>
	<main-layout class="work">
		<div class="row center textCenter intro">
			<div class="column column-8">
				<type-writer delay="250" v-on:doneTyping="showContent">Work</type-writer>
				<p class="content" v-bind:class="{show: displayContent}">Our latest and greatest for brands we believe in.</p>
			</div>
		</div>
<div :class="[this._data.background ,'background-canvas']" :style="style"></div>
		<section class="work__grid content" v-bind:class="{show: displayContent}">

			<WorkCard v-for="value in cases" :key="value.id"
				:ref="value.slug"
				:columnNr="value.id"
				:caseName="value.slug"
				size="medium"
				:image="value._embedded['wp:featuredmedia'][0].source_url"
				:client="value.client_name"
				:description="value.case_description"
				:slug="value.slug"
				:color="value.case_background_color"
				v-on:click.native="expand(value.slug)"
				v-on:mouseover.native="onHover(value.slug)"
				v-on:mouseout.native="notHover(value.slug)"
			></workCard>

		</section>

		<next-case
			leftText="It’s not all work"
			caseName="Find out who we are"
		/>

	</main-layout>
</template>

<script>
import axios from 'axios'

import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
import TypeWriter from '~/components/TypeWriter.vue'
import NextCase from '~/components/NextCase.vue'
import WorkCard from '@/components/WorkCard'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		TypeWriter,
		NextCase,
		WorkCard
	},
	data() {
		return {
			displayContent: false,
			background: null,
			click: false,
			style: { backgroundColor: '#ffffff' }
		}
	},
	methods: {
		showContent: function(){
			this.displayContent = true;
		},
		expand: function(item){
			let workCard = this.$refs[item][0];
			if (this.displayContent = true){
				workCard.expandCard(workCard);
				this._data.background = `bg-${item} expandBackground`;
				this._data.click = true;
			}
		},
		onHover: function(item){
			if (this.displayContent = true){
				let workCard = this.$refs[item][0];
				this.style.backgroundColor = workCard.color;
				workCard.doHover(item);

				if (this._data.click == false) {
					this._data.background = `bg-${item} background--forward`;
				}
			}
		},
		notHover: function(item){
			let workCard = this.$refs[item][0];
			workCard.dontHover(item);
			if (this._data.click == false) {
				this._data.background = '';
			}
		}
	},
	asyncData ({ params }) {
    return axios.get(`${process.env.baseUrl}/case?_embed`)
    .then((res) => {
			return {
				cases: res.data
			}
    })
  },
}

</script>
