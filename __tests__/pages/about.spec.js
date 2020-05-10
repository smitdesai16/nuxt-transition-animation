import { shallowMount } from '@vue/test-utils'
import About from '@/pages/about'

const factory = () => {
	return shallowMount(About, {
	})
}

describe('about', () => {
	test('mounts properly', () => {
		const wrapper = factory()
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	test('renders properly', () => {
		const wrapper = factory()
		expect(wrapper.html()).toMatchSnapshot()
	})

	test('h1 renders properly', () => {
		const wrapper = factory()
		expect(wrapper.find('h1').text()).toBe('About')
	})
})
