function verticalSliderPlugin() {
	const upBtn = document.querySelector('.up-button')
	const downBtn = document.querySelector('.down-button')
	const sidebar = document.querySelector('.sidebar')
	const container = document.querySelector('.container')
	const mainSlide = document.querySelector('.main-slide')

	const slidesCount = mainSlide.querySelectorAll('.containerSlides').length

	let activeSlideIndex = 0

	sidebar.style.top = `-${(slidesCount -1) * 100}vh`

	upBtn.addEventListener('click', () => {
		changeSlide('up')
	})

	downBtn.addEventListener('click', () => {
		changeSlide('down')
	})

	document.addEventListener('keydown', event => {
		if (event.key === 'ArrowUp') {
			changeSlide('up')
		} else if (event.key === 'ArrowDown') {
			changeSlide('down')
		}
		
	})



	function changeSlide(direction) {
		if (direction === 'up') {
			activeSlideIndex++
			if (activeSlideIndex === slidesCount) {
				activeSlideIndex = 0
			}
		} else if (direction === 'down') {
			activeSlideIndex--
			if (activeSlideIndex < 0) {
				activeSlideIndex = slidesCount - 1
			}
		}

		const height = container.clientHeight

		mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
		sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
	}
}



function horizontalSliderPlugin(activeSlide) {
	const slides = document.querySelectorAll('.slide')

	for (let i = 0; i < activeSlide.length; i++) {
		slides[activeSlide[i]].classList.add('active')
	}

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			clearActiveClasses()

			slide.classList.add('active')
		})
	}

	function clearActiveClasses() {
		slides.forEach((slide) => {slide.classList.remove('active')})
	}
}

verticalSliderPlugin()
horizontalSliderPlugin([0, 6, 12])
