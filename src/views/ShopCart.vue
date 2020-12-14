<template>
	<div class="shopCart">
		<v-container>
			<v-card>
				<v-card-title>Shopping Cart</v-card-title>
				<v-card-text>
					<v-row>
						<v-col md="8" sm="12">
							<v-card-text
								v-if="products.length > 0"
								class="full-height d-flex flex-column"
							>
								<v-list two-line>
									<cart-item
										v-for="(product, index) in products"
										:key="`${product.id}${index}`"
										:product="product"
									></cart-item>
								</v-list>
								<v-spacer></v-spacer>
								<v-divider></v-divider>

								<div class="d-flex justify-space-between mt-2">
									<v-btn text color="primary">
										<v-icon>mdi-arrow-left</v-icon> continue
										shopping</v-btn
									>
									<div class="title">subtotal: ${{ total }}</div>
								</div>
							</v-card-text>

							<v-card-text
								v-else
								class="d-flex justify-center align-center text-capitalize title full-height"
								>the cart is empty
							</v-card-text>
						</v-col>
						<v-col md="4" sm="12">
							<v-theme-provider dark>
								<v-card class="cardStyle pa-4">
									<v-card-title class="white--text"
										>Card Details</v-card-title
									>
									<v-card-text>
										<div class="subtitle-2">Card Type</div>
										<div class="d-flex">
											<v-img
												src="https://www.pngfind.com/pngs/b/590-5901995_visa-mastercard-logo-png.png"
											></v-img>
										</div>
									</v-card-text>
									<v-card-text>
										<v-form
											ref="form"
											v-model="valid"
											lazy-validation
										>
											<v-text-field
												v-model="name"
												:counter="15"
												:rules="nameRules"
												label="Name on card"
												placeholder="name"
												required
											></v-text-field>
											<v-text-field
												v-model="cardNum"
												:counter="16"
												:rules="cardNumRules"
												label="Card Number"
												placeholder="#### #### #### ####"
												type="number"
												required
											></v-text-field>
											<v-row>
												<v-col cols="8">
													<v-menu
														v-model="menu2"
														:close-on-content-click="false"
														:nudge-right="40"
														transition="scale-transition"
														offset-y
														min-width="290px"
													>
														<template
															v-slot:activator="{ on, attrs }"
														>
															<v-text-field
																v-model="date"
																label="Expiration Date"
																placeholder="pick a date"
																readonly
																v-bind="attrs"
																v-on="on"
															></v-text-field>
														</template>
														<v-date-picker
															v-model="date"
															@input="menu2 = false"
														></v-date-picker>
													</v-menu>
												</v-col>
												<v-col cols="4">
													<v-text-field
														v-model="cvv"
														:counter="3"
														:rules="cvvRules"
														label="Cvv"
														placeholder="xxx"
														required
														type="number"
													></v-text-field>
												</v-col>
											</v-row>
										</v-form>
									</v-card-text>
									<v-card-actions>
										<v-btn
											:disabled="!valid"
											color="primary"
											block
											x-large
											class="mr-4"
											@click="validate"
										>
											checkout
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-theme-provider>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import cartItem from '../components/app/cartItem.vue';
export default {
	components: { cartItem },
	name: 'ShopCart',
	data: () => ({
		valid: true,
		name: '',
		nameRules: [
			(v) => !!v || 'Name is required',
			(v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
		],
		cvv: '',
		cvvRules: [
			(v) => !!v || 'cvv is required',
			(v) => (v && v.length < 4) || 'Name must be less than 4 characters',
		],
		cardNum: '',
		cardNumRules: [
			(v) => !!v || 'card number is required',
			(v) => (v && v.length == 16) || 'Name must be  16 characters',
		],
		date: '',
		menu2: false,
		checkbox: false,
	}),
	computed: {
		products() {
			return this.$store.getters['cart'];
		},
		total() {
			if (this.products.length > 0) {
				return this.products
					.map((elm) => elm.price * elm.count)
					.reduce((a, b) => a + b, 0);
			}
			return 0;
		},
	},
	methods: {
		validate() {
			this.$refs.form.validate();
		},
	},
};
</script>
<style lang="scss" scoped>
.cardStyle {
	background: linear-gradient(182deg, #2c2d31, #41434b);
}
</style>
