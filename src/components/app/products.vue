<template>
	<v-row>
		<v-col
			v-for="product in products"
			:key="product.id"
			:lg="3"
			:md="4"
			:sm="6"
			:xs="12"
		>
			<product-item :product="product"></product-item>
		</v-col>
	</v-row>
</template>

<script>
import productItem from './productItem.vue';
export default {
	components: { productItem },
	name: 'products',
	computed: {
		products() {
			return this.$store.getters['products'];
		},
	},
};
</script>

<style></style>
