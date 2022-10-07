const burgerBtn = document.querySelector('.navbar__burger')
const nav = document.querySelector('.navbar__link')
const bars = document.querySelector('.fa-bars')
const times = document.querySelector('.fa-times')
const links = document.querySelectorAll('.navbar__link-nav')

const footerYear = document.querySelector('.footer__year')

// const btnSubmit = document.querySelector('.forms__form-btn--submit')

// console.log(links)

// const handleNav = () => {
// 	nav.classList.toggle('active')
// 	bars.classList.toggle('hide')
// 	times.classList.toggle('hide')
// 	links.classList.toggle('active')
// }

// links.addEventListener('click', handleNav)

const handleNav2 = () => {
	nav.classList.toggle('active')
	bars.classList.toggle('hide')
	times.classList.toggle('hide')
	// burgerBtn.classList.remove('hide')

	links.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
			bars.classList.remove('hide')
			times.classList.add('hide')
		})
	})
}

const handleFooterYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleFooterYear()

// btnSubmit.addEventListener('click', e => {
// 	e.preventDefault()
// })

burgerBtn.addEventListener('click', handleNav2)
// nav.addEventListener('click', handleNav2)
