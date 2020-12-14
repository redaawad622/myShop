<template>
	<v-list-item>
		<v-list-item-avatar size="90">
			<v-img :src="product.image"></v-img>
		</v-list-item-avatar>

		<v-list-item-content>
			<v-list-item-title
				class="title"
				v-html="product.name"
			></v-list-item-title>
			<v-list-item-subtitle
				class="caption"
				v-html="product.id"
			></v-list-item-subtitle>
		</v-list-item-content>
		<div class="d-flex justify-center align-center">
			<v-btn class="font-weight-bold title" icon @click="changeCount('d')"
				>-</v-btn
			>
			<div class="counter  pa-1 mx-1">{{ product.count }}</div>
			<v-btn class="font-weight-bold title" icon @click="changeCount('i')"
				>+</v-btn
			>
			<div class="title font-weight-bold mx-8">
				${{ product.price * product.count }}
			</div>
		</div>

		<v-list-item-action>
			<v-btn icon @click="remove"><v-icon>mdi-close</v-icon></v-btn>
		</v-list-item-action>
	</v-list-item>
</template>

<script>
export default {
	name: 'cartItem',
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	methods: {
		changeCount(type) {
			this.$store.commit('changeCount', { type: type, id: this.product.id });
		},
		remove() {
			this.$store.commit('remove', this.product.id);
		},
	},
};
</script>

<style lang="scss" scoped>
.counter {
	border: 1px solid grey;
	width: 50px;
	border-radius: 5px;
	text-align: center;
}
</style>
