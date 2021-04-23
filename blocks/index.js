$(function() {
    const swiper = new Swiper('.swiper-company-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        // If we need pagination
        pagination: {
          el: '.swiper-company-pagination',
        },
        navigation: {
            nextEl: '.company-button-next',
            prevEl: '.company-button-prev',
          },
        // Navigation arrows
        breakpoints: {
      
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.company-button-next',
                prevEl: '.company-button-prev',
              }
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 5,
            spaceBetween: 11,
          }
        }
      });
      
      const swiper2 = new Swiper('.swiper-visit-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        // If we need pagination
        pagination: {
          el: '.swiper-visit-pagination',
        },
        navigation: {
            nextEl: '.visit-button-next',
            prevEl: '.visit-button-prev',
          },
        // Navigation arrows
        breakpoints: {
      
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.visit-button-next',
                prevEl: '.visit-button-prev',
              }
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 5,
            spaceBetween: 11,
          }
        }
      });
      
});

