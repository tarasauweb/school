window.addEventListener('load' , ()=>{
    const sizeWindowWidth = document.documentElement.clientWidth
    const sizeWindowHeigth = document.documentElement.clientHeight
    const imgResponsive = document.querySelector('.img-responsive')
    const imgResponsiveClientHeight = imgResponsive.clientHeight
    const header = document.querySelector('.header')
    if(sizeWindowWidth<576){
        
        header.style.height = imgResponsiveClientHeight - 4 + 'px'
    }
    
    console.log(sizeWindowHeigth,sizeWindowWidth)
})