<template>
	<v-navigation-drawer
		:permanent="!$vuetify.breakpoint.xs"
		app
		mini-variant
		:mini-variant-width="120"
		class="drawer"
	>
		<div class="d-flex flex-column  h-100">
			<v-list-item class="flex-none">
				<v-list-item-content class="flex-none">
					<logo></logo>
				</v-list-item-content>
			</v-list-item>
			<v-spacer></v-spacer>
			<v-list dense nav :class="{ darkColor: $vuetify.theme.dark }">
				<v-list-item v-for="item in items" :key="item.title">
					<v-list-item-icon>
						<v-btn
							icon
							fab
							small
							link
							:to="item.link"
							:color="$vuetify.theme.dark ? 'primary' : 'default'"
						>
							<v-icon
								:color="$vuetify.theme.dark ? 'white' : 'default'"
								>{{ item.icon }}</v-icon
							></v-btn
						>
					</v-list-item-icon>
				</v-list-item>
			</v-list>
			<v-spacer></v-spacer>
			<v-list-item class="flex-none">
				<v-list-item-icon>
					<v-btn icon @click="toggleTheme"
						><v-icon>mdi-white-balance-sunny</v-icon></v-btn
					>
				</v-list-item-icon>
			</v-list-item>
		</div>
	</v-navigation-drawer>
</template>

<script>
import Logo from '../publicComponent/logo.vue';
export default {
	name: 'navDrawer',
	components: { Logo },
	data: () => ({
		items: [
			{ title: 'Dashboard', icon: 'mdi-store', link: '/' },
			{ title: 'shoe', icon: 'mdi-shoe-heel', link: '/shoe' },
			{ title: 'cash', icon: 'mdi-cash-usd', link: '/cash' },
			{ title: 'cartCheck', icon: 'mdi-cart', link: '/shopCart' },
			{ title: 'settings', icon: 'mdi-cogs', link: 'settings' },
		],
	}),
	methods: {
		toggleTheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
			this.$vuetify.theme.themes.dark.primary = '#2D7AEE';
		},
	},
};
</script>

<style lang="scss" scoped>
.drawer {
	.flex-none {
		flex: none;
	}
	.h-100 {
		height: 100%;
	}
	.v-list {
		background-color: #f6f6f6 !important;
		border-radius: 20px;
		width: 60%;
		margin-left: 20%;
	}
	.darkColor {
		background-color: #151515 !important;
	}
}
</style>
