const titulo = document.querySelector('title')
if (titulo) {
	titulo.textContent = titulo.textContent + titulo.getAttribute('data-title')
}

const backImg = document
	.getElementById('header')
	.getAttribute('data-background')

const headerClass = document.getElementById('header')
headerClass.style.backgroundImage = `-webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${backImg}),
	linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${backImg})`

/*Adding the header and footer*/
fetch('./../header.html')
	.then((response) => response.text())
	.then((data) => {
		document.getElementById('header').innerHTML = data
	})
	.then(() => {
		document.getElementById('h1-portada').textContent =
			titulo.getAttribute('data-title')
	})

fetch('./../footer.html')
	.then((response) => response.text())
	.then((data) => {
		document.getElementById('footer').innerHTML = data
	})
