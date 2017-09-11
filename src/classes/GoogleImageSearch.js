export default class GoogleImageSearch {

	/**
	 * Function for image search
	 *
	 * @param  {string} query   Image search filed query
	 * @return {Promise}        Returns a promise, with an array of found image URL's
	 */
	static searchImage(query) {
		query = encodeURIComponent(query)

		const uri = `https://cors-anywhere.herokuapp.com/https://www.google.com/search?source=lnms&sa=X&gbv=1&tbm=isch&q=${query}`

		let h = new Headers()
		h.append("Accept", "application/json")
		h.append("Accept", "application/xml")
		h.append("Accept", "application/text")
		h.append("Accept", "application/html")

		let req = new Request(uri, {
			method: "GET",
			headers: h,
			mode: "cors"
		})

		return new Promise((resolve, reject) => {

			// Fetches Items from Google Image Search URL
			fetch(req)
				.then(res => res.text())
				.then(res => {

					// Transforms HTML string into DOM object
					let parser = new DOMParser()
					parser = parser.parseFromString(res, "text/html")

					// Gets DOM element with image results
					let images = parser.getElementById("ires").childNodes[0]

					if (images.nodeName === "DIV") {

						resolve(this.googleGetMobile(images))
					} else if (images.nodeName === "TABLE") {

						resolve(this.googleGetDesktop(images))
					} else {

						reject("Unknown System")
					}

				})
				.catch(err => reject(err))
		})
	}

	/**
	 * Traverses DOM tree in mobile layout
	 *
	 * @param  {NodeList} images    Children of "ires" container
	 * @return {Array}              Array of found images URL's
	 */
	static googleGetMobile(images) {

		// Transforms DOM NodeList of images into Array.
		// Needed to use .map method
		images = Array.from(images.childNodes)

		// Maps Image Sources
		return images.map((imgDiv) => {
			console.log(imgDiv.getAttribute("href"));
			return imgDiv.childNodes[0].src
		})
	}

	/**
	 * Traverses DOM tree in desktop layout
	 *
	 * @param  {NodeList} images    Children of "ires" container
	 * @return {Array}              Array of found images URLs
	 */
	static googleGetDesktop(images) {

		// NodeList of table rows
		images = images.childNodes[0].childNodes

		// Empty List of image URLs
		let imgSrc = []

		// Traverses table node for images
		images.forEach((tRow) => {
			tRow = tRow.childNodes
			tRow.forEach((tCol) => {
				let aLink = tCol.childNodes[0].childNodes[0]
				imgSrc.push(aLink.src)
			})
		})

		return imgSrc
	}

}