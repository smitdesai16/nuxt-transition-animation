import { Vue } from 'nuxt-property-decorator'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
	preLoad: 1,
	error: 'https://image.flaticon.com/icons/svg/702/702576.svg',
	loading: 'https://image.flaticon.com/icons/svg/860/860820.svg',
	attempt: 1,
	observer: true,
	observerOptions: {
		rootMargin: '0px',
		threshold: 0.1
	}
})
