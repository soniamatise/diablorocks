<template>
	<div class="card__holder">
		<div class="card">
			<div :class="['card__image',item.imageSize]" :style="{ 'background-image': 'url(' + item.image + ')' }" >
			</div>
			<div class="card__content">
				<h4><strong>{{ item.title }}</strong> &mdash; {{ item.description }}</h4>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["data"],
	data() {
		return {
			item: {}
		};
	},
	created() {
		if (this.$props.data) {
			// console.log(this.$props.data);
			this.item.description = this.$props.data.case_description;
			this.item.title = this.$props.data.client_name;
			this.item.image = this.$props.data.case_image;
			this.item.imageSize = this.$props.data.case_size;
		}
	},
	mounted() {
		
	}
};
</script>

<style lang="scss">
@import "~henris/ext";

.row {
	counter-reset: countIt;
}
.card {
	display: block;
	width: 100%;
	&__holder {
		display: block;
		position: relative;
		transition: transform 0.2s;
		backface-visibility: hidden;
		will-change: transform;
		padding: grid(0.5);

		&:nth-child(1) {
			margin-top: grid(0.5);
		}
		&:nth-child(2) {
			margin-top: grid(1);
		}

		/* Every first item  */
		&:nth-child(4n + 1) {
			.card__image {
				padding-bottom: 130%;
			}
		}
		/* Every second item  */
		&:nth-child(4n + 2) {
			.card__image {
				padding-bottom: 110%;
			}
		}
		/* Every second item  */
		&:nth-child(4n + 3) {
			.card__image {
				padding-bottom: 110%;
			}
		} /* Every second item  */
		&:nth-child(4n + 4) {
			.card__image {
				padding-bottom: 90%;
			}
		}
		// /* Every third item  */
		// &:nth-child(3n + 3) {
		// 	border: 2px solid purple;
		// 	.card__image {
		// 		padding-bottom: 150%;
		// 	}
		// }

		// counter-increment: countIt;
		// &:before {
		// 	content: counter(countIt);
		// 	display: block;
		// 	position: absolute;
		// 	left: 0px;
		// 	width: 2rem;
		// 	top: 0;
		// 	height: 2rem;
		// 	color: white;
		// 	line-height: 2rem;
		// 	text-align: center;
		// 	background-color: red;
		// }
	}
	&__image {
		display: block;
		width: 100%;
		height: 0;
		padding-bottom: 25%;
		overflow: hidden;
		background-size: cover;
		// &.portrait {
		// 	padding-bottom: 150%;
		// }
		// &.landscape {
		// 	padding-bottom: 100%;
		// }
		// &.square {
		// 	padding-bottom: 50%;
		// }
	}
	&__content {
		padding: grid(0.5);
	}
}
</style>
