export default function({ store }: {store: any}) {
	store.dispatch('navbar/setNavBarStatus', false)
}
