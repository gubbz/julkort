export const postImage = (image) => {
	fetch('url', {
		method: 'GET',
		data: {image: image},
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		mode: 'cors',
	}).then(res => {
		return res.json()
	}).then(json => {
		return JSON.stringify(json).image
	})
}