export default function({ route }: { route:any }) {
	if (process.client) {
		window.ga('create', process.env.GA_ID, 'auto')
		window.ga('set', 'page', route.fullPath)
		window.ga('set', 'title', route.name)
		window.ga('send', 'pageview')
	}
}
