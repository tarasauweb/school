window.addEventListener("load", () => {
  const sizeWindowWidth = document.documentElement.clientWidth;
  const sizeWindowHeigth = document.documentElement.clientHeight;
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

    const rightMarginForSlide = sizeWindowWidth - container;
    const allSlides = document.querySelectorAll(".slide");
    const btnSliderNext = document.querySelector(".next__btn");
    const btnSliderPrev = document.querySelector(".prev__btn");
    const slideWidth = allSlides[0].clientWidth;
    let slideWidthStart = slideWidth;
    if (sizeWindowWidth < 1170) {
      slideWidthStart = sizeWindowWidth;
    }
    allSlides.forEach((slide) => {
      slide.style.width = slideWidthStart + "px";
      slide.style.marginRight = rightMarginForSlide + "px";
    });
    const numTransletaX = slideWidthStart + rightMarginForSlide;
    let nowTranslaet = 0;

    btnSliderNext.addEventListener("click", () => {
      count++;
      nowTranslaet = nowTranslaet - numTransletaX;
      if (count >= allSlides.length) {
        count = 0;
        nowTranslaet = 0;
      }
      slides.style.transform = `translateX(${nowTranslaet}px)`;
    });
    btnSliderPrev.addEventListener("click", () => {
      count--;
      nowTranslaet = nowTranslaet + numTransletaX;
      if (count <= 0) {
        count = allSlides.length;
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
    const video = `<iframe width="560" height="315" src="https://www.youtube.com/watch?v=tXB3XXBQm_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="postVideo" enablejsapi=1></iframe>`;
    const play = document.querySelector(".offer__btn");
    const overlay = document.querySelector(".overlay-video");
    play.addEventListener("click", () => {
      overlay.classList.remove("d-n");
      overlay.insertAdjacentHTML('afterend' , video)
    });
    overlay.addEventListener("click", () => {
      overlay.classList.add("d-n");
      const postVideo = document.querySelector('.postVideo')
      postVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      postVideo.parentNode.removeChild(postVideo)
      console.log(postVideo)
    });
  }
  
  openVideo();
  openAllCourse ()
  menu();
  slider();
});
