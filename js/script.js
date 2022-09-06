window.addEventListener('load' , ()=>{
    const sizeWindowWidth = document.documentElement.clientWidth
    const sizeWindowHeigth = document.documentElement.clientHeight
    const headerFon = document.querySelector('.header-fone')
    if(sizeWindowWidth>1440){
        
        headerFon.style.right = `0%`
    }
    
    console.log(sizeWindowHeigth,sizeWindowWidth)
})