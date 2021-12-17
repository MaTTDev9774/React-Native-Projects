import { firebaseDatabase, firebaseFirestore } from '../lib/firbase'

export function getDataList(nodePath, callback, size = 10) {
	let query = firebaseDatabase.ref(nodePath).limitToLast(size)
	query.on('value', dataSnapshot => {
		let items = []
		dataSnapshot.forEach(childSnapshot => {
			let item = childSnapshot.val()
			item['key'] = childSnapshot.key
			items.push(item)
		})
		callback(items)
	})

	return query
}

export function getDataList1(nodePath, callback, size = 10) {
	let query = firebaseFirestore.collection(nodePath).limit(size)
	query.onSnapshot(dataSnapshot => {
		let items = []
		dataSnapshot.forEach(childSnapshot => {
			let item = childSnapshot.data()
			item['id'] = childSnapshot.id
			items.push(item)
		})
		callback(items)
	})

	return query
}
