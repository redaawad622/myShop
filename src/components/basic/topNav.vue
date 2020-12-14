<template>
	<v-app-bar
		app
		:color="$vuetify.theme.dark ? 'black' : 'white'"
		height="75"
		elevation="0"
		:dark="$vuetify.theme.dark"
	>
		<template v-if="!$vuetify.breakpoint.xs">
			<v-spacer></v-spacer>

			<v-text-field rounded outlined hide-details append-icon="mdi-magnify">
				<template v-slot:label>
					Search on <strong>MYSHOP</strong>
				</template>
			</v-text-field>
			<v-spacer></v-spacer>
		</template>
		<v-badge
			color="red"
			bordered
			:value="productCount"
			:content="productCount"
			overlap
		>
			<v-btn to="/shopCart" :elevation="0">
				<v-icon class="grey--text text--darken-2">mdi-cart</v-icon>
			</v-btn>
		</v-badge>
		<v-spacer v-if="$vuetify.breakpoint.xs"></v-spacer>

		<v-menu bottom left offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn dark icon v-bind="attrs" class="mx-5" v-on="on">
					<v-avatar size="45">
						<v-img
							src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						></v-img>
					</v-avatar>
				</v-btn>
			</template>

			<v-list>
				<v-list-item v-for="(item, i) in items" :key="i" link>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-app-bar>
</template>

<script>
export default {
	name: 'topNav',
	data() {
		return {
			items: [
				{ title: 'Reda Awad' },
				{ title: 'change account' },
				{ title: 'allow notificationd' },
				{ title: 'logout' },
			],
		};
	},
	computed: {
		productCount() {
			return this.$store.getters['cart'].length;
		},
	},
};
</script>
