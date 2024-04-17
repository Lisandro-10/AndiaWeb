const filterContainer = document.querySelector('.portfolio-filter-cat')
const galleryItems = document.querySelectorAll('.row-item')

filterContainer.addEventListener('click', (event) => {
	if (event.target.classList.contains('category')) {
		//deactivate existing active 'cat-nombre'
		filterContainer.querySelector('.active').classList.remove('active')

		//activate new 'cat-nombre'
		event.target.classList.add('active')
		const filterValue = event.target.getAttribute('data-filter')

		galleryItems.forEach((item) => {
			if (item.classList.contains(filterValue) || filterValue === 'all') {
				item.classList.remove('hide')
				item.classList.add('show')
			} else {
				item.classList.remove('show')
				item.classList.add('hide')
			}
		})
	}
})
