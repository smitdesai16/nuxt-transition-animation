<template>
	<div>
		<Main />
		<nuxt />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Main from '@/components/main.vue'

@Component({
	components: { Main }
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
