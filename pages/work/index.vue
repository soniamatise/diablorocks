<template>
	<main-layout class="work">

		<section class="intro">
			<type-writer
			heading="Work"
			sub="Our latest and greatest for brands we believe in."
			v-on:doneTyping="showContent"
			/>
		</section>


		<div :class="[this._data.background ,'background-canvas']" :style="style"></div>
		<section class="work__grid content">
			<div class="work__grid__column work__grid--column1">
				<WorkCard v-for="value in cases1" :key="value.id"
					:ref="value.slug"
					:image="value._embedded['wp:featuredmedia'][0].source_url"
					:caseName="value.slug"
					:size="value.size"
					:columnNr="value.column"
					:client="value.client_name"
					:description="value.case_description"
					:slug="value.slug"
					:color="value.case_background_color"
					v-on:click.native="expand(value.slug)"
					v-on:mouseover.native="onHover(value.slug)"
					v-on:mouseout.native="notHover(value.slug)"
				/>
			</div>
			<div class="work__grid__column work__grid--column2">
				<WorkCard v-for="value in cases2" :key="value.id"
					:ref="value.slug"
					:caseName="value.slug"
					:image="value._embedded['wp:featuredmedia'][0].source_url"
					:size="value.size"
					:columnNr="value.column"
					:client="value.client_name"
					:description="value.case_description"
					:slug="value.slug"
					:color="value.case_background_color"
					v-on:click.native="expand(value.slug)"
					v-on:mouseover.native="onHover(value.slug)"
					v-on:mouseout.native="notHover(value.slug)"
				/>
			</div>
			<div class="work__grid__column work__grid--column3">
				<WorkCard v-for="value in cases3" :key="value.id"
					:ref="value.slug"
					:caseName="value.slug"
					:image="value._embedded['wp:featuredmedia'][0].source_url"
					:size="value.size"
					:columnNr="value.column"
					:client="value.client_name"
					:description="value.case_description"
					:slug="value.slug"
					:color="value.case_background_color"
					v-on:click.native="expand(value.slug)"
					v-on:mouseover.native="onHover(value.slug)"
					v-on:mouseout.native="notHover(value.slug)"
				/>
			</div>
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
			Velocity: this.$velocity,
			displayContent: false,
			background: null,
			click: false,
			style: { '--background': '#ffffff' },
			caseCount: null,
			class1: ['medium', 'small'],
			class2: ['small', 'large'],
			class3: ['large', 'medium'],
			cases1: [],
			cases2: [],
			cases3: []
		}
	},
	methods: {
		showContent: function(){
			let self = this;
			self.displayContent = true;
			let col = document.querySelector('.work__grid');
			console.log(col);
			self.Velocity(col, { transform: 'translateY(0)' }, 600, [180, 16]);
			setTimeout(function () {
				col.style = '';
				col.classList.add('stay');
			},600)

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
    return axios.get(`${process.env.baseUrl}/wp/v2/case?_embed`)
    .then((res) => {
			return {
				cases: res.data
			}
    })
  },
	mounted(){
		let self = this;
		let	columns = Math.ceil(self._data.cases.length / 3);
		let counter = 0;
		let counter2 = 0;
		let counter3 = 0;
		for (let i = 0; i < self._data.cases.length ; i++){
			if(i <= (columns - 1)){
				self._data.cases1.push(self._data.cases[i]);
				let classes = self._data.class1;
				self._data.cases[i].column = 1;
				if (counter > (classes.length - 1)) {
					self._data.cases[i].size = classes[0];
				} else {
					self._data.cases[i].size = classes[counter];
				}
				counter++;

			} else if(i > (columns - 1) && i <= ((columns * 2) - 1)){
				self._data.cases2.push(self._data.cases[i]);
				let classes = self._data.class2;
				self._data.cases[i].column = 2;
				if (counter2 > (classes.length - 1)) {
					self._data.cases[i].size = classes[counter2];
				} else {
					self._data.cases[i].size = classes[0];
				}
				counter2++;

			} else {
				self._data.cases3.push(self._data.cases[i]);

				let classes = self._data.class3;
				self._data.cases[i].column = 3;
				if (counter3 > (classes.length)) {
					self._data.cases[i].size = classes[counter3];
				} else {
					self._data.cases[i].size = classes[0];
				}
				counter3++;
			}
		}
	}
}

</script>
