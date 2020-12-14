<template>
	<div class="home">
		<v-container>
			<h2 class="text-uppercase mt-5">Sales</h2>
			<p class="text-capitalize">
				a greate way to generate all the motivation you need to get fit
			</p>
			<v-tabs>
				<v-tab>Fulfillment Status View</v-tab>
				<v-tab>Real Time Tracking</v-tab>
				<v-tab>Sales View</v-tab>
				<v-tab>Balances</v-tab>
				<v-tab>Transaction</v-tab>
				<v-tab>Rate</v-tab>
			</v-tabs>
			<v-divider class="divider"></v-divider>

			<products></products>
		</v-container>
	</div>
</template>

<script>
import products from '../components/app/products.vue';

export default {
	components: { products },
	name: 'Home',
};
</script>

<style lang="scss" scoped>
.divider {
	border-width: 2px 0 0 0;
	position: relative;
	top: -2px;
}
</style>
