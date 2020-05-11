<template>
	<main class="container-sm">
		<div class="row">
			<div class="col-12">
				<nuxt-link exact to="/">
					index
				</nuxt-link>
				<nuxt-link to="/about">
					about
				</nuxt-link>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<h1>
					{{ getPage }}
				</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="animation" :class="{ 'active' : (getPage === 'index') }" />
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class MainComponent extends Vue {
	get getPage() {
		return this.$store.getters['page/getPage']
	}
}
</script>

<style lang="scss" scoped>
.animation {
	background-image: url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/43788626_10217833288883374_934495084433375232_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_oc=AQkfF1_bseGGkb_g_7wqQsvoKioJK0dIwcOWhIMHbn033ZcMeMmXdsnqJCWN6_cnAFI&_nc_ht=scontent-dfw5-1.xx&oh=ebd5428ba8dfe7ced548e998b148a0dd&oe=5EDCC98D);
	background-size: cover;
	width: 100px;
	height: 100px;
	transition: all 500ms ease;
	border-radius: 50%;

	&.active {
		width: 200px;
		height: 200px;
		border-radius: 8px;
	}
}
</style>
