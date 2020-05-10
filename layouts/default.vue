<template>
	<div>
		<NavBar />
		<nuxt />
		<Footer project-start-year="2020" />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

@Component({
	components: { NavBar, Footer }
})
export default class DefaultLayout extends Vue {

}
</script>

<style lang="scss">
html.wf-josefinsans-n4-active {
	body {
		font-family: 'Josefin Sans';
	}
}

html.wf-arvo-n7-active {
	h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
		font-family: 'Arvo';
	}
}
</style>
