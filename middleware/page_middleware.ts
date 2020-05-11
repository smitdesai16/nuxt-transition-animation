export default function({ store, route }: {store: any, route: any}) {
	store.dispatch('page/setPage', route.name)
}
