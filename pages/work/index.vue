<template>
	<main-layout class="work">

		<section class="intro">
			<type-writer
			heading="Work"
			sub="Our latest and greatest for brands we believe in."
			v-on:doneTyping="showContent"
			/>
		</section>

		<div :class="[background ,'background__canvas', {'background__canvas--mouseout': mouseout} ]" :style="style"></div>
		<section class="work__grid content">
			<div class="work__grid__column work__grid--column1">
				<WorkCard v-for="value in allCases" v-if="value.column == 1" :key="value.id"
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
				<WorkCard v-for="value in allCases" v-if="value.column == 2" :key="value.id"
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
				<WorkCard v-for="value in allCases" v-if="value.column == 3" :key="value.id"
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
				allCases: '',
				windowWidth: '',
				mouseout: false
			}
		},
		methods: {
			showContent: function(){
				let self = this;
				self.displayContent = true;
				let col = document.querySelector('.work__grid');
				self.Velocity(col, { transform: 'translateY(0)' }, 600, [180, 16]);
				setTimeout(function () {
					col.style = '';
					col.classList.add('stay');
				}, 600)

			},
			expand: function(item){
				var self = this;
				let workCard = self.$refs[item][0];

				if (self.displayContent = true){
					workCard.expandCard(workCard);
					// Add expand classes to change background
					self._data.background = `background__canvas--expand`;
					self._data.click = true;
					//go to work detail
					setTimeout(()=>{
						self.$router.push(`work/${workCard.slug}`);
					},2400);
				}
			},
			onHover: function(item){
				let self = this;
				if (self.displayContent = true){
					let workCard = self.$refs[item][0];
					self.style = `--background: ${workCard.color}`;
					workCard.doHover(item);
					let canvas = document.querySelector('.background__canvas--mouseout');
					if (self._data.click == false && !self._data.mouseout) {
						self._data.background = `background__canvas--forward`;
					} else {
						setTimeout(function() {
							self._data.background = `background__canvas--forward`;
						}, 300)
					}
				}
			},
			notHover: function(item){
				let self = this;
				let workCard = self.$refs[item][0];
				workCard.dontHover(item);
				if (self._data.click == false) {
					self._data.background = '';
				}
				self._data.mouseout = true;
				setTimeout(function(){
					self._data.mouseout = false;
				}, 300)
			},
			disCases: function(columns, cases) {
				let self = this;
				let counter = 0;
				let classCounter = 0;
				cases.forEach(function(workCard){
					let itemsInRow = Math.ceil(cases.length / columns);
					if (columns == 1) { //check if there is only one column
						self.$set(workCard, 'column', 1);
						workCard.size = 'small'; //set size
					} else {
						if (counter <= (itemsInRow - 1)) {
							self.$set(workCard, 'column', 1);

							let classes = self._data.class1; // get classes for column
							if (classCounter !== classes.length) { //check if there are classes left to give
								workCard.size = classes[classCounter];
							} else { // start array again
								classCounter = 0;
								workCard.size = classes[classCounter];
							}
							counter++;
							classCounter++;
						} else if (counter > (itemsInRow - 1) && counter <= ((itemsInRow * 2) - 1)) {
							self.$set(workCard, 'column', 2);
							let classes = self._data.class2; // get classes for column
							if (counter == itemsInRow) { //check if it's the first element of the column
							classCounter = 0;
						}
						if (classCounter !== classes.length) { //check if there are classes left to give
							workCard.size = classes[classCounter];
						} else { // start array again
							classCounter = 0;
							workCard.size = classes[classCounter];
						}
						counter++;
						classCounter++;
					} else {
						self.$set(workCard, 'column', 3);

						let classes = self._data.class3; // get classes for column
						if (counter == itemsInRow) { //check if it's the first element of the column
							classCounter = 0;
						}
						if (classCounter !== classes.length) { //check if there are classes left to give
							workCard.size = classes[classCounter];
						} else { // start array again
							classCounter = 0;
							workCard.size = classes[classCounter];
						}
						counter++;
						classCounter++;
					}
				}
			});
		}
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
		let columns;
		let savedWidth = window.innerWidth;
		let cases = self._data.cases;

		let checkWidth = function(viewWidth, savedWidth){
			if (viewWidth < 750 && savedWidth != 750){
				columns = 1;
				self.disCases(columns, cases);
			} else if ((window.innerWidth < 960 && window.innerWidth > 750) && savedWidth != 960){
				columns = 2;
				self.disCases(columns, cases);
			} else {
				columns = 3;
				self.disCases(columns, cases);
			}
		}
		window.addEventListener('resize', function(){
			let viewWidth = window.innerWidth;
			checkWidth(viewWidth, savedWidth);
		});
		checkWidth(savedWidth, savedWidth);
		self._data.allCases = cases;
	}
}

</script>
