<template>
	<header v-click-outside="closeNavBar">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div class="container-xl">
				<nuxt-link to="/" class="navbar-brand">
					Navbar
				</nuxt-link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
					@click="toggleNavBar"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div id="navbarNav" class="collapse navbar-collapse" :class="{ 'show': getNavbarExpand }">
					<ul class="navbar-nav">
						<li class="nav-item">
							<nuxt-link to="/" class="nav-link">
								Home
							</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link to="/about" class="nav-link">
								About
							</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link to="/contact" class="nav-link">
								Page Not Found
							</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="navbar-margin-fix" />
	</header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {
	toggleNavBar() {
		this.$store.dispatch('navbar/setNavBarStatus', !this.$store.getters['navbar/getNavBarStatus'])
	}

	closeNavBar() {
		this.$store.dispatch('navbar/setNavBarStatus', false)
	}

	get getNavbarExpand() {
		return this.$store.getters['navbar/getNavBarStatus']
	}
}
</script>

<style lang="scss" scoped>
.container-xl {
	padding: 0;
}

.navbar-margin-fix {
	margin-bottom: 71px;
}

@media (min-width: 1200px) {
	.container-xl {
		padding-right: 15px;
		padding-left: 15px;
	}
}
</style>
