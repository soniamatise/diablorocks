<template>
	<main-layout class="work" ref="mainLayout" style="background-color: var(--current-background-color">

		<section class="intro">
			<type-writer
				heading="Work"
				sub="Our latest and greatest for brands we believe in."
				@doneTyping="showContent"
			/>
		</section>

		<section ref="workGrid" class="row work__grid content" v-if="cases.length > 0">
			<card 
				v-for="(item, index) in cases" 
				v-inview="{ increase: index }"
				:release="index"
				:key="item.ID" 
				:data="item" 
				class="case column small-full medium-half large-third" />
		</section>

		<next-case
			left-text="It’s not all work"
			case-name="Find out who we are"
		/>
	</main-layout>
</template>

<script>
import axios from "axios";

import MainLayout from "~/layouts/body/MainLayout";
import OneColumn from "~/components/work/OneColumn";
import TwoColumn from "~/components/work/TwoColumn";
import PayoffCredits from "~/components/work/PayoffCredits";
import TypeWriter from "~/components/animations/TypeWriter";
import NextCase from "~/components/work/NextCase";
import Card from "~/components/work/Card";
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
	mounted() {},
	methods: {
		setBackgroundcolor: function(color) {
			console.log(color);
			this.$refs.mainLayout.style.setProperty(
				"--current-background-color",
				color
			);
		},
		showContent: function() {}
	}
};
</script>
<style lang="scss">
@import "~svd-style/ext";
.case {
	padding: grid(0.5);
	&__holder {
	}
}
// @for $i from 1 through 200 {
// 	$j: ($i - 50);
// 	[data-inparent="#{$j}"] {
// 		$value: 0;

// 		// @debug $j;
// 		@if $j > -1 {
// 			// @debug $j;
// 			// @debug percentage($j * 0.01);
// 			$value: (percentage($j * 0.01));
// 			// 	$value: percentage(1 / ($j - 50));
// 		}
// 		transform: translateY($value);
// 	}
// }
.work {
	&__grid {
		padding: grid(1.5);
		align-items: center;

		// .case {
		// 	opacity: 1;
		// 	transition: opacity 0.3s;
		// }
		// &:hover {
		// 	.case {
		// 		opacity: 0.5;
		// 		&:hover {
		// 			opacity: 1;
		// 		}
		// 	}
		// }
	}
}
</style>
