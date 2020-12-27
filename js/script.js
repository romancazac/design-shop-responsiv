const iconSearch = document.querySelector('.icons-header__search');

iconSearch.addEventListener("click", function (e) {
    iconSearch.classList.add('open');
   
  });

  var swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
   
    navigation: {
      nextEl: ' .baners__icon_prev',
      prevEl: ' .baners__icon_next',
    },
  });


  var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ' .baners__icon_prev',
      prevEl: ' .baners__icon_next',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        
      },
      1000: {
        slidesPerView: 3,
        
      },
      1300: {
        slidesPerView: 4,
        
      },
    }
  });

  const headeBurger = document.querySelector('.header-top__burger');
  const headerMenu = document.querySelector('.nav-header ');

  
    headeBurger.addEventListener("click", function (e) {
      headeBurger.classList.toggle('active');
      headerMenu.classList.toggle('active');
    });
 