<template>
	<v-app>
		<nav-drawer></nav-drawer>
		<top-nav></top-nav>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import NavDrawer from './components/basic/navDrawer.vue';
import topNav from './components/basic/topNav.vue';

export default {
	components: { topNav, NavDrawer },
	name: 'App',
};
</script>
