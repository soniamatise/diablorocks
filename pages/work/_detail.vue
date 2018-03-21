<template>
	<main-layout>
		<h1>Hoi</h1>
		<payoff-credits></payoff-credits>
		<one-column></one-column>
		<two-column></two-column>
	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/MainLayout.vue'
import OneColumn from '~/layouts/OneColumn.vue'
import TwoColumn from '~/layouts/TwoColumn.vue'
import PayoffCredits from '~/layouts/PayoffCredits.vue'
export default {
	components: {
		OneColumn,
		TwoColumn,
		PayoffCredits,
		MainLayout
	}
}
</script>
