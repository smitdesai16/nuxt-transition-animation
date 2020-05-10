/* eslint-disable @typescript-eslint/no-unused-vars */
export default ({ app } : {app: any}, inject: any) => {
	inject('getIPAddress', async() => {
		return await app.$axios.$get('https://icanhazip.com', { timeout: 1000 })
	})
}
