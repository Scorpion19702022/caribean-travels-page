const burgerBtn = document.querySelector('.navbar__burger')
const nav = document.querySelector('.navbar__link')
const btnbBars = document.querySelector('.fa-bars')
const btnCross = document.querySelector('.fa-times')
const links = document.querySelectorAll('.navbar__link-nav')

const footerYear = document.querySelector('.footer__year')

const handleNav2 = () => {
	nav.classList.toggle('active')
	btnbBars.classList.toggle('hide')
	btnCross.classList.toggle('hide')

	links.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
			btnbBars.classList.remove('hide')
			btnCross.classList.add('hide')
		})
	})
}

const handleFooterYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleFooterYear()

burgerBtn.addEventListener('click', handleNav2)
