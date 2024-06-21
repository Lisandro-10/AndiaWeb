const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category')
console.log(category)

const filterContainer = document.querySelector('.portfolio-filter-cat')
const galleryItems = document.querySelectorAll('.row-item')

if (category === 'croquis') {
	window.addEventListener('load', (event) => {
		//deactivate existing active 'cat-nombre'
		filterContainer.querySelector('.active').classList.remove('active')

		//activate new 'cat-nombre'
		const croquisCategory = filterContainer.querySelector(
			'[data-filter="croquis"]'
		)
		croquisCategory.classList.add('active')
		galleryItems.forEach((item) => {
			if (item.classList.contains('croquis')) {
				item.classList.remove('hide')
				item.classList.add('show')
			} else {
				item.classList.remove('show')
				item.classList.add('hide')
			}
		})
	})
	window.addEventListener('load', () => {
		history.replaceState(null, null, window.location.pathname)
		category = null
	})
}

filterContainer.addEventListener('click', (event) => {
	//maybe this conditional is no needed
	if (event.target.classList.contains('category')) {
		//deactivate existing active 'cat-nombre'
		filterContainer.querySelector('.active').classList.remove('active')

		//activate new 'cat-nombre'
		event.target.classList.add('active')
		const filterValue = event.target.getAttribute('data-filter')
		galleryItems.forEach((item) => {
			if (filterValue === 'all' && item.classList.contains('croquis')) {
				item.classList.remove('show')
				item.classList.add('hide')
			} else {
				if (
					filterValue === 'all' ||
					item.classList.contains(filterValue)
				) {
					item.classList.remove('hide')
					item.classList.add('show')
				} else {
					item.classList.remove('show')
					item.classList.add('hide')
				}
			}
		})
	}
})
