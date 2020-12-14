<template>
	<v-card class="mx-auto my-12">
		<v-img height="180" :src="product.image"></v-img>
		<div class="stateBar">
			<v-img
				height="60"
				width="60"
				class="smallImage"
				:src="product.image"
			></v-img>
			<div class="priceDiv ">
				<v-list-item-title
					class="price pt-1"
					:class="{ darkItem: $vuetify.theme.dark }"
					>${{ product.price }}</v-list-item-title
				>
				<v-btn color="success" tile text height="30px" @click="addToCart"
					>hold</v-btn
				>
			</div>
		</div>

		<div class="body-2 mt-11 px-4 grey--text text--darken-1">
			ID: {{ product.id }}
		</div>
		<div class="caption mt-5 px-4 grey--text text--darken-2">
			{{ product.date }}
		</div>
		<v-card-title class="py-0 text-capitalize">{{
			product.name
		}}</v-card-title>

		<v-card-text>
			<v-row align="center" class="mx-0">
				<v-rating
					:value="4.5"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>

				<div class="grey--text ml-4">
					4.5 (413)
				</div>
			</v-row>
		</v-card-text>

		<v-card-text class="d-flex justify-space-between align-center">
			<v-chip-group active-class="deep-purple accent-4 white--text" column>
				<v-chip
					v-for="(item, index) in product.hashs"
					:key="`item${index}`"
					>{{ item }}</v-chip
				>
			</v-chip-group>
			<v-avatar size="45">
				<v-img :src="product.user"></v-img>
			</v-avatar>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: 'productItem',
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	methods: {
		addToCart() {
			this.$store.commit('addToCart', this.product);
		},
	},
};
</script>

<style lang="scss" scoped>
.stateBar {
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 150px;
	width: 100%;
	padding: 0 10px;
	.smallImage {
		border-radius: 10px;
		flex: none;
	}
	.priceDiv {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10px;
		overflow: hidden;
		.price {
			height: 30px;
			background: #fff;
			width: 100%;
			text-align: center;
			&.darkItem {
				background: #000;
			}
		}

		button {
			background: rgb(76 175 80 / 20%) !important;
		}
	}
}
</style>
