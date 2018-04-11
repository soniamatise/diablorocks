<template>
	<main-layout class="work">

		<section class="intro">
			<type-writer
			heading="Werk werk werk"
			sub="Our latest and greatest for brands we believe in."
			v-on:doneTyping="showContent"
			/>
		</section>

		<div :class="[this._data.background ,'background-canvas']" :style="style"></div>

		<section class="work__grid content" v-bind:class="{displayContent: displayContent}">
			<WorkCard v-for="value in cases" :key="value.id"
				:ref="value.slug"
				:caseName="value.slug"
				:image="value._embedded['wp:featuredmedia'][0].source_url"
				:client="value.client_name"
				:description="value.case_description"
				:slug="value.slug"
				:color="value.case_background_color"
				v-on:click.native="expand(value.slug)"
				v-on:mouseover.native="onHover(value.slug)"
				v-on:mouseout.native="notHover(value.slug)"
			/>


		</section>

		<next-case
			leftText="It’s not all work"
			caseName="Find out who we are"
		/>

	</main-layout>
</template>

<script>
import axios from 'axios'

import MainLayout from '~/layouts/MainLayout'
import OneColumn from '~/layouts/OneColumn'
import TwoColumn from '~/layouts/TwoColumn'
import PayoffCredits from '~/layouts/PayoffCredits'
import TypeWriter from '~/components/TypeWriter'
import NextCase from '~/components/NextCase'
import WorkCard from '@/components/WorkCard'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		TypeWriter,
		NextCase,
		WorkCard,
	},
	data() {
		return {
			displayContent: false,
			background: null,
			click: false,
			style: { '--background': '#ffffff' },
			caseCount: null
		}
	},
	methods: {
		showContent: function(){
			this.displayContent = true;
			this.countCases();
		},
		countCases: function(){
			let workCard = this.$refs[this.cases[0].slug];
			const caseCount = this.cases.length;
			workCard[0].checkCaseCount(caseCount);
		},
		expand: function(item){
			let workCard = this.$refs[item][0];
			if (this.displayContent = true){
				workCard.expandCard(workCard);
				this._data.background = `expandBackground`;
				this._data.click = true;
			}
		},
		onHover: function(item){
			if (this.displayContent = true){
				let workCard = this.$refs[item][0];
				this.style = `--background: ${workCard.color}`;
				workCard.doHover(item);

				if (this._data.click == false) {
					this._data.background = `background--forward`;
				}
			}
		},
		notHover: function(item){
			let workCard = this.$refs[item][0];
			workCard.dontHover(item);
			if (this._data.click == false) {
				this._data.background = '';
			}
		},

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
