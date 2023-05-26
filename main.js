const burgerBtn = document.querySelector('.header__btn')
const closeBtn = document.querySelector('.nav__btn')
const navLinks = document.querySelectorAll('.nav__link')
const mobileNavigation = document.querySelector('.nav--mobile')

burgerBtn.addEventListener('click', () => {
	mobileNavigation.classList.remove('hide')
})
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		mobileNavigation.classList.add('hide')
	})
})
closeBtn.addEventListener('click', () => {
	mobileNavigation.classList.add('hide')
})
