
window.addEventListener('load', () => {

    function openMenu() {
        let menuOpen = false
        const menu = document.querySelector('.menu__top')
        const divMenu = document.createElement('div')
        const menuBtn = document.querySelector('.btn-menu');
        const menu_span_1 = document.querySelector('.menu_span_1')
        const menu_span_2 = document.querySelector('.menu_span_2')
        const menu_span_3 = document.querySelector('.menu_span_3')
        const header = document.querySelector('.header')

        const cloneMenu = menu.cloneNode(true)
        divMenu.appendChild(cloneMenu)
        divMenu.classList.add('menu__div')
        document.body.appendChild(divMenu)

        menuBtn.addEventListener('click', () => {
            if (menuOpen) {
                menuOpen = false
                header.style.filter = ' blur(0px)';
                divMenu.classList.remove('menu__div_transform')
                menu_span_2.classList.remove('span__center')
                menu_span_1.classList.remove('span_rotate_left')
                menu_span_3.classList.remove('span_rotate_right')
            }
            else if (!menuOpen) {
                menuOpen = true
                header.style.filter = ' blur(20px)';
                menu_span_2.classList.add('span__center')
                menu_span_1.classList.add('span_rotate_left')
                menu_span_3.classList.add('span_rotate_right')
                divMenu.classList.add('menu__div_transform')
            }
            else {
                return false
            }

        })

    }
    openMenu()


    function slider() {
       
        const mySlider = document.querySelector('.slider')
        if (mySlider != null) {
            let numberSilde = 0;
            const slides = mySlider.querySelectorAll('.slide')

            const btnLeft = mySlider.querySelector('#btnSlideLeft')
            const btnRight = mySlider.querySelector('#btnSlideRight')

            function prevSlide() {
                btnLeft.addEventListener('click', () => {
                    for (let i = 0; i < slides.length; i++) {
                        if (numberSilde <= 0) {
                            numberSilde = slides.length
                        }
                        slides[i].style.display = 'none'
                        slides[numberSilde - 1].style.display = 'block'
                    }
                    numberSilde--
                    return numberSilde
                })
            }
            function nextSlide() {
                console.log(numberSilde)
                btnRight.addEventListener('click', () => {
                    numberSilde++
                    console.log(numberSilde)
                    for (let i = 0; i < slides.length; i++) {
                        if (numberSilde >= slides.length) {
                            numberSilde = 0
                        }
                        slides[i].style.display = 'none'
                        slides[numberSilde].style.display = 'block'
                    }
                    return numberSilde
                })
                return numberSilde
            }
            console.log(window.innerWidth)
            if (window.innerWidth < 992) {
                if (slides.length > 1) {
                    console.log(slides.length)
                    for (let i = 1; i < slides.length; i++) {
                        slides[i].style.display = 'none'
                    }
                    prevSlide()
                    nextSlide()
                }
            }
            else if (window.innerWidth > 992) {
                console.log(992)
                for (let i = 2; i < slides.length; i++) {
                    slides[i].style.display = 'none'
                }
            }
        }

    }
    slider()


})

