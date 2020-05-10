<template>
	<div class="container-xl">
		<h1 v-if="error.statusCode === 404">
			Page not found
		</h1>
		<h1 v-else>
			An error occurred
		</h1>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ErrorLayout extends Vue {
	@Prop() error: any
}
</script>
