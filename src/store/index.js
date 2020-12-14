import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [
			{
				id: 'vsv32rj23nj535j4b5b3',
				name: 'shoes anne',
				hashs: ['#shoes', '#clothes'],
				image:
					'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				date: '04.11.2020 3:30AM',
				user:
					'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				price: 12,
			},
			{
				id: 'cef32nj325njn523',
				name: 'Blue Pants',
				hashs: ['#pants', '#clothes'],
				image:
					'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				date: '07.12.2020 5:20AM',
				user:
					'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				price: 10,
			},
			{
				id: 'sfgrgnj325njn523',
				name: 'grey shirt',
				hashs: ['#shirts', '#clothes'],
				image:
					'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				date: '07.12.2020 5:20AM',
				user:
					'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				price: 21,
			},
			{
				id: 'megrgnj325njn523',
				name: 'wedding dress',
				hashs: ['#dress', '#wedding'],
				image:
					'https://images.pexels.com/photos/1500881/pexels-photo-1500881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				date: '07.12.2020 5:20AM',
				user:
					'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				price: 44,
			},
		],
		cart: [],
	},
	getters: {
		products(state) {
			return state.products;
		},
		cart(state) {
			return state.cart;
		},
	},
	mutations: {
		addToCart(state, payload) {
			let exist = state.cart.some((item) => item.id == payload.id);
			if (!exist) {
				payload.count = 1;
				state.cart.push(payload);
			}
		},
		changeCount(state, payload) {
			let item = state.cart.find((elm) => elm.id === payload.id);

			if (item) {
				console.log(item, item.id);
				state.cart = state.cart.map((el) => {
					return el.id === item.id
						? {
								...el,
								count:
									payload.type === 'i'
										? el.count + 1
										: el.count > 1
										? el.count - 1
										: el.count,
						  }
						: el;
				});
			}
		},
		remove(state, payload) {
			const index = state.cart.findIndex((elm) => elm.id == payload);
			if (index !== -1) state.cart.splice(index, 1);
		},
	},
	actions: {},
	modules: {},
});
