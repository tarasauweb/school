window.addEventListener('load', () => {
    const sizeWindowWidth = document.documentElement.clientWidth
    const sizeWindowHeigth = document.documentElement.clientHeight
    const container = document.querySelector('.container').clientWidth
    const imgResponsive = document.querySelector('.img-responsive')
    const imgResponsiveClientHeight = imgResponsive.clientHeight
    const header = document.querySelector('.header')
    if (sizeWindowWidth < 576) {

        header.style.height = imgResponsiveClientHeight - 4 + 'px'
    }

    function slider() {
        let count = 0
        const slides = document.querySelector('.slides')
        
        
        const rightMarginForSlide = sizeWindowWidth - container
        const allSlides = document.querySelectorAll('.slide')
        const btnSliderNext = document.querySelector('.next__btn')
        const btnSliderPrev = document.querySelector('.prev__btn')
        const slideWidth = allSlides[0].clientWidth
        let slideWidthStart = slideWidth
        if(sizeWindowWidth<1170){
            slideWidthStart = sizeWindowWidth
        }
        allSlides.forEach(slide => {
            slide.style.width = slideWidthStart + 'px'
            slide.style.marginRight = rightMarginForSlide + 'px'
        })
        const numTransletaX = slideWidthStart + rightMarginForSlide
        let nowTranslaet = 0

        btnSliderNext.addEventListener('click', () => {
            count++
            nowTranslaet = nowTranslaet-numTransletaX
            if(count>=allSlides.length){
                count = 0
                nowTranslaet = 0
            }
            slides.style.transform = `translateX(${nowTranslaet}px)`
        })
        btnSliderPrev.addEventListener('click' , ()=>{
            count--
            nowTranslaet = nowTranslaet+numTransletaX
            if(count<=0){
                count = allSlides.length
                nowTranslaet = (-numTransletaX) * (allSlides.length-1)
            }
            slides.style.transform = `translateX(${nowTranslaet}px)`
        })
    }

    function menu () {
        
        const burger = document.querySelector('.burger')
        const sizeChange = sizeWindowWidth - container
        const menu = document.querySelector('.menu')
        const headerHeight = header.clientHeight
        const closeMenu = document.querySelector('.close__menu')
        const overlay = document.querySelector('.overlay')
        let menuOpen = false
        let sizeChangeMenu = null
        menu.style.height = headerHeight+'px'
        if(sizeWindowWidth>1450){
            const menuWidth = menu.clientWidth
            sizeChangeMenu =  menuWidth + sizeChange
            console.log(sizeChangeMenu)
            menu.style.width = sizeChangeMenu/2 + 'px'
            menu.style.transform = `translateX(${sizeChangeMenu}px)`
        }
        burger.addEventListener('click', ()=>{
            menuOpen = true
            menu.style.transform = `translateX(${0}px)`
            overlay.style.display = 'block'
        })
        closeMenu.addEventListener('click' , ()=>{
            menuOpen = false
            overlay.style.display = 'none'
            if(sizeChangeMenu === null){
                const menuWidth = menu.clientWidth
                menu.style.transform = `translateX(${menuWidth}px)`
            }
            else{
                menu.style.transform = `translateX(${sizeChangeMenu/2}px)`
            }
            
        })
        overlay.addEventListener('click' , ()=>{
            menuOpen = false
            overlay.style.display = 'none'
            if(sizeChangeMenu === null){
                const menuWidth = menu.clientWidth
                menu.style.transform = `translateX(${menuWidth}px)`
            }
            else{
                menu.style.transform = `translateX(${sizeChangeMenu/2}px)`
            }
        })

    }
    menu ()
    slider()
})