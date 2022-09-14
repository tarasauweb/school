window.addEventListener("load", () => {
  const sizeWindowWidth = document.documentElement.clientWidth;
  const container = document.querySelector(".container").clientWidth;
  const imgResponsive = document.querySelector(".img-responsive");
  const imgResponsiveClientHeight = imgResponsive.clientHeight;
  const header = document.querySelector(".header");
  const body = document.body;
  if (sizeWindowWidth < 576) {
    header.style.height = imgResponsiveClientHeight - 4 + "px";
  }
  function slider() {
    let count = 0;
    const slides = document.querySelector(".slides");
    const slider = document.querySelector(".slider")
    let rightMarginForSlide = sizeWindowWidth - container;
    const allSlides = document.querySelectorAll(".slide");
    const btnSliderNext = document.querySelector(".next__btn");
    const btnSliderPrev = document.querySelector(".prev__btn");
    const slideWidth = allSlides[0].clientWidth;
    const imgSlide = document.querySelectorAll(".img-slide")
    const sliderWidth = slider.clientWidth
    const allTextSliderDiv = document.querySelectorAll('.slider__all-text')
    let slideWidthStart = sliderWidth;
    const openAllRewbtn = document.querySelectorAll('.open-all-rew')
    openAllRewbtn.forEach(item=>{
      item.classList.add('d-n')
    })
    if(sizeWindowWidth<1440 && sizeWindowWidth>992){
      const procentsDecrementSizeWindow = Math.floor(-(100*(sizeWindowWidth/1440-1)))
      const startWidthImgSlide = imgSlide[0].clientWidth
      const sizeImgAfterDecWindow = startWidthImgSlide - (startWidthImgSlide/100*procentsDecrementSizeWindow)
      imgSlide.forEach(item=>{
        item.style.width = sizeImgAfterDecWindow + 'px'
      })
      slider.style.height = slides.clientHeight + 20 + 'px'
      console.log(container)
    }
    const standartSizeSliderHeight = slider.clientHeight
    let isOpenRew = false
    if(sizeWindowWidth<=992){
      const procentsDecrementSizeWindow = Math.floor(-(100*(sizeWindowWidth/1440-1)))
      const startWidthImgSlide = imgSlide[0].clientWidth
      const sizeImgAfterDecWindow = startWidthImgSlide - (startWidthImgSlide/100*procentsDecrementSizeWindow)
      if(sizeWindowWidth>576){
        imgSlide.forEach(item=>{
          item.style.width = sizeImgAfterDecWindow + 'px'
        })
      }
      allTextSliderDiv.forEach((item,index)=>{
        item.setAttribute('data-text' , index)
        item.classList.add('d-n')
      })
      openAllRewbtn.forEach((item,index)=>{
        item.setAttribute('data-text' , index)
        item.classList.remove('d-n')
      })
      for(let i = 0 ;i<openAllRewbtn.length;i++){
        openAllRewbtn[i].addEventListener('click' , function(){
          slider.style.height = standartSizeSliderHeight + 'px'
          allTextSliderDiv[i].classList.add('d-n')
          if(this.getAttribute('data-text') === allTextSliderDiv[i].getAttribute('data-text')){
            if(!isOpenRew){
              console.log('false')
              isOpenRew = true
              allTextSliderDiv[i].classList.remove('d-n')
              const sizeheightSliderAllText =  allTextSliderDiv[i].clientHeight
              slider.style.height = standartSizeSliderHeight + sizeheightSliderAllText + 'px'
              openAllRewbtn[i].textContent = 'скрыть полный отзыв'
            }
            else{
              allTextSliderDiv[i].classList.add('d-n')
              isOpenRew = false
              slider.style.height = standartSizeSliderHeight + 'px'
              openAllRewbtn[i].textContent = 'читать полный отзыв'
            }
          }
        })
      }
    }
    allSlides.forEach((slide) => {
      if(slideWidthStart>container){
        slideWidthStart = container
      }
      slide.style.width = slideWidthStart + "px";
      if(rightMarginForSlide <=0){
        rightMarginForSlide = 20
      }
      slide.style.marginRight = rightMarginForSlide + "px";
    });
    const numTransletaX = slideWidthStart + rightMarginForSlide;
    let nowTranslaet = 0;

    btnSliderNext.addEventListener("click", () => {
      if(sizeWindowWidth<=992){
        slider.style.height = standartSizeSliderHeight + 'px'
        for(let i = 0 ; i <allTextSliderDiv.length;i++){
          allTextSliderDiv[i].classList.add('d-n')
          openAllRewbtn[i].textContent = 'читать полный отзыв'
        }
        isOpenRew = false
      }
      count++;
      nowTranslaet = nowTranslaet - numTransletaX;
      if (count >= allSlides.length) {
        count = 0;
        nowTranslaet = 0;
      }
      slides.style.transform = `translateX(${nowTranslaet}px)`;
    });
    btnSliderPrev.addEventListener("click", () => {
      if(sizeWindowWidth<=992){
        slider.style.height = standartSizeSliderHeight + 'px'
        for(let i = 0 ; i <allTextSliderDiv.length;i++){
          allTextSliderDiv[i].classList.add('d-n')
          openAllRewbtn[i].textContent = 'читать полный отзыв'
        }
        isOpenRew = false
      }
      count--;
      nowTranslaet = nowTranslaet + numTransletaX;
      if (count < 0) {
        count = allSlides.length-1;
        nowTranslaet = -numTransletaX * (allSlides.length - 1);
      }
      slides.style.transform = `translateX(${nowTranslaet}px)`;
    });
  }
  function menu() {
    const burger = document.querySelector(".burger");
    const sizeChange = sizeWindowWidth - container;
    const menu = document.querySelector(".menu");
    const headerHeight = header.clientHeight;
    const closeMenu = document.querySelector(".close__menu");
    const overlay = document.querySelector(".overlay");
    let menuOpen = false;
    let sizeChangeMenu = null;
    menu.style.height = headerHeight + "px";
    if (sizeWindowWidth > 1450) {
      const menuWidth = menu.clientWidth;
      sizeChangeMenu = menuWidth + sizeChange;
      console.log(sizeChangeMenu);
      menu.style.width = sizeChangeMenu / 2 + "px";
      menu.style.transform = `translateX(${sizeChangeMenu}px)`;
    }
    burger.addEventListener("click", () => {
      menuOpen = true;
      body.style.overflow = "hidden";
      menu.style.transform = `translateX(${0}px)`;
      overlay.style.display = "block";
    });
    closeMenu.addEventListener("click", () => {
      menuOpen = false;
      overlay.style.display = "none";
      body.style.overflow = "visible";
      if (sizeChangeMenu === null) {
        const menuWidth = menu.clientWidth;
        menu.style.transform = `translateX(${menuWidth}px)`;
      } else {
        menu.style.transform = `translateX(${sizeChangeMenu / 2}px)`;
      }
    });
    overlay.addEventListener("click", () => {
      menuOpen = false;
      overlay.style.display = "none";
      body.style.overflow = "visible";
      if (sizeChangeMenu === null) {
        const menuWidth = menu.clientWidth;
        menu.style.transform = `translateX(${menuWidth}px)`;
      } else {
        menu.style.transform = `translateX(${sizeChangeMenu / 2}px)`;
      }
    });
  }
  function openAllCourse () {
    let open = false
    const sectionCourse = document.querySelector(".plan__blocks")
    const sectionCourseHeight = sectionCourse.clientHeight
    const allPlanBlock = document.querySelectorAll(".plan__block")
    const twoHeightPlanBlock = allPlanBlock[0].clientHeight + allPlanBlock[1].clientHeight +20
    sectionCourse.style.height = twoHeightPlanBlock + 'px'
    const btnSeeAllPlanCourse = document.querySelector('.plan__btn')
    btnSeeAllPlanCourse.addEventListener('click' , ()=>{
      if(!open){
        open = true
        sectionCourse.style.transition = '1.5s'
        sectionCourse.style.height = sectionCourseHeight + 'px'
        btnSeeAllPlanCourse.textContent = 'Свернуть программу'
      }
      else{
        open = false
        sectionCourse.style.transition = '1.5s'
        sectionCourse.style.height = twoHeightPlanBlock + 'px'
        btnSeeAllPlanCourse.textContent = 'Смотреть программу курса'
      }
    })
  }
  function openVideo() {
    const video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/tXB3XXBQm_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="postVideo" enablejsapi=1></iframe>`;
    const play = document.querySelector(".offer__btn");
    const overlay = document.querySelector(".overlay-video");
    play.addEventListener("click", () => {
      overlay.classList.remove("d-n");
      overlay.innerHTML = video
      body.style.overflow = 'hidden'
    });
    overlay.addEventListener("click", () => {
      overlay.classList.add("d-n");
      const postVideo = document.querySelector('.postVideo')
      postVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      postVideo.parentNode.removeChild(postVideo)
      body.style.overflow = 'visible'
    });
  }
  openVideo();
  openAllCourse ()
  menu();
  slider();
});
