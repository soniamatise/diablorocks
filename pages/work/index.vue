<template>
	<main-layout class="work" ref="mainLayout" style="background-color: var(--current-background-color">

		<section class="intro">
			<type-writer
				heading="Work"
				sub="Our latest and greatest for brands we believe in."
				@doneTyping="showContent"
			/>
		</section>

		<div class="background__canvas" ref="backgroundCanvas"></div>

		<section ref="workGrid" class="row work__grid content" v-if="cases.length > 0">
			<card
				v-for="(item, index) in cases"
				v-inview="{ increase: index }"
				:release="index"
				:key="item.ID"
				:data="item"
				@changeBackground="changeBackground"
				class="case column small-full medium-half large-third" />
		</section>

		<next-case
			left-text="It’s not all work"
			case-name="Find out who we are"
		/>
	</main-layout>
</template>

<script>
import axios from 'axios';

import MainLayout from "~/layouts/body/MainLayout";
import OneColumn from "~/components/work/OneColumn";
import TwoColumn from "~/components/work/TwoColumn";
import TypeWriter from "~/components/animations/TypeWriter";
import Card from "~/components/work/Card";

const PayoffCredits = () => import ("~/components/work/PayoffCredits");
const NextCase = () => import ("~/components/work/NextCase");

export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout,
		TypeWriter,
		NextCase,
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
			console.log("cases is loaded");
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
		this.backgroundCanvas = this.$refs.backgroundCanvas;
	},
	methods: {
		setBackgroundcolor: function(color) {
			console.log(color);
			this.$refs.mainLayout.style.setProperty(
				"--current-background-color",
				color
			);
		},
		changeBackground: function(caseColor, mouseEvent) {
			// Function for animating the background element based on the event

			if(mouseEvent === 'mouseover') {
				TweenMax.to(this.backgroundCanvas, .6, {
					backgroundColor: caseColor,
					opacity: .9
				});
			}	else if(mouseEvent === 'mouseleave') {
				TweenMax.to(this.backgroundCanvas, .6, {
					opacity: 0,
					clearProps: 'backgroundColor'
				});
			} else if(mouseEvent === 'pageTransition') {
				console.log('Transition started');
				TweenMax.to(this.backgroundCanvas, 1, {
					backgroundColor: caseColor,
					opacity: 1
				});
			}
		},
		showContent: function() {}
	}
};
</script>

<style lang="scss">
@import "~henris/ext";
.case {
	padding: grid(0.5);
	&__holder {
	}
}
.work {
	&__grid {
		padding: grid(1.5);
		align-items: center;
	}
}
</style>
