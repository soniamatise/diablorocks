<template>
	<main-layout class="work" ref="mainLayout" style="background-color: var(--current-background-color">
		<section class="intro">
			<h1>Work</h1>
		</section>

		<section ref="workGrid" class="row work__grid content" v-if="cases.length > 0">
			<card
				v-for="(item, index) in cases"
				:release="index"
				:key="item.ID"
				:data="item"
				class="case column small-full medium-half large-third" />
		</section>
	</main-layout>
</template>

<script>
import axios from 'axios';
import MainLayout from "~/layouts/body/MainLayout";
import OneColumn from "~/components/work/OneColumn";
import TwoColumn from "~/components/work/TwoColumn";
import Card from "~/components/work/Card";

export default {
	components: {
		OneColumn,
		TwoColumn,
		MainLayout,
		Card
	},
	data() {
		return {
			Velocity: this.$velocity,
			cases: []
		};
	},
	watch: {
		cases: function() {
			console.log(this.cases);
			// console.log("cases is loaded");
		}
	},
	created() {
		axios
			.get(`${process.env.baseUrl}/page/cases`)
			.then(response => {
				this.cases = response.data;
			})
			.catch(e => {
				this.errors.push(e);
			});
	},
	mounted() {
		
	},
	methods: {
		showContent: function() {}
	}
};
</script>
