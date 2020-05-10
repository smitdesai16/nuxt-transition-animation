import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/footer'

const factory = () => {
	return shallowMount(Footer, {
	})
}

describe('Footer', () => {
	test('mounts properly', () => {
		const wrapper = factory()
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	test('renders properly', () => {
		const wrapper = factory()
		expect(wrapper.html()).toMatchSnapshot()
	})

	test('footer section 1 renders properly', () => {
		const wrapper = factory()
		expect(wrapper.find('#footer-section-1 h3').text()).toBe('footer section 1')
	})
})
